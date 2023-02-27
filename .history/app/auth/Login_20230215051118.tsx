"use client"

import {signIn} from "next-auth/react"

export default function Login()
{
    return (
      <li className="list-none">
        <button className="text-sm" onClick={() => signIn()}>
          Sign in
        </button>
      </li>
    );
}