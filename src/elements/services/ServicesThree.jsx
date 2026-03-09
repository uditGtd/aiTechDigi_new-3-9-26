import React, { useRef } from 'react'
import image1 from "../../assets/img/services/s3-icon-1.png";
import image2 from "../../assets/img/services/s3-icon-2.png";
import image3 from "../../assets/img/services/s3-icon-3.png";
import image4 from "../../assets/img/services/s3-icon-4.png";
import image5 from "../../assets/img/services/s3-icon-5.png";
import image6 from "../../assets/img/services/s3-icon-6.png";
import imageSm from "../../assets/img/services/s3-sm-img.png";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Tilt from "react-parallax-tilt";
import SplitText3 from '../../components/title-animation/SplitTextAnimation3';

function ServicesThree() {
  // data
  const data = [
    {
      id: "01",
      name: "WEB DESIGN",
      image: image1,
    },
    {
      id: "02",
      name: "html 5",
      image: image2,
    },
    {
      id: "03",
      name: "wordpress",
      image: image3,
    },
    {
      id: "04",
      name: "react",
      image: image4,
    },
    {
      id: "05",
      name: "css 3",
      image: image5,
    },
    {
      id: "06",
      name: "javascript",
      image: image6,
    },
  ];

  // countup
  const countUpRef = useRef();

  return (
    <div className="chy-services-3-area pt-120 pb-120 fix">
      <div className="container chy-container-1">
        <div className="row g-0 align-items-center">

          {/* right-content */}
          <div className="col-lg-6">
            <div className="chy-services-3-content">

              {/* section-title */}
              <div className="section-title-wrap mb-30">
                <h3
                  className="chy-subtitle-3"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  our best services
                </h3>
                <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
                  <SplitText3 text="we provide better service?" />
                </h2>
                <p
                  className="chy-para-3"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  We believe that great design should not be out of reach, so
                  our not be Services are less than half the price of a
                  full-time designer.
                </p>
              </div>

              <div
                className="chy-services-2-work mb-55"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <img src={imageSm} alt="" />
                <div className="right">
                  <h4 className="chy-heading-1 title">work completed</h4>
                  <h3 className="chy-heading-1 number">
                    <CountUp
                      delay={1}
                      duration={3}
                      start={1}
                      end={86900}
                      enableScrollSpy
                      scrollSpyOnce
                      suffix={"+"}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </h3>
                </div>
              </div>
              <div
                className="btn-wrap"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <Link to="/services-01" className="chy-pr-btn-4">get started</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="chy-services-3-item-wrap">
              {/* data map */}
              {data.map((item) => (
                <div
                  key={item.id}
                  className="chy-services-3-item"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <Tilt
                    className="background-stripes parallax-effect"
                    perspective={300}
                  >
                    <div className="icon">
                      <img src={item.image} alt="" />
                    </div>
                    <h5 className="chy-heading-1 title">
                      <Link to="/service-details">{item.name}</Link>
                    </h5>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServicesThree