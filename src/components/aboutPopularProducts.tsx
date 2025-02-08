import Image from "next/image";
import React from "react";

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "86wy6siq", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2025-01-27", // Use the correct API version
  useCdn: true,
});
async function fetchaboutPopularPruducts() {
  const query = `*[_type == "products" && "featured" && "AllProducts" && "aboutPopularPruducts" in tags]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category->{
      name
    },
    description,
    inventory,
    tags
  }`;

  const popularProducts = await client.fetch(query);
  return popularProducts;
}

fetchaboutPopularPruducts()
  .then((products) => console.log("Popular Products:", products))
  .catch((error) => console.error("Error fetching featured products:", error));

const AboutPopularProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src="/pop3.png"
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/pop1.png"
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/pop.png"
            alt="3"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
      </div>
  
    </div>
  );
};

export default AboutPopularProduct;