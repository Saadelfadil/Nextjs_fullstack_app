import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // 
  if (req.method === "GET") {
    try {
        console.log(req.query)
        const result = await prisma.post.findUnique({
            where: {
                id: req.query.details
            },
            include: {
                user: true,
                Comment: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        user: true
                    }
                }
            }
        })
        return res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ err: "Error fetching posts" });
    }
  }
}
