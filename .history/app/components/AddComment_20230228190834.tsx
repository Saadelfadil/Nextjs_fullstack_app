"use client"

import { useState } from "react"
import { useMutation, useQueryClient} from "react-query"
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"

export default function AddComment({ id } : string) {
    const [title, setTitle] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);
    const queryClient = useQueryClient();
    let commentToastId : string;

    const { mutate } = useMutation(

        async (data) => axios.post("/api/posts/addComment", { data}),
        {
            onError: (error) => {
                setIsDisabled((pre) => pre = false);
                error instanceof AxiosError &&
                  toast.error(error?.response?.data.message, {
                    id: commentToastId,
                  });
            },
            onSuccess: (data) => {
                setTitle((pre) => (pre = ""));
                setIsDisabled((pre) => (pre = false));
                toast.success("Added your comment", {id: commentToastId});
            }
        }
    )

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        setIsDisabled((pre) => pre = true);
        commentToastId = toast.loading("Adding your comment", {
          id: commentToastId,
        });
        mutate({title, postId: id})
    }

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
        <div className="flex items-center gap-2">
          <button
            onClick={handleSubmit}
            disabled={isDisabled}
            className="text-sm bg-teal-600 text-white rounded-xl py-2 px-6 disabled:opacity-25"
            type="submit"
          >
            Add a comment
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