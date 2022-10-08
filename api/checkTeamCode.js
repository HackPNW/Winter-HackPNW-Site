const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

const dbName = "hackpnw";

export default async function handler(request, response) {
  if (request.method !== "GET")
    return response.status(405).send("Method not allowed");

  const teamCode = request.query.code;

  if (teamCode == null || !/^\d{4}-\d{4}$/.test(teamCode)) {
    return response.status(200).json({ valid: false });
  }

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("teams");

  const res = await collection.findOne({ code: teamCode });
  if (res == null) {
    return response.status(200).json({ valid: false });
  }

  response.status(200).json({ valid: true });
}
