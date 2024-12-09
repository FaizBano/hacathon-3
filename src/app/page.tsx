
import Catagories from "./components/Catagories";
import CompanyLogo from "./components/companyLogo";

import Hero from "./components/Hero";
import OurProducts from "./components/ourProducts";
import HotProduct from "./components/hotProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <Catagories />
      <HotProduct />
      <OurProducts />
    </>
  );
}