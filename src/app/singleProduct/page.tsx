"use client";

import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

export default function SingleProduct (){
    return(
    
      
      
    <div className="relative bg-white w-full max-w-screen-mx-auto text-gray-800 mt-16" >
          {/* Product Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-8">
        {/* Image Placeholder */}
        <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
         <Image src="/image1.png"
         width={675}
         height={607}
         alt="picture"
         />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-4 text-gray-800">
          Library Stool <br/> Chair
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>

          <div className="flex items-center mb-4">
            <span className="text-3xl font-semibold text-green-600 mr-4">
              $20.00 USD
            </span>
             </div>

          <button className="w-full md:w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          
          <h1 className=" inline-flex justify-center items-center gap-3" ><IoCartOutline />Add to Cart</h1>
          
          </button>
          
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <h3 className="text-2xl font-bold  text-gray-800">Featured Products</h3>
        
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 px-4 md:px-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Image Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-32 bg-gray-200 block items-center justify-center">
              <div>        
            <Image src="/pp.png"
            width={270}
            height={263}
            alt="image1" />
            </div>
            <div className="flex gap-16">
            <div className="text-[#272434]"> Library Stool Chair</div>
            <div className="font-bold">$99</div>
            </div>
               </div>
               <div className="h-32 bg-gray-200 block items-center justify-center">
                <div>
          <Image src="/p3.png"
            width={263}
            height={263}
            alt="image1" />
          </div>
          <div className="flex gap-16">
            <div className="text-[#272434]"> Library Stool Chair</div>
            <div className="font-bold">$99</div>
            </div>
               </div>

               <div className="h-32 bg-gray-200 block items-center justify-center">
                <div>
          <Image src="/image.png"
            width={263}
            height={270}
            alt="image1" />
          </div>
          <div className="flex gap-16">
            <div className="text-[#272434]"> Library Stool Chair</div>
            <div className="font-bold">$99</div>
            </div>
               </div>

          
          <div className="h-32 bg-gray-200 block items-center justify-center">
            <div>
          <Image src="/image2.png"
            width={263}
            height={263}
            alt="image1" />
          </div>
          <div className="flex gap-16">
            <div className="text-[#272434]"> Library Stool Chair</div>
            <div className="font-bold">$99</div>
            </div>
               </div>

        </div>
      </section>

    </div>
  );
};
