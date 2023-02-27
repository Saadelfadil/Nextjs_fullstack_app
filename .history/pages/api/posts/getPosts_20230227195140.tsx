import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
    if (req.method === "GET")
    {
        try {
        const result = await prisma.post.findMany();
        res.status(200).json(result);
        } catch (error) {
        res
            .status(403)
            .json({ err: "Error has occured whilst making a post." });
        }
    }
   
}
