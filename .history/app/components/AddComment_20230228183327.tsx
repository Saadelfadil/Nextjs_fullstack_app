"use client"

import { useState } from "react"
import { useMutation, useQueryClient} from "react-query"
import axios from "axios"
import toast from "react-hot-toast"

export default function AddComment({ id }) {
    return (
        <form action="">
            <h3>Add a comment</h3>
            <div className="flex flex-col my-2">
                <input type="text" name="title" className=""/>
            </div>
        </form>
    )
}