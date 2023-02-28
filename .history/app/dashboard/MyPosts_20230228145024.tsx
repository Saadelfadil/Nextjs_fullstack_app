"use client"

import {useQuery} from "react-query"
import axios from "axios";
import { authPosts } from "../types/Auth";
import EditPosts from "./EditPosts";

const fetchData = async () => {
    const response = await axios.get("/api/posts/authPost");
    return response.data
};

const MyPosts = () => {
    const {data, isLoading} = useQuery<authPosts>({queryFn: fetchData, queryKey: "auth-posts"});
    if (isLoading) return <h1>Posts are Loading....</h1>
    console.log(data);
  return (
    <div>
        {data?.posts.map((post) => (
            <EditPosts post. />
        ))}
    </div>
  )
};

export default MyPosts;
