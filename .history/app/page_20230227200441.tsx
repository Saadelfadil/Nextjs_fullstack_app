"use client";

import AddPost from "./components/AddPost";
import axios from "axios";
import { useQuery } from "react-query"

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
}

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"]
  });
  error && error;
  isLoading && "loading...."
  console.log(data)
  return (
    <main>
      <AddPost />
    </main>
  );
}