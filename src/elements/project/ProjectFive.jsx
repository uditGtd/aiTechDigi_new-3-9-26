import React from "react";
import { dataOne, dataTwo } from "../../data/project/project-five";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import SplitText from "../../components/title-animation/SplitTextAnimation";

function ProjectFive() {

  return (
    <div className="chy-project-5-area fix">
      <div className="chy-project-5-wrap">
        <Marquee speed={100} pauseOnHover={true}>
          {dataOne.map((item) => (
            <div key={item.id}
              className={`chy-project-5-item ${
                item.id == "02" ? "has-height-1" : ""
              } ${item.id == "03" ? "has-height-2" : ""}`}
            >
              <div className="main-img img-cover" key={item.id}>
                <img src={item.image} alt="" />

                <div className="btn-position">
                  <Link to="/project-details" className="p5-btn">
                    <FiArrowUpRight />
                  </Link>
                </div>

                <div className="content-wrap">
                  <h4 className="chy-heading-2 subtitle">{item.subtitle}</h4>
                  <h2 className="chy-heading-2 title">
                    <Link to="/project-details">{item.title}</Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="section-title-wrap text-center pt-30 pb-30">
        <h5 className="chy-subtitle-4 has-center chy-class-add">
          our best services
        </h5>
        <h2 className="chy-title-4 chy-split-in-right chy-split-text">
          <SplitText text="Take A Look Our Work Gallery Recent Projects" />
        </h2>
        <p className="chy-para-4">
          We are 100+ professional software engineers with more than 10 years of
          experience in delivering superior
        </p>

        <Link to="/project-02" className="chy-pr-btn-5">
          <span className="text">view all more</span>
          <span className="icon">
            <FontAwesomeIcon icon={faRightLong} />
          </span>
        </Link>
      </div>
      <Marquee direction="right" speed={100} pauseOnHover={true}>
        <div className="chy-project-5-wrap2">
          {/* data map */}
          {dataTwo.map((item) => (
            <div
              className={`chy-project-5-item has-style-1 ${
                item.id == "02" ? "has-height-1" : ""
              } ${item.id == "03" ? "has-height-2" : ""}`}
              key={item.id}
            >
              <div className="main-img img-cover">
                <img src={item.image} alt="" />

                <div className="btn-position">
                  <Link to="/project-details" className="p5-btn">
                    <FiArrowUpRight />
                  </Link>
                </div>

                <div className="content-wrap">
                  <h4 className="chy-heading-2 subtitle">{item.subtitle}</h4>
                  <h2 className="chy-heading-2 title">
                    <Link to="/project-details">{item.title}</Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default ProjectFive;
