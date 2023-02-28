"use client"

import {useQuery} from "react-query"
import axios from "axios";
import { authPosts } from "../types/Auth";

const fetchData = async () => {
    const response = await axios.get("/api/auth/authPost");
    return response.data
};

const MyPosts = () => {
    const {data, isLoading} = useQuery<authPosts[]>(req, res, fetchData)
  return (

  )
};

export default MyPosts;
