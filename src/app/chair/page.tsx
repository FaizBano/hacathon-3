"use client";
import React, { useEffect, useState } from "react";
import { Products } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/quries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import addToCart from "../actions/action";
import Swal from "sweetalert2";

const Cart = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Products[] = await client.fetch(allproducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Products) => {
    e.preventDefault();

    Swal.fire({
      position: "top-right",
      icon: "success", // Fixed capitalization
      title: `${product.title} added to cart!`,
      showConfirmButton: false, // Fixed typo
      timer: 1000,
      toast: true,
    });

    addToCart(product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center underline text-gray-800 mb-6">
        Fetched All Products from Sanity
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={300}
                  height={600}
                  className="w-40 h-40 object-cover rounded-md"
                />
              )}
              <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
              <p className="text-gray-500 mt-2">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
            </Link>

            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out mt-3 w-full"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
