import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res
        .status(401)
        .json({ message: "Please sign in to make a post." });
    try {
      
      res.status(200).json(results);
    } catch (error) {
      res.status(403).json({ err: "Error fetching posts" });
    }
  }
}
