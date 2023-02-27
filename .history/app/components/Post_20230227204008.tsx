"use client"

import Image from "next/image";
import Link from "next/link";

export default function Post()
{
    return (
      <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex items-center gap-2">
          <Image className="rounded-full" width={32} height={32} src={avatar} alt="avatar" />
          <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">

        </div>
      </div>
    );
}