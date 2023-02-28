"use client"

import {useQuery} from "react-query"
import axios from "axios";
import { authPosts } from "../types/Auth";

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
        <h1>data</h1>
    </div>
  )
};

export default MyPosts;
