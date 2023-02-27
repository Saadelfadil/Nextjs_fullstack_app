"use client"

import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Logged(){
    return (
        <li className="flex gap-8 items-center">
            <button className="bg-gray-700 text-white text-sm px-6 py-2 rounded-md" onClick={() => signOut()}>
                Sign out
            </button>
            <Link>
            </Link>
        </li>
    )
}