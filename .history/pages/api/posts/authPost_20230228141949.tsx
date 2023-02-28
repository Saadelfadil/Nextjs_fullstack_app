import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401)
        .json({ message: "Please sign in" });
    try {

    //   res.status(200).json(session?.user);
    } catch (error) {
      res.status(403).json({ err: "Error fetching posts" });
    }
  }
}
