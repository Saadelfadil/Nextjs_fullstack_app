import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "POST")
    {
        const session = await getServerSession(req, res, authOptions);
        if (!session)
            return res.status(401).json({message: "Please sign in to make a post."})
        
        const title : string = req.body.title;

        // check title
        if (title.length > 300)
            return res.status(403).json({message: "Please write a shorter post."})
        if (title.length)
            return res.status(403).json({message: "Please don't leave this empty."})
        
        // create post
        try {
            
        } catch (error) {
            console.log()
        }
    }
}
