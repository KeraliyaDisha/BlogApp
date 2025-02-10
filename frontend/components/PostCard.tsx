import Image from "next/image";
import { BlogPost } from "@/types";
import Link from "next/link";

export const PostCard = ({ post }: { post: BlogPost }) => (
  <article className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 max-w-[300px] flex flex-col h-full">
    <div className="relative overflow-hidden">
      {post.blogImage &&
      typeof post.blogImage === "string" &&
      post.blogImage.trim() !== "" ? (
        <Image
          src={post.blogImage}
          alt={post.title || "Blog Image"}
          width={150}
          height={100}
          className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
      ) : (
        <Image
          src="/Placeholder.svg"
          alt="Placeholder"
          width={150}
          height={100}
          className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
    </div>

    <div className="p-5 flex flex-col flex-1">
      <div className="flex justify-between items-center gap-2 mb-5">
        {post.publishedAt && (
          <time className="text-xs text-gray-500 font-medium">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        )}

        {post.categories && post.categories.length > 0 && (
          <span className="bg-blue-50 text-[#134B70] text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
            {post.categories.map((cat) => cat.title).join(", ")}
          </span>
        )}
      </div>

      <h3 className="text-sm font-bold text-[#10375C] mb-1 line-clamp-2 group-hover:text-[#201E43] transition-colors duration-200">
        {post.title}
      </h3>

      {post.metadesc && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.metadesc}
        </p>
      )}

      {post.author && post.author.image && (
        <div className="flex items-center mt-auto pt-4 border-t-2 border-gray-100">
          <div className="relative">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
              unoptimized
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/20"></div>
          </div>
          <div className="ml-2 flex flex-col">
            <span className="font-medium text-sm text-gray-900">
              {post.author.name}
            </span>
            <span className="text-xs text-gray-500">Author</span>
          </div>
          <Link
            href={`/post/${post.slug.current}`}
            className="ml-auto flex items-center text-blue-900 font-medium text-sm group-hover:text-blue-800 transition-colors duration-200"
          >
            Read More
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  </article>
);
