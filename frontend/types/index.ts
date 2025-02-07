export interface MenuItems{
  title: string,
  link: string
}

export interface NavbarType{
  menuItems: MenuItems[];
}

export interface Author{
  name: string;
  image?: string; 
}

export interface Category{
  _id: string; title: string
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {current: string};
  author: Author
  blogImage?: string;
  categories?: Category[]; 
  metadesc?: string;
  publishedAt?: string;
  content?: Array<
    | {
        _type: "block";
        children: { text: string }[];
      }
    | {
        _type: "image";
        asset: { _ref: string };
        alt?: string;
      }
  >;
}
