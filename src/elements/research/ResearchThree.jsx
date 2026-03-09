import React, { useEffect } from 'react'
import image1 from "../../assets/img/research/r3-img-1.png";
import image2 from "../../assets/img/research/r3-img-2.png";
import bgImage from "../../assets/img/research/r3-bg-img-1.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import SplitText3 from '../../components/title-animation/SplitTextAnimation3';


function ResearchThree() {

  useGSAP(() => {
    // For each images with class page animation
    gsap.utils.toArray(".chy-slideinup").forEach((el, index) => {
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 85%",
          end: "buttom 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl4
        .set(el, { transformOrigin: "center center" })
        .from(
          el,
          { y: "+=100" },
          { y: 0, duration: 1, immediateRender: false }
        );
    });
  });

  return (
    <div
      className="chy-research-3-area bg-default pt-110 pb-75 fix"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container chy-container-1">
        <div className="chy-research-3-wrap">
          <div className="row g-0">

            {/* left-img */}
            <div className="col-xl-6">
              <div className="chy-research-3-img">
                <div className="main-img img-cover chy-slideinup">
                  <img src={image1} alt="" />
                </div>
                <div className="main-img img-cover chy-slideinup">
                  <img src={image2} alt="" />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="chy-research-3-contnet">

                {/* section-title */}
                <div className="section-title-wrap mb-30">
                  <h3
                    className="chy-subtitle-3"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    your inventory is time
                  </h3>
                  <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
                    <SplitText3 text="digital agency excellence services." />
                  </h2>
                  <p
                    className="chy-para-3"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    data-aos-delay="50"
                  >
                    And you spend over half of it on non-core functions like
                    Following up for Payments or Writing Proposals from scratch
                    or sending Manual Updates to your Clients.
                  </p>
                </div>

                <ul className="chy-research-3-list mb-55">
                  <li className="chy-heading-1">
                    <i className="fi fi-br-star"></i>
                    no patchwork of apps
                  </li>
                  <li className="chy-heading-1">
                    <i className="fi fi-rr-badget-check-alt"></i>
                    complete visibility
                  </li>
                  <li className="chy-heading-1">
                    <i className="fi fi-rr-grin-alt"></i>
                    happy clients
                  </li>
                  <li className="chy-heading-1">
                    <i className="fi fi-rs-check-circle"></i>
                    healthier business
                  </li>
                </ul>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <Link to="/services-02" className="chy-pr-btn-4">
                    get started
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchThree