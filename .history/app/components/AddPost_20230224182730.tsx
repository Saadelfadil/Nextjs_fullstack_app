"use client"

import { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState("");
  return (
    <form>
        <div className="flex flex-col my-4">
            <textarea onChange={(e) => setTitle((pre) => pre = e.target.value)}
            name="title"
            value={title}
            placeholder={"What's in your mind?"}
            className="p-4 text-lg rounded-md my-2 bg-gray-200"
            >
            </textarea> 
        </div>
    </form>
  )
};

export default AddPost;