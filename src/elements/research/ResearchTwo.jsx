import React from "react";
import img from "../../assets/img/research/r2-img-1.png";
import icon from "../../assets/img/research/r2-img-icon.png";
import {
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../../components/utiles/AnimatedProgressProvider";
import TrackVisibility from "react-on-screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import SplitText2 from "../../components/title-animation/SplitTextAnimation2";

function ResearchTwo() {

  useGSAP(() => {
    // image scroll zoomout animation
    gsap.utils.toArray(".chy-zoomout3").forEach((el, index) => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 85%",
          end: "buttom 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl6
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { scale: 1.5 },
          { scale: 1, duration: 1, immediateRender: false }
        );
    });

    // image scroll animation
    gsap.utils.toArray(" .asslideupcta").forEach((el, index) => {
      let tlcta = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tlcta
        .set(el, { transformOrigin: "center center" })
        .from(
          el,
          { opacity: 1, y: "+=300" },
          { opacity: 1, y: 0, duration: 1, immediateRender: false }
        );
    });
  });

  return (
    <div className="chy-research-2-area pt-100 fix">
      <div className="container chy-container-1">
        <div className="row align-items-end">
          <div className="col-xl-6">
            <div className="chy-research-2-img">
              <div className="main-img asslideupcta d-block fix">
                <img src={img} className=" d-block" alt="" />
              </div>

              <img className="img-icon chy-zoomout3" src={icon} alt="" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="chy-research-2-content">

              {/* section-title */}
              <div className="section-title-wrap mb-30">
                <h3
                  className="chy-subtitle-2"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  professional approach
                </h3>
                <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
                  <SplitText2 text="AI Solutions Tailored to Your Industry" />
                </h2>
                <p
                  className="chy-para-2"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  We deliver intelligent, industry-specific AI solutions designed to optimize operations, enhance efficiency, and drive measurable business growth.
                </p>
              </div>

              <ul className="chy-research-2-list mb-30">
                <li
                  className="chy-heading-1"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <FontAwesomeIcon icon={faCheckCircle} /> evolving customer
                  expectations
                </li>
                <li
                  className="chy-heading-1"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FontAwesomeIcon icon={faCheckCircle} /> automated and
                  paperlees eamless
                </li>
              </ul>

              <div
                className="chy-research-2-progress mb-30"
              >

                {/* single-item  */}
                <div className="chy-research-2-progress-item">
                  <TrackVisibility once>
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={98}
                      duration={2.5}
                      easingFunction={easeQuadInOut}
                      repeat={false}
                    >
                      {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            strokeWidth={10}
                            styles={{
                              trail: {
                                stroke: "#EFF7F8",
                                transition:
                                  "stroke-dashoffset 1s ease 1s",
                              },
                              text: {
                                fill: "#191825",
                                fontSize: "20px",
                                dominantBaseline: "central",
                                textAnchor: "middle",
                              },
                              path: {
                                stroke: "#EE4619",
                                strokeLinecap: "round",
                              },
                            }}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                  </TrackVisibility>
                  <h5 className="title chy-heading-1">
                    client <br /> satisfied
                  </h5>
                </div>

                {/* single-item */}
                <div className="chy-research-2-progress-item">
                  <TrackVisibility once>
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={80}
                      duration={1.5}
                      easingFunction={easeQuadInOut}
                      repeat={false}
                    >
                      {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            strokeWidth={10}
                            styles={{
                              trail: {
                                stroke: "#EFF7F8",
                                transition:
                                  "stroke-dashoffset 0.5s ease 0.6s",
                              },
                              text: {
                                fill: "#191825",
                                fontSize: "20px",
                                dominantBaseline: "central",
                                textAnchor: "middle",
                              },
                              path: {
                                stroke: "#EE4619",
                                strokeLinecap: "round",
                              },
                            }}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                  </TrackVisibility>
                  <h5 className="title chy-heading-1">
                    finance <br />
                    consulting
                  </h5>
                </div>

              </div>

              <Link
                to="/process"
                className="chy-pr-btn-3"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
                data-aos-delay="80"
              >
                <span className="text">explore more</span>
                <FontAwesomeIcon icon={faLongArrowRight} />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchTwo;
