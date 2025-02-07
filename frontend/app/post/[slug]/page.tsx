import Image from "next/image";
import { getBlogDetails } from "@/lib/sanityQueries";
import {urlFor} from "@/lib/sanity"


export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogDetails(params.slug);

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  const renderContent = (block: any, index: number) => {
    if (block._type === "block") {
      if (block.style === "h2") {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {block.children.map((child: any, i: number) => (
              <span key={i}>{child.text}</span>
            ))}
          </h2>
        );
      }
      if (block.style === "h3") {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {block.children.map((child: any, i: number) => (
              <span key={i}>{child.text}</span>
            ))}
          </h3>
        );
      }
      if (block.listItem === "bullet") {
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-800">
              {block.children.map((child: any, i: number) => (
                <span key={i}>{child.text}</span>
              ))}
            </li>
          </ul>
        );
      }
      if (block.listItem === "number") {
        return (
          <ol key={index} className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-gray-800">
              {block.children.map((child: any, i: number) => (
                <span key={i}>{child.text}</span>
              ))}
            </li>
          </ol>
        );
      }

      return (
        <p key={index} className="mb-6 text-gray-800 leading-relaxed">
          {block.children.map((child: any, i: number) => {
            if (child.marks?.includes("strong")) return <strong key={i}>{child.text}</strong>;
            if (child.marks?.includes("em")) return <em key={i}>{child.text}</em>;
            if (child.marks?.includes("code")) {
              return (
                <code key={i} className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded">
                  {child.text}
                </code>
              );
            }
            return <span key={i}>{child.text}</span>;
          })}
        </p>
      );
    }

    if (block._type === "image") {
      return (
        <figure key={index} className="my-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
                src={urlFor(block.asset)}
              alt={block.alt || "Blog Image"}
              width={200}
              height={200}
              className="w-full h-56 object-cover"
              unoptimized 
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-gray-600 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    if (block._type === "code") {
      return (
        <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg my-6 overflow-x-auto">
          <code className="block">{block.code}</code>
        </pre>
      );
    }

    if (block._type === "blockquote") {
      return (
        <blockquote key={index} className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic">
          <p className="text-gray-700">{block.children[0].text}</p>
        </blockquote>
      );
    }

    return null;
  };

  return (
    <article className="max-w-2xl mx-auto px-4 py-8 md:py-10">
      <header className="mb-8">
        {blog.categories?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.categories.map((category: any, index: number) => (
              <span
                key={index}
                className="bg-blue-50 text-[#134B70] text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                {category.title}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-4xl font-bold text-[#16404D] leading-tight mb-6">
          {blog.title}
        </h1>

        {blog.author && (
          <div className="flex items-center space-x-4">
            <Image
              src={blog.author.image}
              alt={blog.author.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
            />
            <div>
              <span className="text-gray-900 font-semibold block text-lg">{blog.author.name}</span>
              {blog.publishedAt && (
                <time className="text-gray-500">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              )}
            </div>
          </div>
        )}
      </header>

      <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-6">
        {blog.blogImage && (
          <div className="rounded-lg overflow-hidden shadow-md w-48 h-48 md:w-60 md:h-44 flex-shrink-0">
            <Image
              src={blog.blogImage}
              alt={blog.title}
              width={240}
              height={240}
              className="w-full h-44 object-cover"
              unoptimized 
            />
          </div>
        )}
        {blog.metadesc && (
          <div className="bg-gray-50 border-l-4 border-[#3E5879] pl-6 py-1 rounded-r-lg flex-1">
            <p className="text-gray-700 text-lg">{blog.metadesc}</p>
          </div>
        )}
      </div>

      <div className="prose prose-lg max-w-none">
        {blog.content?.map((block: any, index: number) => renderContent(block, index))}
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          {blog.tags?.map((tag: string, index: number) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}
