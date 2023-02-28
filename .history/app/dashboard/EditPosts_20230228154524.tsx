"use client";

import Image from "next/image";
import { useState } from "react";
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
    const [d, seetd] = useState(false)
    const [delete, setDelete] = useState(false)

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
            onClick={handleDelete}
            className="text-sm text-bold text-red-500 hover:scale-125 ease-in duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    <Toggle />
    </>
  );
}
