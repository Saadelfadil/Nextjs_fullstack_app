import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // Get Auth User Posts
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ message: "Please sign in" });
    try {
      //   res.status(200).json(session?.user);
      const result = await prisma.post.findUnique({
        where: {
            email: session?.user?.email
        }
      })
    } catch (error) {
      res.status(403).json({ err: "Error fetching posts" });
    }
  }
}
