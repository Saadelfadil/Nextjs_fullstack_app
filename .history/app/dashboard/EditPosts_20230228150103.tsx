"use client";

import Image from "next/image";
import { useState } from "react";

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
  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      <div className="flex gap-2 items-center">
        <Image width={32} height={32} src={avatar} alt="avatar" />
        <h3 className="font-bold text-gray-700">{name}</h3>
      </div>
      <div className="my-8">
            <p className="break-all">{}</p>
      </div>
    </div>
  );
}
