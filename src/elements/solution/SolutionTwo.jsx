import React, { useRef } from "react";
import bgImg from "../../assets/img/solutions/s2-bg-img-1.png";
import checkIcon from "../../assets/img/solutions/s2-check-icon.png";
import mobileHand from "../../assets/img/solutions/s2-mobile-hand.png";
import allIcon from "../../assets/img/solutions/s2-all-icon.png";
import playText from "../../assets/img/video/plybtn-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FaRegCheckCircle } from "react-icons/fa";
import Fancybox from "../../components/utiles/Fancybox";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import SplitText2 from "../../components/title-animation/SplitTextAnimation2";

function SolutionTwo() {

  // countup 
  const countUpRef = useRef()

  return (
    <div
      className="chy-solutions-2-area bg-default"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container chy-container-1">
        <div className="chy-solutions-2-wrap">
          <div className="chy-solutions-2-content">
            
            {/* section-title */}
            <div className="section-title-wrap mb-30">
              <h3
                className="chy-subtitle-2"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                who we are
              </h3>
              <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
                <SplitText2 text="growt your business expert sales" />
              </h2>
              <p
                className="chy-para-2"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
                data-aos-delay="50"
              >
                Duis aute irure dolor in reprehendeirure dolor irit in volut
                ate velit esse cillum dolDuis aute irure dolor in ore accu
              </p>
            </div>

            <div className="inner-div mb-40">
              <img src={checkIcon} className="certi-img chyroted" alt="" />
              <ul className="solutions-2-list">
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <FaRegCheckCircle /> 692% campaign ROI exceeds
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FaRegCheckCircle /> 8x the number of keywords sending
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="60"
                >
                  <FaRegCheckCircle /> 296% increase in organic traffic
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="70"
                >
                  <FaRegCheckCircle /> sed ut perspiciatis unde
                </li>
              </ul>
            </div>
            <Link
              to="/about"
              className="chy-pr-btn-3"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="80"
            >
              <span className="text">explore more</span>
              <FontAwesomeIcon icon={faLongArrowRight} />
            </Link>
          </div>

          <div className="chy-solutions-2-counter-wrap">
            <div
              className="chy-solutions-2-counter"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <h3 className="chy-heading-1 number">
                <CountUp
                  delay={1}
                  duration={3}
                  start={1}
                  end={12}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={"+"}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <p className="chy-para-2 disc">
                Duis aute irure dolor in fot reprehendeirure dolor
              </p>
            </div>
            <div
              className="chy-solutions-2-counter"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <h3 className="chy-heading-1 number">
                <CountUp
                  delay={1}
                  duration={3}
                  start={1}
                  end={70}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={"%"}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <p className="chy-para-2 disc">
                Duis aute irure dolor in fot reprehendeirure dolor
              </p>
            </div>
          </div>

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
              className="chy-plybtn-2 popup-video"
            >
              <FontAwesomeIcon icon={faPlay} />
              <img className="text-img" src={playText} alt="" />
            </a>
          </Fancybox>

          <img src={mobileHand} className="hand-img" alt="" />
          <img src={allIcon} className="all-icon" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SolutionTwo;
