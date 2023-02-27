"use client";

import AddPost from "./components/AddPost";
import axios from "axios";
import 

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
}

export default function Home() {
  return (
    <main>
      <AddPost />
    </main>
  );
}
