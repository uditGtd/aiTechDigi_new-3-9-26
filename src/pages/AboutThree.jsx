import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import FooterOne from '../elements/footer/FooterOne'
import BackToTop from '../components/back-to-top/BackToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import ResearchThree from '../elements/research/ResearchThree'
import TestimonialThree from '../elements/testimonial/TestimonialThree'
import { data_1 } from '../data/testimonial/testimonial-three'
import PricingThree from '../elements/pricing/PricingThree'
import ServicesFour from '../elements/services/ServicesFour'
import TestimonialFour from '../elements/testimonial/TestimonialFour'




function AboutThree() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - About 03`

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
          <BreadCrumb title="About 03" />
          <ResearchThree />
          <TestimonialThree data={data_1} />
          <PricingThree />
          <ServicesFour />
          <div className='pb-60'>
            <TestimonialFour />
          </div>
          <FooterOne />
          <BackToTop />
        </div>
        }
    </>
  )
}

export default AboutThree