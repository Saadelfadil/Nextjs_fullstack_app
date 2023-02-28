"use client";

import Post from "@/app/components/Post";
import { useQuery } from "react-query";
import axios from "axios";
import { url } from "inspector";

const fetchDetails = async (slug: string) => {
  const response = await axios.post(`/api/post/${slug}`);
  return response.data;
};

export default function PostDetails() {
    const {data, isLoading} = useQuery({
        queryFn: () => fetchDetails(url.pa),
        queryKey: ["detail-post"]
    })
  return (
    <div>
      {/* <Post /> */}
      hello
    </div>
  );
}
