// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const data = req.query;

  const response = await db.collection("todos").insertOne(data);

  res.status(200).json(response);
};
