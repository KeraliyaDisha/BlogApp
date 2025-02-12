import { PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export const portableTextComponents: PortableTextReactComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset ? urlFor(value.asset).toString() : null;
      if (!imageUrl) return null;
      return (
        <div className="flex justify-center my-6">
          <Image
            src={imageUrl}
            alt={value.alt || "Content Image"}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="text-gray-800 leading-relaxed mb-4">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href: string } }) => {
      const target = value?.href?.startsWith("http") ? "_blank" : "_self";
      return (
        <a
          href={value?.href || "#"}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside text-gray-800 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside text-gray-800 my-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  hardBreak: () => <br />,

  unknownMark: ({ children, markKey }) => <span className="text-red-500">[Unknown mark: {markKey}] {children}</span>,
  unknownType: ({ value }) => <p className="text-red-500">[Unknown type: {JSON.stringify(value)}]</p>,
  unknownBlockStyle: ({ children, value }) => <p className="text-red-500">[Unknown block style: {value.style}] {children}</p>,
  unknownList: ({ children }) => <ul className="text-red-500">[Unknown List] {children}</ul>,
  unknownListItem: ({ children }) => <li className="text-red-500">[Unknown List Item] {children}</li>,
};
