import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import TrustedTwo from '../elements/trusted/TrustedTwo';
import ServicesTwoSection from "../elements/services/ServicesTwo";
import TestimonialTwo from '../elements/testimonial/TestimonialTwo';
import PricingTwo from '../elements/pricing/PricingTwo';
import FooterOne from '../elements/footer/FooterOne';
import BackToTop from '../components/back-to-top/BackToTop';
import FooterTwo from '../elements/footer/FooterTwo';



function ServicesTwo() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Ai Tech Digi - Services`

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
            <BreadCrumb title="Services" /> 
            <div className='h2-body-bg'>       
                <TrustedTwo />
                <ServicesTwoSection />
            </div>
            {/* <TestimonialTwo/> */}
            {/* <br /><br /><br /> */}
            {/* <PricingTwo /> */}
            <FooterTwo />
            <BackToTop />
        </div>
        }
    </>
  )
}

export default ServicesTwo