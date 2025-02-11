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