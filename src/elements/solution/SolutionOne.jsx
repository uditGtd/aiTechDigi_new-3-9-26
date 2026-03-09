import React, { useRef } from 'react'
import img1 from "../../assets/img/solutions/s1-img-1.png";
import img2 from "../../assets/img/solutions/s1-img-2.png";
import img3 from "../../assets/img/solutions/s1-img-3.png";
import { Link } from 'react-router-dom';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@flaticon/flaticon-uicons/css/all/all.css";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from '../../components/title-animation/SplitTextAnimation';


function SolutionOne() {

  useGSAP(() => {
    // image roated animatinon
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

      tl3
        .set(el, { transformOrigin: "center center" })
        .from(
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
  
  // counter ref 
  const countUpRef = useRef()

  return (
    <div className="chy-solutions-1-area pt-80 pb-120 fix">
      <div className="container chy-container-1">
        <div className="row align-items-center">

          {/* left-content  */}
          <div className="col-xl-5 col-lg-6">
            <div className="chy-solutions-1-content">
              <div className="section-title-wrap mb-35">
                <h5
                  data-aos="fade-right"
                  data-aos-offset="5"
                  data-aos-duration="3000"
                  data-aos-once="true"
                  className="chy-subtitle-1"
                >
                  consulting solutions
                </h5>
                <h2 className="chy-title-1 chy-split-text has-55">
                  <SplitText text="Skillset To Improve Your Company Brand" />
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-offset="5"
                  data-aos-duration="3000"
                  data-aos-once="true"
                  className="chy-section-para-1"
                >
                  Every pleasure is to be welcomed and every pain avoided.
                  certain circumstances and owing to the claims welcomed and
                  every pain avoided certain circumstances
                </p>
              </div>

              <div className="inner-div mb-50">
                <div
                  className="inner-img img-cover"
                  data-aos="zoom-in"
                  data-aos-offset="5"
                  data-aos-duration="3000"
                  data-aos-once="true"
                >
                  <img src={img2} alt="" />
                </div>
                <div
                  className="inner-img"
                  data-aos="fade-right"
                  data-aos-offset="5"
                  data-aos-duration="3000"
                  data-aos-delay="30"
                    data-aos-once="true"
                >
                  <img src={img3} alt="" />
                </div>
              </div>

              <Link to="/about"
                className="chy-pr-btn-1"
                data-aos="fade-right"
                data-aos-offset="5"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                <span className="text">explore more</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faRightLong} />
                </span>
              </Link>
            </div>
          </div>

          {/* right-img */}
          <div className="col-xl-7 col-lg-6">
            <div className="chy-solutions-1-img ">
              <div className="main-img rotatedscal">
                <img src={img1} alt="" />
              </div>
              <div className="chy-solutions-1-goals">
                <h5 className="chy-heading-1 title">goals</h5>
                <div className="chy-solutions-1-goals-item">
                  <div className="icon">
                    <i className="fi fi-br-megaphone"></i>
                  </div>
                  <div className="content-wrap">
                    <h4 className="chy-heading-1 number">
                      <CountUp
                        delay={1}
                        duration={3}
                        start={1}
                        end={64}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix={"%"}
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </h4>
                    <p className="chy-para-1 disc">cover marketing</p>
                  </div>
                </div>
                <div className="chy-solutions-1-goals-item has-bg">
                  <div className="icon">
                    <i className="fi fi-rr-envelope-plus"></i>
                  </div>
                  <div className="content-wrap">
                    <h4 className="chy-heading-1 number">
                      <CountUp
                        delay={1}
                        duration={3}
                        start={1}
                        end={94}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix={"%"}
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </h4>
                    <p className="chy-para-1 disc">sms marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SolutionOne