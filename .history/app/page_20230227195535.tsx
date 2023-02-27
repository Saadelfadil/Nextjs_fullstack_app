"use client";

import AddPost from "./components/AddPost";
import axios from "axios";


const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts")
}

export default function Home() {
  return (
    <main>
      <AddPost />
    </main>
  );
}
