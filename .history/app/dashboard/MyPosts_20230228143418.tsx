"use client"

import {useQuery} from "react-query"
import axios from "axios";
import { authPosts } from "../types/Auth";

const fetchData = async () => {
    const response = await axios.get("/api/auth/auth")
};

const MyPosts = () => {
  return (

  )
};

export default MyPosts;
