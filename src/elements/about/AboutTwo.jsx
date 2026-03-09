
import img1 from "../../assets/img/about/a1-img-1.png";
import IlImg1 from "../../assets/img/about/a1-il-1.png";
import IlImg2 from "../../assets/img/about/a1-il-2.png";
import IlImg3 from "../../assets/img/about/a1-il-3.png";
import logo1 from "../../assets/img/about/a1-logo-1.png";
import logo2 from "../../assets/img/about/a1-logo-2.png";
import logo3 from "../../assets/img/about/a1-logo-3.png";
import logo4 from "../../assets/img/about/a1-logo-4.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import SplitText2 from "../../components/title-animation/SplitTextAnimation2";


function AboutTwo() {

  useGSAP(() => {
    // add active class
    gsap.to(".chy-about-2-area", {
      scrollTrigger: {
        trigger: ".chy-about-2-img",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
        toggleClass: "active",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  });

  return (
    <>
      <div className="chy-about-2-area pt-70 pb-70 fix" >
        <div className="container chy-container-1">
          <div className="row g-0 align-items-end">

            {/* left-img */}
            <div className="col-xl-6 col-lg-6">
              <div className="chy-about-2-img chy-class-add">
                <div className="main-img">
                  <img src={img1} alt="" />
                </div>
                <img
                  src={IlImg1}
                  alt=""
                  className="il-img-1"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
                <img
                  src={IlImg2}
                  alt=""
                  className="il-img-2"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
                <img
                  src={IlImg3}
                  alt=""
                  className="il-img-3"
                  data-aos="zoom-in"
                  data-aos-once="true"
                />
              </div>
            </div>

            {/* right-content */}
            <div className="col-xl-6 col-lg-6">
              <div className="chy-about-2-content">
                <div className="section-title-wrap mb-30">
                  <h3
                    className="chy-subtitle-2"
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-duration="1000"
                  >
                    who we are
                  </h3>
                  {/* <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
                    <SplitText2 text="Gotech Digi Your Digital Growth Partner" />
                  </h2> */}
                  <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text" style={{ fontSize: '38px', lineHeight: '1.2' }}>
                    <SplitText2 text="Gotech Digi Your Digital Growth Partner" />
                  </h2>
                  <p
                    className="chy-para-2"
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    Welcome to Gotech Digi, a New Delhi–based digital marketing agency
                    delivering smart web, app, and brand solutions through innovative strategies
                    and advanced technology.
                  </p>
                </div>

                <div className="innter-div mb-60">
                  <ul className="chy-about-2-feature">
                    {/* <li
                      data-aos="zoom-in"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <img src={logo1} alt="" />
                    </li>
                    <li
                      data-aos="zoom-in"
                      data-aos-once="true"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                    >
                      <img src={logo2} alt="" />
                    </li>
                    <li
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                      data-aos-once="true"
                      data-aos-delay="60"
                    >
                      <img src={logo3} alt="" />
                    </li>
                    <li
                      data-aos-duration="1000"
                      data-wow-delay=".4s"
                      data-aos="zoom-in"
                      data-aos-once="true"
                      data-aos-delay="70"
                    >
                      <img src={logo4} alt="" />
                    </li> */}
                    <li
                      className="chy-heading-1p"
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <i className="fi fi-sr-ticket"></i> customer support
                    </li>
                  </ul>
                  <ul
                    className="chy-about-2-feature"
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    {/* <li
                      className="chy-heading-1p"
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <i className="fi fi-sr-ticket"></i> customer support
                    </li> */}
                    <li
                      className="chy-heading-1"
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                    >
                      <i className="fi fi-ss-usb-pendrive"></i> individual
                      approach
                    </li>
                  </ul>
                </div>

                <Link
                  to="/about"
                  className="chy-pr-btn-3"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-delay="70"
                  data-aos-duration="1000"
                >
                  <span className="text">explore more</span>
                  <FontAwesomeIcon icon={faLongArrowRight} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTwo