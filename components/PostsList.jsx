"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGetPostsQuery } from "../services/posts";

const PostsList = () => {
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading, isFetching } = useGetPostsQuery(page);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) return <p className="text-center">Загрузка...</p>;
  if (error)
    return <p className="text-center text-red-600">Ошибка: {error.message}</p>;

  return (
    <div>
      <ul className="w-full max-w-md">
        {posts &&
          posts.map((post) => (
            <li
              key={post.id}
              className="border border-gray-300 p-4 rounded-lg mb-4"
            >
              <h1 className="text-lg font-bold mb-2">{post.title}</h1>
              <p>{post.body}</p>
              <Link href={`/${post.id}`}>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Просмотр
                </button>
              </Link>
            </li>
          ))}
      </ul>
      {isFetching && <p className="text-center">Загружаются еще посты...</p>}
    </div>
  );
};

export default PostsList;
