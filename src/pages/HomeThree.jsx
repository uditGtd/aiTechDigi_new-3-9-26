import React, { useEffect, useState } from 'react'
import HeaderThree from '../elements/headers/HeaderThree';
import HeroThree from '../elements/hero/HeroThree';
import ClientThree from '../elements/client/ClientThree';
import ServicesThree from '../elements/services/ServicesThree';
import ResearchThree from '../elements/research/ResearchThree';
import TestimonialThree from '../elements/testimonial/TestimonialThree';
import ProjectThree from '../elements/project/ProjectThree';
import TrustedThree from '../elements/trusted/TrustedThree';
import SolutionThree from '../elements/solution/SolutionThree';
import PricingThree from '../elements/pricing/PricingThree';
import ServicesFour from '../elements/services/ServicesFour';
import TestimonialFour from '../elements/testimonial/TestimonialFour';
import BlogThree from '../elements/blog/BlogThree';
import FooterThree from '../elements/footer/FooterThree';
import BackToTop from '../components/back-to-top/BackToTop';
import Preloader from '../components/preloader/Preloader';
import { data_1 } from '../data/testimonial/testimonial-three';
import AOS from "aos";
import "aos/dist/aos.css";

function HomeThree() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - Home 03`

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
        <HeaderThree />
        <HeroThree />
        <ClientThree />
        <ServicesThree />
        <ResearchThree />
        <TestimonialThree data={data_1} />
        <ProjectThree />
        <TrustedThree />
        <SolutionThree />
        <PricingThree />
        <ServicesFour />
        <TestimonialFour />
        <BlogThree />
        <FooterThree />
        <BackToTop />
      </>}
    </>
  );
}

export default HomeThree