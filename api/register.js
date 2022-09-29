const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

const dbName = "hackpnw";

export default async function handler(request, response) {
  if (request.method !== "POST")
    return response.status(405).send("Method not allowed");

  // TODO: Checks

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("registrations");

  const doc = { ...request.body };

  await collection.insertOne(doc);

  response.status(200).json({
    success: true,
    doc,
  });
}
