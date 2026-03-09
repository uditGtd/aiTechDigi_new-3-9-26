// import React, { useEffect, useState } from "react";
import React, { useEffect,useState, useRef } from 'react'
// import arrowIcon from "../../assets/img/services/s2-img-arrow.png";
import arrowIcon from "../assets/img/services/s2-img-arrow.png";
import starIcon from "../assets/img/services/s2-star-icon.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import Tilt from "react-parallax-tilt";
import SplitText2 from '../components/title-animation/SplitTextAnimation2';
import HeaderTwo from "../elements/headers/HeaderTwo";
import HeroTwo from "../elements/hero/HeroTwo";
import TrustedTwo from "../elements/trusted/TrustedTwo";
import AboutTwo from "../elements/about/AboutTwo";
import PortfolioTwo from "../elements/portfolio/PortfolioTwo";
import ServicesTwo from "../elements/services/ServicesTwo";
import SolutionTwo from "../elements/solution/SolutionTwo";
import PricingTwo from "../elements/pricing/PricingTwo";
import TestimonialTwo from "../elements/testimonial/TestimonialTwo";
import ResearchTwo from "../elements/research/ResearchTwo";
import MarqueeTwo from "../elements/marquee/MarqueeTwo";
import BlogTwo from "../elements/blog/BlogTwo";
import FooterTwo from "../elements/footer/FooterTwo";
import SearchPopup from "../components/search-popup/SearchPopup";
import BackToTop from "../components/back-to-top/BackToTop";
import Preloader from "../components/preloader/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HomeTwo() {

  useEffect(()=> {

    // title setup 
    document.title = `Ai Tech Digi - Home`

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
      {!loading && <div className="h2-body-bg fix">
      <HeaderTwo />
      <HeroTwo />
      <TrustedTwo />
      <AboutTwo />
      <PortfolioTwo />
      {/* <ServicesTwo /> */}
          <div className="chy-services-2-area pt-105 pb-180 fix">
      <div className="container chy-container-1">
        <div className="row g-0">
          <div className="col-xl-6">
            <div className="chy-services-2-item-wrap chy-class-add">
              <img src={starIcon} className="icon chyroted" alt="" />

              {/* single-item  */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon">
                    <i className="fi fi-rs-challenge-alt"></i>
                  </div>
                  <h5 className="chy-heading-1 title">
                    <Link to="/services-01">SEO</Link>
                  </h5>
                  <p className="chy-para-2 disc">
                    We help businesses rank higher and drive organic traffic.
                  </p>
                </Tilt>
              </div>

              {/* single-item */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon">
                    <i className="fi fi-bs-at"></i>
                  </div>
                  <h5 className="chy-heading-1 title">
                    <Link to="/services-01">email marketing</Link>
                  </h5>
                  <p className="chy-para-2 disc">
                  Email campaigns for engagement and conversions.
                  </p>
                </Tilt>
              </div>

              {/* single-item */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon ">
                    {/* Fixed: Changed 'fi-ts-paint-brush' to 'fi-rs-paint-brush' */}
                    <i className="fi fi-rs-paint-brush"></i>
                  </div>
                  <h5 className="chy-heading-1 title">
                    <Link to="/services-01">UI/UX Design</Link>
                  </h5>
                  <p className="chy-para-2 disc">
                    Intuitive interfaces backed by user research and prototyping.
                  </p>
                </Tilt>
              </div>

              {/* single-item */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon">
                    <i className="fi fi-rs-it"></i>
                  </div>
                  <h5 className="chy-heading-1 title ">
                    <Link to="/services-01">development</Link>
                  </h5>
                  <p className="chy-para-2 disc text-sm">
                  Custom web and mobile apps built for speed and scalability                  </p>
                </Tilt>
              </div>
            </div>
          </div>

          {/* right-content  */}
          <div className="col-xl-6">
            <div className="chy-services-2-content">
              {/* section-title */}
              <div className="section-title-wrap mb-35">
                <h3
                  className="chy-subtitle-2"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  top services
                </h3>
                <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
                  <SplitText2 text="grow and prosper with our experts"  />
                </h2>
                <p
                  className="chy-para-2"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  Here’s why GotechDigi stands out: Leading the Way in Digital Innovation
                </p>
              </div>

              <div className="chy-services-2-work mb-55">
                <img src={arrowIcon} alt="" />
                <div className="right">
                  <h4 className="chy-heading-1 title">work completed</h4>
                  <h3 className="chy-heading-1 number">
                    <CountUp
                      delay={1}
                      duration={3}
                      start={1}
                      end={4500}
                      enableScrollSpy
                      scrollSpyOnce
                      suffix={"+"}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </h3>
                </div>
              </div>
              <Link
                to="/services"
                className="chy-pr-btn-3"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <span className="text">explore more</span>
                <FontAwesomeIcon icon={faLongArrowRight} />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
      {/* <SolutionTwo /> */}
      <PricingTwo />
      <TestimonialTwo />
      <ResearchTwo />
      <MarqueeTwo />
      {/* <BlogTwo /> */}
      <FooterTwo />
      <SearchPopup />
      <BackToTop />
    </div>}
    </>
  );
}

export default HomeTwo;
