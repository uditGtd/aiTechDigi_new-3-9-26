import React, { useEffect, useRef } from "react";
import imgShape1 from "../../assets/img/hero/h1-il-1.png";
import imgShape2 from "../../assets/img/hero/h1-il-2.png";
import imgShape3 from "../../assets/img/hero/h1-il-3.png";
import imgShape4 from "../../assets/img/hero/h1-il-4.png";
import imgShape5 from "../../assets/img/hero/h1-il-5.png";
import img1 from "../../assets/img/hero/h1-img-1.png";
import imgBg from "../../assets/img/hero/h1-bg-img-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fancybox from "../../components/utiles/Fancybox";
import SplitText from "../../components/title-animation/SplitTextAnimation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HeroOne() {

  useGSAP(() => {
    // image scroll animatinon
    gsap.to(".chy-className-add", {
      scrollTrigger: {
        trigger: ".chy-className-add",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
        toggleClass: "active",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  });

  // mouse-move-animation
  const heroSection = useRef();

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
      className="chy-hero-1-area chy-className-add bg-default fix"
      style={{ backgroundImage: `url(${imgBg})` }}
    >
      <div className="container chy-container-1">
        <div className="row align-items-center">

          {/* left-content  */}
          <div className="col-lg-6">
            <div className="chy-hero-1-content">
              <div className="il-shape-1">
                <img
                  src={imgShape4}
                  alt=""
                  className="object main-shape"
                  data-value="3"
                />
              </div>

              <h5
                className="chy-subtitle-1 subtitle"
                data-aos="fade-right"
                data-aos-offset="5"
                data-aos-duration="3000"
                  data-aos-once="true"
              >
                
              DIGITAL PLATFORM

              </h5>
              <h1 className="title chy-split-in-hero-1 chy-split-text">
                <SplitText text="Bringing Your Ideas Alive" />
              </h1>
              <p
                className="chy-para-1 disc"
                data-aos="fade-right"
                data-aos-offset="5"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                GotechDigi, based in Naraina Vihar, Delhi, is a leading digital marketing agency dedicated to helping businesses thrive in today’s competitive online world.
                 With a focus on innovative strategies and cutting-edge technology, we specialize in creating tailored marketing solutions that deliver measurable results.
              </p>

              <div className="btn-wrap ">
                <Link to="/about"
                  className="chy-pr-btn-1"
                  data-aos-delay="50"
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
                <div>
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
                      data-aos="fade-right"
                      data-aos-offset="5"
                      data-aos-duration="3000"
                      data-aos-once="true"
                      className="chy-plybtn-1 popup-video"
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faPlay} />
                      </span>
                      <span className="text chy-para-1">play video</span>
                    </a>
                  </Fancybox>
                </div>
              </div>
            </div>
          </div>

          {/* right-img  */}
          <div className="col-lg-6">
            <div className="chy-hero-1-img">
              <div className="main-img">
                <img src={img1} alt="" />
              </div>
              <div className="il-shape-1">
                <img
                  src={imgShape1}
                  alt=""
                  className=" object"
                  data-value="6"
                />
              </div>
              <div className="il-shape-2">
                <img
                  src={imgShape2}
                  alt=""
                  className="object"
                  data-value="4"
                />
              </div>
              <div className="il-shape-3">
                <img
                  src={imgShape3}
                  alt=""
                  className="object"
                  data-value="3"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <img src={imgShape5} alt="" className="il-shape-4" />
    </div>
  )
}

export default HeroOne;
