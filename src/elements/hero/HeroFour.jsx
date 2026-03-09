import { faArrowDownLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import bgImage from "../../assets/img/hero/h4-bg-1.png";
import image from "../../assets/img/hero/h4-img-1.png";
import imageIl1 from "../../assets/img/hero/h4-il-1.png";
import imageIl2 from "../../assets/img/hero/h4-il-2.png";
import imageIl3 from "../../assets/img/hero/h4-il-3.png";
import { faFacebook, faPinterest, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Fancybox from '../../components/utiles/Fancybox';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from '../../components/title-animation/SplitTextAnimation';


function HeroFour() {

  useGSAP(() => {
    // scroll animatinon
    const boxes = gsap.utils.toArray(".chy-class-add");
    boxes.forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          scrub: 1,
          start: "top 80%",
          end: "bottom bottom",
          toggleClass: "active",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    });

  });
  
  // paralax
  const heroSection = useRef()

  const moveAnimation = (e) => {
    document.querySelectorAll(".object").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  };

  return (
    <div
      ref={heroSection}
      onMouseMove={(event) => moveAnimation(event)}
      className="chy-hero-4-area fix"
    >
      <div className="chy-hero-4-wrap">
        <div className="bg-img">
          <img src={bgImage} alt="" />
        </div>
        <div className="container chy-container">
          <div className="chy-hero-4-content-wrap">
            <div className="row align-items-end">

              {/* left-content */}
              <div className="col-xxl-6 col-xl-7 col-lg-7">
                <div className="chy-hero-4-content">
                  <h4 className="chy-subtitle-4 chy-class-add">
                    welcome to agency
                  </h4>
                  <h1 className="hero-title chy-heading-2 chy-split-text chy-split-in-hero-4">
                    <SplitText text="We are Creative Digital Marketing Agency" />
                  </h1>
                  <p
                    className="chy-para-4 has-20 disc wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="1s"
                  >
                    We are 100+ professional software engineers with more than
                    10 years of experience in delivering superior products
                    Believe it because you've seen it. Here are real numbers
                  </p>
                  <div
                    className="btn-wrap wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="1.5s"
                  >
                    <Link to="/about" className="chy-pr-btn-5">
                      <span className="text">discover more</span>
                      <span className="icon">
                        <FontAwesomeIcon icon={faRightLong} />
                      </span>
                    </Link>
                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: false,
                        },
                      }}
                    >
                      <a
                        href="https://youtu.be/kxPCFljwJws?si=8FYTVk3XpOM_I624"
                        data-fancybox
                        data-width="900"
                        data-height="500"
                        className="chy-plybtn-3 popup-video"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="61"
                            height="60"
                            viewBox="0 0 61 60"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_66_147)">
                              <path
                                className="path-1"
                                d="M40.8682 28.8271L28.4094 19.7705C27.9522 19.439 27.3452 19.3891 26.844 19.6467C26.3389 19.9022 26.0234 20.4214 26.0234 20.9824V39.0896C26.0234 39.6567 26.3389 40.1738 26.844 40.4294C27.0577 40.5372 27.2913 40.5911 27.5269 40.5911C27.8344 40.5911 28.1458 40.4932 28.4094 40.2996L40.8682 31.251C41.2615 30.9614 41.4911 30.5142 41.4911 30.039C41.4931 29.5558 41.2575 29.1106 40.8682 28.8271Z"
                                fill="#36C4F7"
                              />
                              <path
                                className="path-2"
                                d="M30.9737 0.00390625C14.4018 0.00390625 0.972656 13.4331 0.972656 30.0049C0.972656 46.5707 14.4018 59.9959 30.9737 59.9959C47.5415 59.9959 60.9727 46.5687 60.9727 30.0049C60.9747 13.4331 47.5415 0.00390625 30.9737 0.00390625ZM30.9737 54.9904C17.1731 54.9904 5.98414 43.8074 5.98414 30.0049C5.98414 16.2084 17.1731 5.01139 30.9737 5.01139C44.7722 5.01139 55.9592 16.2064 55.9592 30.0049C55.9612 43.8074 44.7722 54.9904 30.9737 54.9904Z"
                                fill="#36C4F7"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_66_147">
                                <rect
                                  width="60"
                                  height="60"
                                  fill="white"
                                  transform="translate(0.972656)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="text chy-para-1">watch video</span>
                      </a>
                    </Fancybox>
                  </div>
                </div>
              </div>

              {/* right-content */}
              <div className="col-xxl-6 col-xl-5 col-lg-5">
                <div className="chy-hero-img chy-class-add ">
                  <div className="main-img">
                    <img src={image} alt="" />
                  </div>
                  <div className="il-img-1">
                    <img src={imageIl1} alt="" className="object" data-value="3" />
                  </div>
                  <div className="il-img-2">
                    <img src={imageIl2} alt="" className="object" data-value="7" />
                  </div>
                  <div className="il-img-3">
                    <img src={imageIl3} alt="" className="object" data-value="5" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <ul className="chy-hero-4-social">
          <li className="text">SOCIAL MEDIA</li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faPinterest} />
            </Link>
          </li>
        </ul>

        <div className="chy-hero-4-scroll-btn-wrap">
          <span className="text">scroll down</span>
          <Link className="icon">
            <FontAwesomeIcon icon={faArrowDownLong} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HeroFour