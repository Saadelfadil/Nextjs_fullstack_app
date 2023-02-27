"use client"

import { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState("");
  return (
    <form>
        <div>
            <textarea onChange={(e) => setTitle((pre) => pre = e.target.value)} name="title" value={title} placeholder={""}> 

            </textarea>
        </div>
    </form>
  )
};

export default AddPost;
