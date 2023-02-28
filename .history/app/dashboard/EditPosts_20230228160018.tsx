"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useMutation } from "react-query";
import Toggle from "./Toggle";

type EditProps = {
  id: string;
  avatar: string;
  name: string;
  title: string;
  comments?: {
    id: string;
    postId: string;
    userId: string;
  }[];
};

export default function EditPosts({
  avatar,
  name,
  title,
  comments,
  id,
}: EditProps) {
    const [del, setDel] = useState(false)

    // Detele Post
    const { mutate } = useMutation(
        async (id: string) => axios.delete("/api/posts/deletePost", {data: id}),
        {
            onerror: {
    
            }

        }
    );
  return (
    <>
      <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex gap-2 items-center">
          <Image width={32} height={32} src={avatar} alt="avatar" />
          <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
          <p className="break-all">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm font-bold text-gray-600 ">
            {comments?.length} Comments
          </p>
          <button
            onClick={() => setDel((pre) => (pre = true))}
            className="text-sm text-bold text-red-500 hover:scale-125 ease-in duration-200"
          >
            Delete
          </button>
        </div>
      </div>
      {del && <Toggle />}
    </>
  );
}
