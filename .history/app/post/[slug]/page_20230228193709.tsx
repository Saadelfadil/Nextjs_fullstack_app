"use client";

import Post from "@/app/components/Post";
import { useQuery } from "react-query";
import axios from "axios";
import { PostTy } from "../../types/Post";
import AddComment from "../../components/AddComment";
import Image from "next/image";

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

type URL = {
  params: {
    slug: string;
  };
};
export default function PostDetails(url: URL) {
  const { data, isLoading } = useQuery<PostTy>({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  });

  if (isLoading) return "Loading....";
  console.log(data)
  return (
    <div>
      <Post
        id={data?.id}
        name={data?.user.name}
        avatar={data?.user.image}
        postTitle={data?.title}
        comments={data?.Comment}
      />
      <AddComment id={data?.id}/>
      {data?.Comment?.map((com) => {
        <div key={com.id} className="my-6 bg-white p-8 rounded-md">
          <div className="flex items-center gap-2">
            <Image width={24} height={24} src={com.user?.image} alt="avatar" />
            <h3 className="font-bold">{com?.user?.name}</h3>
            <h2 className="text-sm">{com?.}</h2>
          </div>
          <div></div>
        </div>
      })}
    </div>
  );
}
