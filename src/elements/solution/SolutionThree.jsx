import React, { useEffect } from 'react'
import image1 from "../../assets/img/solutions/s3-img-1.png";
import image2 from "../../assets/img/solutions/s3-img-2.png";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText3 from '../../components/title-animation/SplitTextAnimation3';

function SolutionThree() {

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray(".rotatedscal").forEach((el, index) => {
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 90%",
          end: "buttom 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl3.set(el, { transformOrigin: "center center" }).from(
        el,
        { opacity: 1, rotateZ: 45, scale: 0.5, y: "+=100" },
        {
          opacity: 1,
          rotateZ: 0,
          scale: 1,
          y: 0,
          duration: 1,
          immediateRender: false,
        }
      );
    });
  });
    
  return (
    <div className="chy-solutions-3-area pt-100 pb-180 fix">
      <div className="container chy-container-1">
        <div className="chy-solutions-3-wrap">
          <div className="main-img rotatedscal">
            <img src={image1} alt="" />
          </div>

          <div className="chy-solutions-3-content">
            <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
              <SplitText3 text="Driven by Quality & Dedicated" />
            </h2>
            <p
              className="chy-para-3 disc"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="50"
            >
              We believe that great design should not be out of reach, so our
              services are less than half the price of a full-time designer. n
              should not be out of reach, so our services are less than half the
            </p>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="80"
            >
              <Link to="/about-02" className="chy-pr-btn-4">get started</Link>
            </div>
          </div>
          <span className="line "></span>
          <div className="chy-solutions-3-content">
            <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
              <SplitText3 text="Make your Business Visible Online" />
            </h2>
            <p
              className="chy-para-3 disc"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="50"
            >
              We believe that great design should not be out of reach, so our
              services are less than half the price of a full-time designer. n
              should not be out of reach, so our services are less than half the
            </p>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="80"
            >
              <Link to="/about-03" className="chy-pr-btn-4">get started</Link>
            </div>
          </div>
          <div className="main-img rotatedscal">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionThree