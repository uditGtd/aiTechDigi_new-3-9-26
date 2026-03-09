import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import FooterOne from '../elements/footer/FooterOne'
import BackToTop from '../components/back-to-top/BackToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import OurClientSection from '../inner-elements/our-clients/OurClients'
import TestimonialTwo from '../elements/testimonial/TestimonialTwo'
import FooterTwo from '../elements/footer/FooterTwo'



function OurClients() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Ai Tech Digi - Our Client`

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
          <BreadCrumb title="Our Clients" />
          {/* <OurClientSection /> */}
          <TestimonialTwo />
          <FooterTwo />
          <BackToTop />
        </div>
        }
    </>
  )
}

export default OurClients