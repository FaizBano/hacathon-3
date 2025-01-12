"use client";
import Hero from "@/app/hero/page";
import Product from "@/app/product/page";
import Contacts from "@/app/contacts/page";
import Cart from "@/app/cart/page";
import AboutusComforty from "@/app/about/page";
import SingleProduct from "./singleProduct/page";
import Faq from "@/app/faq/page";

export default function Home() {
  return (
    <div className=" justify-center place-items-center ">
          <div className="container mx-auto p-4 sm:p-6 lg:p-8">
    
      

      {/* Main Content */}
      <div className=" gap-8 md:gap-20  sm:gap-10 lg:gap-12">
        {/* Hero Section */}
        <section className="w-full">
          <Hero />
        </section>

        {/* Product Section */}
        <section className="w-full">
          <Product />
        </section>

        {/* Single Product Section */}
        <section className="w-full">
          <SingleProduct />
        </section>

        {/* Cart Section */}
        <section className="w-full">
          <Cart />
        </section>

        {/* FAQ Section */}
        <section className="w-full">
          <Faq />
        </section>

        {/* Contacts Section */}
        <section className="w-full">
          <Contacts />
        </section>

        {/* About Us Section */}
        <section className="w-full">
          <AboutusComforty />
        </section>
      </div>
    </div>
    </div>

  );
}
