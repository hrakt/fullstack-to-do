// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../util/mongodb";
import { ObjectID } from "mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const data = req.query;
  const ObjectId = new ObjectID(data.id);

  const response = await db
    .collection("todos")
    .findOneAndDelete({ _id: ObjectId });

  res.json(response);
};
