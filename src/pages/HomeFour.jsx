import React, { useEffect, useState } from 'react'
import HeaderFour from '../elements/headers/HeaderFour'
import HeroFour from '../elements/hero/HeroFour'
import ClientFour from '../elements/client/ClientFour'
import AboutFour from '../elements/about/AboutFour'
import ServicesFive from '../elements/services/ServicesFive'
import TeamFour from '../elements/team/TeamFour'
import ProjectFour from '../elements/project/ProjectFour'
import SolutionFour from '../elements/solution/SolutionFour'
import MarqueeFour from '../elements/marquee/MarqueeFour'
import ProjectFive from '../elements/project/ProjectFive'
import MarqueeFive from '../elements/marquee/MarqueeFive'
import TestimonialFive from '../elements/testimonial/TestimonialFive'
import BlogFour from '../elements/blog/BlogFour'
import MarqueeSix from '../elements/marquee/MarqueeSix'
import CtaFive from '../elements/cta/CtaFive'
import FooterFour from '../elements/footer/FooterFour'
import BackToTop from '../components/back-to-top/BackToTop'
import Preloader from '../components/preloader/Preloader'
import { data_1 } from '../data/team/team-four'
import AOS from "aos";
import "aos/dist/aos.css";

function HomeFour() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - Home 04`

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
      {!loading && <>
        <HeaderFour />
        <HeroFour/>
        <ClientFour/>
        <AboutFour />
        <ServicesFive/>
        <TeamFour data={data_1} />
        <ProjectFour/>
        <SolutionFour/>
        <MarqueeFour/>
        <ProjectFive/>
        <MarqueeFive/>
        <TestimonialFive/>
        <BlogFour/>
        <MarqueeSix/>
        <CtaFive/>
        <FooterFour />
        <BackToTop />
      </>}
      </>
  )
}

export default HomeFour