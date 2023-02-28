"use client"

import { useState } from "react"
import { useMutation, useQueryClient} from "react-query"
import axios from "axios"
import toast from "react-hot-toast"

export default function AddComment({ id }) {
    const [title, setTitle] = useState("")
    return (
      <form action="">
        <h3>Add a comment</h3>
        <div onChange={(e) => setTitle((pre) => pre = e.target)} className="flex flex-col my-2">
          <input
            type="text"
            name="title"
            className="p-4 text-lg rounded-md my-2"
          />
        </div>
      </form>
    );
}