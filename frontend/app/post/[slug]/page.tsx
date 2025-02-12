import { getBlogDetails } from "@/lib/sanity/queries/blogDetails";
import { portableTextComponents } from "@/components/portableText";
import { PortableText } from "next-sanity";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogDetails(params.slug);

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white p-8">
          <h1 className="text-4xl font-bold text-center mb-4">{blog.title}</h1>
          <p className="text-gray-600 text-sm text-center">
            {blog.author?.name ? `By ${blog.author.name}` : "Unknown Author"} |{" "}
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="bg-gray-50 p-8 mt-8">
          <PortableText value={blog.content} components={portableTextComponents} />
        </div>
      </div>
    </>
  );
}


