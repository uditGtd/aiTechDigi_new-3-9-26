import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import TeamSliderOne from '../elements/team-slider/TeamSliderOne'
import ClientOne from '../elements/client/ClientOne'
import bgImage from '../assets/img/bg/body-bg-1.png'
import FooterOne from '../elements/footer/FooterOne'
import BackToTop from '../components/back-to-top/BackToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import TeamOneSection from "../elements/team/TeamOne";



function TeamOne() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - Team 01`

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
          <BreadCrumb title="Our Team" />
          <div className="body-bg-1 bg-default pt-50" style={{backgroundImage:`url(${bgImage})`}}>
            <TeamOneSection />
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

export default TeamOne