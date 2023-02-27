import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
    if (req.method === "GET")
    {
        try {
            const results = await prisma.post.findMany({
                include: {
                    user: true
                },
                orderBy: {
                    
                }
            });
            res.status(200).json(results);
        } catch (error) {
        res.status(403).json({ err: "Error fetching posts" });
        }
    }
}
