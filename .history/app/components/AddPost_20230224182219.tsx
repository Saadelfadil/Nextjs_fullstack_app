"use client"

import { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState("");
  return (
    <form>
        <div>
            <textarea onChange={()} name="title" value={title}> 

            </textarea>
        </div>
    </form>
  )
};

export default AddPost;
