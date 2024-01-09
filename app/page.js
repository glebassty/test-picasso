import PostsList from "@/components/PostsList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="p-4 text-2xl font-semibold text-gray-800 mb-2">
        Имеющиеся посты
      </h1>
      <PostsList />
    </div>
  );
}
