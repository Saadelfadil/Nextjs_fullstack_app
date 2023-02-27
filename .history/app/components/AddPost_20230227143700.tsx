"use client"

import { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle((pre) => (pre = e.target.value))}
          name="title"
          value={title}
          placeholder={"What's in your mind?"}
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>

      <div className="flex items-center justify-between gap-2">
        <p className={`font-bold text-sm ${title.length > 300 ? }`}>{title.length}/300</p>
        <button
          disabled={isDisabled}
          className="text-sm bg-teal-600 text-white rounded-xl py-2 px-6 disabled:opacity-25"
          type="submit"
        >
          Create a post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
