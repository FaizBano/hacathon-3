import React from "react";

import AboutSection from "../../components/aboutSections";
import AboutPopularProduct from "../../components/aboutPopularProducts";
import AboutusComforty from "@/components/Aboutus-conforty";

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      {/* About Us Section */}
      <section className="py-8">
        <AboutusComforty />
      </section>

      {/* About Section */}
      <section className="py-8">
        <AboutSection />
      </section>

      {/* Popular Products Section */}
      <section className="py-8">
        <AboutPopularProduct />
      </section>
    </div>
  );
};

export default Page;
