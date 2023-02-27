"use client"

import { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const handleSubmit = () => {
        
    };
    
  return (
    <form className="bg-white my-8 p-8 rounded-md">
        <div className="flex flex-col my-4">
            <textarea onChange={(e) => setTitle((pre) => pre = e.target.value)}
            name="title"
            value={title}
            placeholder={"What's in your mind?"}
            className="p-4 text-lg rounded-md my-2 bg-gray-200"
            >
            </textarea> 
        </div>

        <div>
            <button onClick={handleSubmit} disabled={isDisabled} className="text-sm bg-teal-600 text-white py-2 " type="submit">

            </button>
        </div>
    </form>
  )
};

export default AddPost;
