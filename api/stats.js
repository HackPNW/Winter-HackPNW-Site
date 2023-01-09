const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

const dbName = "hackpnw";

export default async function handler(request, response) {
  if (request.method !== "GET")
      return response.status(405).send("Method not allowed");

  await client.connect();
  const db = client.db(dbName);
  const teamCollection = await db.collection("teams").countDocuments();
  const registrationsCollection = await db.collection("registrations").countDocuments();

  return response.status(200).json({
    numberOfRegistrations: registrationsCollection,
    numberOfTeams: teamCollection
  });
}