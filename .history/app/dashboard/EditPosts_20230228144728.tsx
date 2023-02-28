"use client"

import Image from "next/image";
import { useState } from "react";

type EditProps = {
    id: string,
    avatar: string,
    name: string,
    title: string,
    comments?: {
        id: string,
        postId: string,
        userId: string
    }[]
}

export default function EditPosts({ avatar, name, title, comments, id} : EditProps) {
    return (
        <div className="bg-white my-  ">
            <div>
                <Image />
                <h3></h3>
            </div>
        </div>
    )
}