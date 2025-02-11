import {client} from "@/lib/sanity"

export async function getBlogs() {
  try {
    const query = `*[_type == "blog"]{
        _id,
        title,
        slug,
        "author": {
            "name": author->name, 
            "image": author->image.asset->url
        },
        "blogImage": blogImage.asset->url,
        "categories": categories[]-> { _id, title },
        publishedAt,
        metadesc
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}