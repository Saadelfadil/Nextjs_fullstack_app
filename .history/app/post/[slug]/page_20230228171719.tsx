"use client"

import Post from "@/app/components/Post"
import { useQuery } from "react-query"
import axios from "axios"

const fetchDetails = async (slug : string) => {
    const response = await axios.post("/api/post`/${slug}`)
};

export default function PostDetails()
{
    return (
        <div>
            {/* <Post /> */}
        </div>
    );
}