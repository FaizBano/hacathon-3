import React from 'react'

import AboutSection from '../../components/aboutSections';
import AboutPopularProduct from '../../components/aboutPopularProducts';
import AboutusComforty from '@/components/Aboutus-conforty';



const page = () => {
    return (
      <div>
      
        <AboutusComforty />
            <AboutSection />
            <AboutPopularProduct />
           
            
            
            
      </div>
    );
}

export default page