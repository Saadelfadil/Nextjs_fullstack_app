import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./[...nextauth]";
import { getServerSession } from "next-auth/next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "POST")
    {

    }
}
