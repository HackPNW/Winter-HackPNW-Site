const yup = require("yup");
const _ = require("lodash");
const { MongoClient } = require("mongodb");
const nodemailer = require("nodemailer");

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

const dbName = "hackpnw";

const colorOptions = ["red", "amber", "green", "cyan", "violet", "pink"];
const gradeOptions = ["9", "10", "11", "12"];

const formSchema = yup.object({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  email: yup.string().required().email().label("Email"),
  school: yup.string().required().label("High School"),
  grade: yup
    .string()
    .oneOf(gradeOptions, "Grade cannot be empty")
    .label("Grade"),
  color: yup
    .string()
    .oneOf(colorOptions, "Favourite Color cannot be empty")
    .label("Favourite Color"),
  github: yup.string().matches(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, {
    message: "GitHub username is not valid",
    excludeEmptyString: true,
  }),
  createTeam: yup.bool().required(),
  hasTeamCode: yup
    .bool()
    .when("createTeam", { is: false, then: (x) => x.required() }),
  teamCode: yup
    .string()
    .label("Team Code")
    .when(["createTeam", "hasTeamCode"], {
      is: (createTeam, hasTeamCode) => !createTeam && hasTeamCode,
      then: (x) =>
        x.required().matches(/^\d{4}-\d{4}$/, "Team Code is not valid"), // TODO: backend check
    }),
  teamName: yup
    .string()
    .label("Team Name")
    .when("createTeam", {
      is: true,
      then: (x) =>
        x
          .required()
          .matches(
            /^[a-z\d ]*$/i,
            "Team name must only contain: letters, numbers and spaces"
          )
          .min(5)
          .max(20),
    }),
  fillTeam: yup.bool().when("createTeam", {
    is: true,
    then: (x) => x.required(),
  }),
  restrictions: yup.string(),
});

async function createTeam(teamName, db) {
  const collection = db.collection("teams");

  let code = Math.floor(Math.random() * 1_0000_0000).toString();
  code = code.slice(0, 4) + "-" + code.slice(4, 8);

  const doc = {
    name: teamName,
    code,
  };

  await collection.insertOne(doc);

  return doc;
}

export default async function handler(request, response) {
  if (request.method !== "POST")
    return response.status(405).send("Method not allowed");

  // Checks
  let form = request.body;
  console.log(form);
  try {
    form = await formSchema.validate(form);
  } catch (e) {
    console.log(":(");
    console.log(e);
    return response.status(400).send(e);
  }

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("registrations");

  const doc = _.pick(form, [
    "firstName",
    "lastName",
    "email",
    "school",
    "grade",
    "color",
    "github",
    "restrictions",
  ]);

  let teamCode = null;
  if (form.createTeam) {
    const teamDoc = await createTeam(form.teamName, db);
    console.log(teamDoc);
    doc.teamId = teamDoc._id;
    teamCode = teamDoc.code;
  } else if (form.hasTeamCode) {
    const teamDoc = await db
      .collection("teams")
      .findOne({ code: form.teamCode });
    if (!teamDoc) return response.status(400).send("Not valid team code");
    doc.teamId = teamDoc._id;
  } else {
    doc.teamId = null;
  }

  await collection.insertOne(doc);

  await sendEmail(form.email);

  response.status(200).json({
    success: true,
    teamCode,
  });
}

async function sendEmail(recipientEmail) {
  let senderEmail = process.env.EMAIL_USER;
  let messageText = "This is a test! I Hope it worked";
  let messageHTML = "<p>This is a test! I Hope it worked</p>";
  let subject = "HackPNW Confirmation!"

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: senderEmail,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const message = {
    from: senderEmail,
    to: recipientEmail,
    subject: subject,
    text: messageText,
    html: messageHTML,
  }

  await transporter.sendMail(message);
}
