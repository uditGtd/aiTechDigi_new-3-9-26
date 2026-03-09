import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import ServicesInnerOne from '../inner-elements/services/ServicesInnerOne'
import VideoPopupOne from '../elements/video-popup/VideoPopupOne'
import CtaOne from '../elements/cta/CtaOne'
import TeamSliderOne from '../elements/team-slider/TeamSliderOne'
import ClientOne from '../elements/client/ClientOne'
import bgImage from '../assets/img/bg/body-bg-1.png'
import FooterOne from '../elements/footer/FooterOne'
import BackToTop from '../components/back-to-top/BackToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'



function ServicesOne() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - Service 01`

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
          <ServicesInnerOne />
          <VideoPopupOne />
          <div className="body-bg-1 bg-default" style={{backgroundImage:`url(${bgImage})`}}>
            <CtaOne />
            <TeamSliderOne />
            <ClientOne />
            <FooterOne />
            <BackToTop />
          </div>
        </div>
        }
    </>
  )
}

export default ServicesOne