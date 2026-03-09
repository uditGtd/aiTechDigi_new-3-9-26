import React from 'react'
import image from "../../assets/img/solutions/s4-img-1.jpg";
import imageIl from "../../assets/img/solutions/s4-il-img-1.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from '../../components/title-animation/SplitTextAnimation';

function SolutionFour() {

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray(".chy-solution-4-img .bg-color").forEach((el, index) => {
      let chyScl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 95%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      chyScl.set(el, { transformOrigin: "center center" }).fromTo(
        el,
        { scale: 1.3, backgroundColor: "#fba000" },
        {
          backgroundColor: "#e3b15bff",
          scale: 1,
          duration: 0.5,
          immediateRender: false,
        }
      );
    });
  });

  return (
    <div className="chy-solution-4-area pt-80 pb-140">
      <div className="container chy-contaienr-2">
        <div className="row">

          {/* left-content */}
          <div className="col-lg-6">
            <div className="chy-solution-4-content">
              {/* section-title */}
              <div className="section-title-wrap mb-25">
                <h5 className="chy-subtitle-4 chy-class-add">WHY CHOOSE US</h5>
                <h2 className="chy-title-4 chy-split-in-right chy-split-text">
                  <SplitText text="Leading the Way in Digital Innovation" />
                </h2>
                <p className="chy-para-4">
                 At GotechDigi, we aim to revolutionize your digital presence with creative solutions tailored to your business needs. With expertise in web design, digital marketing and brand strategy we are committed to delivering exceptional results. Our team is dedicated to maximizing your return on investment while providing innovative, client-focused strategies.
                </p>
              </div>

              <ul className="chy-solution-4-feature mb-30">
                <li>
                  <i className="fi fi-br-checkbox"></i>
                Expert Team
                </li>
                <li>
                  <i className="fi fi-br-checkbox"></i>
                  High-ROI Focus
                </li>
                <li>
                  <i className="fi fi-br-checkbox"></i>
                  Proven Results
                </li>
                <li>
                  <i className="fi fi-br-checkbox"></i>
                  Transparent Communication
                </li>
              </ul>

              <Link to="/service-details" className="chy-pr-btn-5">
                <span className="text">learn more</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faRightLong} />
                </span>
              </Link>
            </div>
          </div>

          {/* right-content */}
          <div className="col-lg-6">
            <div className="chy-solution-4-img"
            style={{
  background: "linear-gradient(90deg, #FFF9F0 0%, #FFF7EB 25%, #FFF5E6 50%, #FFF3E1 75%, #FFF1DC 100%)",
  backgroundRepeat: "no-repeat"
}}>
              <span className="bg-color"></span>
              <div className="main-img img-cover">
                <img src={image} alt="" />
              </div>
              <img src={imageIl} alt="" className="il-img" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SolutionFour