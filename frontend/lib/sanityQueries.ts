import {client} from "@/lib/sanity"
export async function getNavbar() {
  try {
    const query = `*[_type == "navbar"][0]{
        menuItems
    }`;
    return await client.fetch(query);

  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}

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

export async function getBlogDetails(slug: string) {
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      "author": {
        "name": author->name, 
        "image": author->image.asset->url
      },
      "blogImage": blogImage.asset->url,
      "categories": categories[]-> { _id, title },
      publishedAt,
      metadesc,
      content
    }`;
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return null;
  }
}