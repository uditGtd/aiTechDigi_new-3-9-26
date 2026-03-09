import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { data } from "../../data/services/services-four";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import SplitText from "../../components/title-animation/SplitTextAnimation";


function ServicesFive() {
  return (
    <div
      className="chy-services-5-area pt-120 pb-120"
      style={{
  background: "white",
  backgroundRepeat: "no-repeat"
}}


    >
      <div className="container chy-container-2">
        <div className="section-title-wrap  text-center mb-40">
          <h5 className="chy-subtitle-4 has-center chy-class-add">
            our best services
          </h5>
          <h2 className="chy-title-4 chy-split-in-right chy-split-text">
            <SplitText text="We Provide Best Services" />
          </h2>
        </div>

        <div className="chy-services-5-item-wrap">
          {/* data map */}
          {data.map((item) => (
            <div className="chy-services-5-item" key={item.id}>
              <div className="icon">
                <i className={`${item.iconName}`}></i>
              </div>
              <h4 className="chy-heading-2 title">
                <Link to="/service-details">
                  {item.title}
                </Link>
              </h4>
              <div className="disc-wrap">
                <p className="chy-para-4 disc">
                  {item.disc}
                </p>
              </div>

              <Link
                to="/service-details"
                className="s5-btn"
              >
                Read More <FontAwesomeIcon icon={faCircleArrowRight}/>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center pt-50">
          <p className="chy-para-4 s5-all-btn">
            Want to see our professional services.{" "}
            <Link to="/services-02">
              Click here to View More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesFive;
