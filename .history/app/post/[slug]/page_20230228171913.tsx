"use client";

import Post from "@/app/components/Post";
import { useQuery } from "react-query";
import axios from "axios";

const fetchDetails = async (slug: string) => {
  const response = await axios.post(`/api/post/${slug}`);
  return response.data;
};

export default function PostDetails() {
    const {data, isLoading} = useQuery({
        queryFn: fetchDetails
    })
  return (
    <div>
      {/* <Post /> */}
      hello
    </div>
  );
}
