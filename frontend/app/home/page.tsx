import React from "react";
import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getBlogs } from "@/lib/sanityQueries";
import { BlogPost } from "@/types";
import { ArrowRight } from "lucide-react";

const HomePage = async () => {
  const posts: BlogPost[] = await getBlogs();
  const featuredPosts = posts.slice(0, 3);

  const categories = [
    { name: "Technology", icon: "💻", count: 42 },
    { name: "Design", icon: "🎨", count: 38 },
    { name: "Development", icon: "⚡", count: 45 },
    { name: "AI", icon: "🤖", count: 27 },
    { name: "Web3", icon: "🌐", count: 31 },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-20 py-28 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-10 text-gray-700">
              Welcome to <span className="text-[#267e8b]">My Blog</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Explore insightful articles on{" "}
              <span className="text-[#267e8b]">technology</span>,{" "}
              <span className="text-[#267e8b]">design</span>, and{" "}
              <span className="text-[#267e8b]">development</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/post">
                <button className="px-8 py-4 bg-[#267e8b] text-white font-semibold rounded-lg  shadow-lg hover:bg-[#255b63] transition-all duration-300 flex items-center gap-2 group">
                  Start Reading
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-20 ">
        <div className="flex justify-between items-center mb-12">
          <Link href="/posts"></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/posts">
            <button className="px-6 py-3 bg-[#267e8b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#255b63] transition-all duration-300 flex items-center gap-2 group mt-6">
              See All Posts
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">
            Explore Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${category.name.toLowerCase()}`}
              >
                <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#255b63] transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {category.count} articles
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
