import AboutHero from "@/components/aboutHero"
import CompanyLogo from "@/components/companyLogo"
import FeaturedProduct from "@/components/featuredProduct"
import Hero1 from "@/components/Hero"
import Categories from "@/components/Categories"
import HotProduct from "@/components/HotProducts"
import OurProduct from "@/components/ourProducts"
export default function Hero (){
    return(
        <div>
            <Hero1 />
            <AboutHero />
            <FeaturedProduct />
           <CompanyLogo />
           <Categories />
           <HotProduct />
           <OurProduct />
           
           
        </div>
    )
}