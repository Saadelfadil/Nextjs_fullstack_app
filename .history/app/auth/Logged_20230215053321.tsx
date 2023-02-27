"use client"

import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Logged(){
    return (
        <li className="flex gap-8 items-center">
            <button className="" onClick={() => signOut()}>

            </button>
        </li>
    )
}