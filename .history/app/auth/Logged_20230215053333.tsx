"use client"

import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Logged(){
    return (
        <li className="flex gap-8 items-center">
            <button className="bg-gray-700 " onClick={() => signOut()}>

            </button>
        </li>
    )
}