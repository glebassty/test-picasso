"use client";

import { useGetPostsQuery } from "../../../services/posts";
import { useRouter } from "next/navigation";

const Post = ({ params }) => {
  const { data: posts } = useGetPostsQuery();
  const post = posts?.find((p) => p.id.toString() === params.postId);

  const router = useRouter();

  if (!post)
    return <p className="text-center text-lg text-gray-600">Пост не найден!</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        {post.title}
      </h1>
      <p className="text-gray-600 text-base">{post.body}</p>
      <div className="flex justify-end w-full">
        <button
          onClick={() => router.back()}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default Post;
