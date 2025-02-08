
"use client";

import Hero from "@/app/hero/page";

import Chair from "@/app/chair/page";
import Cart from "@/components/cart"



export default function Home() {
  return (
    <div className=" justify-center place-items-center ">
          <div className="container mx-auto p-4 sm:p-6 lg:p-8">
    
      

      {/* Main Content */}
      <div className=" gap-8 md:gap-20  sm:gap-10 lg:gap-12">
        {/* Hero Section */}
        <section className="w-full">
          <Hero />
          <Chair />
          
          <Cart />
          
        </section>

        
        
        
        
        

      </div>
      
    </div>
    </div>

  );
}
