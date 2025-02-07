import Head from "next/head";
import { PostCard } from "@/components/PostCard";
import { BlogPost } from "@/types";
import { getBlogs } from "@/lib/sanityQueries";


export default async function PostPage() {
    const posts: BlogPost[] = await getBlogs();
  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>
      <main className="max-w-5xl mx-auto p-6 flex-1 mt-5">
        <h2 className="text-3xl font-bold mb-4 text-[#003C43]">Latest Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-9">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="text-center text-gray-500 mt-20 text-lg font-medium">
              No blog posts available.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
