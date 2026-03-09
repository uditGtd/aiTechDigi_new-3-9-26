import React, { useEffect, useState } from "react";
import HeaderOne from "../elements/headers/HeaderOne";
import bg1 from "../assets/img/bg/body-bg-1.png";
import bg2 from "../assets/img/bg/body-bg-2.png";
import TrustedOne from "../elements/trusted/TrustedOne";
import HeroOne from "../elements/hero/HeroOne";
import AboutFour from '../elements/about/AboutFour'
import ServicesFive from '../elements/services/ServicesFive'
import { data_1 } from '../data/team/team-four'
import TeamFour from '../elements/team/TeamFour'
import ProjectFour from '../elements/project/ProjectFour'
import SolutionFour from '../elements/solution/SolutionFour'
import ProjectOne from "../elements/project/ProjectOne";
import PricingCardOne from "../components/pricing-card/PricingCardOne";
import TeamOne from "../elements/team/TeamOne";
import ClientOne from "../elements/client/ClientOne";
import VideoPopupOne from "../elements/video-popup/VideoPopupOne";
import CtaOne from "../elements/cta/CtaOne";
import BlogOne from "../elements/blog/BlogOne";
import FooterOne from "../elements/footer/FooterOne";
import TeamSliderOne from "../elements/team-slider/TeamSliderOne";
import TestimonialFive from '../elements/testimonial/TestimonialFive'
import BackToTop from "../components/back-to-top/BackToTop";
import Preloader from "../components/preloader/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HomeOne() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - Digital Marketing Agency React Template`

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
      {loading && <Preloader/>}
      {!loading && <>
        <HeaderOne />
        <HeroOne />
        <div
          className="body-bg-1 bg-default"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <TrustedOne />
           <AboutFour />
          <ServicesFive/>
          <TeamFour data={data_1} />
        {/* <ProjectFour/>
        <SolutionFour/> */}
        </div>
        <ProjectFour/>
        <SolutionFour/>
        <ProjectOne />
        <div
          className="body-bg-2 bg-default"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* <PricingCardOne /> */}
          {/* <TeamOne />
          <TeamSliderOne /> */}
          {/* <ClientOne /> */}
        </div>
        {/* <VideoPopupOne />
        <CtaOne />
        <BlogOne /> */}
         <TestimonialFive/>
        <FooterOne />
        <BackToTop />
      </>}
    </>
  );
}

export default HomeOne;
