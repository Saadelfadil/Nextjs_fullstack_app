"use client"

import {useQuery} from "react-query"
import axios from "axios";
import { authPosts } from "../types/Auth";

const fetchData = async () => {
    const response = await axios.get("/api/auth/authPost");
    return response.data
};

const MyPosts = () => {
    const {data, isLoading} = useQuery<authPosts[]>({queryFn: fetchData, queryKey: "auth-posts"});
    if (isLoading) return <h1>Posts are Loading....</h1>
    if (data)
  return (

  )
};

export default MyPosts;
