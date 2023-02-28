"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const queryClient = useQueryClient();
  let postId: string;

  // Create Post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),
    {
      onError: (error) => {
        error instanceof AxiosError &&
          toast.error(error?.response?.data.message, { id: postId });
        setIsDisabled((prev) => (prev = false));
      },
      onSuccess: (data) => {
        toast.success("Post has been made", { id: postId });
        queryClient.invalidateQueries(["posts"]);
        setTitle((prev) => (prev = ""));
        setIsDisabled((prev) => (prev = false));
      },
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    postId = toast.loading("Creating your post", { id: postId });
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
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
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          }`}
        >
          {title.length}/300
        </p>
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
