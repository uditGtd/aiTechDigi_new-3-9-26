import React, { useEffect, useRef } from 'react'
import bgImage from "../../assets/img/trusted/t3-bg-img-1.png";
import '@flaticon/flaticon-uicons/css/all/all.css'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

function TrustedThree() {

  // countup
  const countUpRef = useRef();

  return (
    <div
      className="chy-trusted-3-area pt-110 pb-90 bg-default"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container chy-container-1">
        <div className="chy-trusted-3-wrap">

          {/* left-content */}
          <div className="chy-trusted-3-content">
            <h4
              className="chy-heading-1 title"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              your inventory is time
            </h4>
            <p
              className="chy-para-3 disc"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="50"
            >
              Since 1985 Reed has pioneered specialist recruitment, sourcing
              knowledgeable
            </p>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-delay="60"
            >
              <Link to="/about" className="t3-btn">get started</Link>
            </div>
          </div>

          <div className="chy-trusted-3-counter">

            {/* single-item */}
            <div className="item">
              <h3 className="number chy-heading-1">
                <CountUp
                  delay={1}
                  duration={5}
                  start={1}
                  end={556}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={"k"}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <p className="chy-para-3 disc">clients satisfactions</p>
            </div>

            <div className="item no-after">
              <span className="icon">
                <i className="fi fi-rr-star"></i>
              </span>
            </div>

            {/* single-item */}
            <div className="item">
              <h3 className="number chy-heading-1">
                <CountUp
                  delay={1}
                  duration={5}
                  start={1}
                  end={256}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={"k"}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <p className="chy-para-3 disc">envato market</p>
            </div>

            <div className="item no-after">
              <span className="icon">
                <i className="fi fi-rr-star"></i>
              </span>
            </div>

            {/* single-item */}
            <div className="item">
              <h3 className="number chy-heading-1">
                <CountUp
                  delay={1}
                  duration={5}
                  start={1}
                  end={356}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={"k"}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <p className="chy-para-3 disc">mobile apps</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedThree