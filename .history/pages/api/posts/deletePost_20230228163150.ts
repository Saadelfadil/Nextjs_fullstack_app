import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // Delete a post
  if (req.method === "DELETE")
  {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ message: "Please sign in" });

    try {
        const 
        const result = await prisma.user.findUnique()
        // res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ err: "Error fetching posts" });
    }
  }
}
