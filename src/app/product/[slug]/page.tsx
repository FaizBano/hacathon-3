"use client"

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Products } from "../../../../types/product";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: { slug: string };
}

// Function to fetch product from Sanity based on slug
async function getProduct(slug: string): Promise<Products | null> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == ${slug}][0]{
      _id,
      title,
      image,
      price,
      description,
    }`,
    { slug }
  );
}

// Dynamic Product Page Component
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  // Handle case where product is not found
  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4"> 
      <h1>our dynamic products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              height={500}
              width={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans font-bold">${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
