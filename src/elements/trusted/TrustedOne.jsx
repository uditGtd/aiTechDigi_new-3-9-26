import React, { useRef } from "react";
import img1 from '../../assets/img/trusted/t1-world-1.png'
import img2 from '../../assets/img/trusted/t1-world-2.png'
import img3 from '../../assets/img/trusted/t1-world-3.png'
import img4 from '../../assets/img/trusted/t1-world-4.png'
import videoImg1 from "../../assets/img/trusted/t1-video-img-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import Fancybox from "../../components/utiles/Fancybox";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


function TrustedOne() {

  useGSAP(() => {
    // progress scroll animatinon
    gsap.to(".chy-trusted-1-area", {
      scrollTrigger: {
        trigger: ".chy-trusted-1-area",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
        toggleClass: "active",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    gsap.utils.toArray(".chy-trusted-1-wrap").forEach((el, index) => {
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 80%",
          end: "buttom 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl1
        .set(el, { transformOrigin: "center center" })
        .from(
          el,
          { background: "#fff", scale: 0.8 },
          {
            background: "inherit",
            scale: 1,
            duration: 1,
            immediateRender: false,
          }
        );
    });
  });

  // counter ref 
  const countUpRef = useRef()

  return (
    <div className="chy-trusted-1-area">
      <div className="container chy-container-1">
        <div className="chy-trusted-1-wrap">
          <div className="chy-trusted-1-item">
            <h3 className="chy-trusted-1-title chy-heading-1">
              Trusted by{" "}
              <span className="icon-1">
                <img src={img1} alt="" />
              </span>{" "}
              <span className="icon-2">
                <img src={img2} alt="" />
              </span>{" "}
              250,000 Business{" "}
              <span className="icon-1">
                <img src={img3} alt="" />
              </span>{" "}
              <span className="icon-2">
                <img src={img4} alt="" />
              </span>
            </h3>
          </div>

          <div className="chy-trusted-1-item img-cover">
            <div className="chy-trusted-1-video ">
              <img src={videoImg1} alt="" />
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

          <div className="chy-trusted-1-item">
            <div className="chy-trusted-1-reating">
              <div className="icon">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="line"></span>
              <h4 className="chy-heading-1 text">
                Rated 4.9/5 from over 600 Reviews
              </h4>
            </div>
          </div>

          <div className="chy-trusted-1-item">
            <div className="chy-trusted-1-progress">
              <h4 className="chy-heading-1 title">monthly traffic</h4>
              <span className="line"></span>
              <h3 className="chy-heading-1 number">
                <CountUp
                  delay={1}
                  duration={3}
                  start={1}
                  end={33.4}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={"k"}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <div className="chy-trusted-1-progress-item chy-class-add">
                <h5 className="chy-heading-1 title">monthly trafic</h5>
                <div className="line">
                  <span className="line-fill"></span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default TrustedOne;
