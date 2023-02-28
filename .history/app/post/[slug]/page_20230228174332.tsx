"use client";

import Post from "@/app/components/Post";
import { useQuery } from "react-query";
import axios from "axios";
import { url } from "inspector";
import 

const fetchDetails = async (slug: string) => {
  const response = await axios.post(`/api/post/${slug}`);
  return response.data;
};

type URL =  {
    params: {
        slug: string
    }
}
export default function PostDetails(url : URL) {
    const {data, isLoading} = useQuery({
        queryFn: () => fetchDetails(url.params.slug),
        queryKey: ["detail-post"]
    })

    if (isLoading) return "Loading...."
    console.log(data)
  return (
    <div>
      {/* <Post /> */}
      hello
    </div>
  );
}
