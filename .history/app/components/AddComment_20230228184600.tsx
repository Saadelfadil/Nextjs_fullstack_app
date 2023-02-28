"use client"

import { useState } from "react"
import { useMutation, useQueryClient} from "react-query"
import axios from "axios"
import toast from "react-hot-toast"

export default function AddComment({ id }) {
    const [title, setTitle] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);

    return (
      <form action="">
        <h3>Add a comment</h3>
        <div className="flex flex-col my-2">
          <input
            onChange={(e) => setTitle((pre) => (pre = e.target.value))}
            type="text"
            name="title"
            className="p-4 text-lg rounded-md my-2"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            disabled={isDisabled}
            className="text-sm bg-teal-600 text-white rounded-xl py-2 px-6 disabled:opacity-25"
            type="submit"
          >
            Create a comment
          </button>
          <p
            className={`font-bold text-sm ${
              title.length > 300 ? "text-red-700" : "text-gray-700"
            }`}
          >
            {title.length}/300
          </p>
        </div>
      </form>
    );
}