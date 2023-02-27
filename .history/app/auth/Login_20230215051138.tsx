"use client"

import {signIn} from "next-auth/react"

export default function Login()
{
    return (
      <li className="list-none">
        <button className="text-sm bg-gray-700 text-white p" onClick={() => signIn()}>
          Sign in
        </button>
      </li>
    );
}