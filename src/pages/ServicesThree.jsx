import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import ServicesThreeSection from '../elements/services/ServicesThree';
import FooterOne from '../elements/footer/FooterOne';
import BackToTop from '../components/back-to-top/BackToTop';
import TestimonialThree from '../elements/testimonial/TestimonialThree';
import { data_2 } from '../data/testimonial/testimonial-three';
import PricingThree from '../elements/pricing/PricingThree';
import ClientThree from '../elements/client/ClientThree';



function ServicesThree() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - Service 03`

    // aos activation
    AOS.init();

  }, [])


  // preloader handle 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
    setLoading(false);
    };

    if (document.readyState === 'complete') {
    setLoading(false);
    } else {
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
      <>
      {loading && <Preloader />}
      {!loading &&
        <div>
            <HeaderFive />
            <BreadCrumb title="Services 03" />
            <TestimonialThree data={data_2} />
            <PricingThree />
            <ClientThree />
            <ServicesThreeSection />
            <FooterOne />
            <BackToTop />
        </div>
        }
    </>
  )
}

export default ServicesThree