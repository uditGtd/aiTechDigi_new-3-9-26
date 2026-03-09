import React from 'react'
import img1 from "../../assets/img/cta/c1-img-1.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import SplitText from '../../components/title-animation/SplitTextAnimation';

function CtaOne() {
  return (
    <div className="chy-cta-1-area chy-slideinup">
      <div className="container chy-container-1">
        <div className="chy-cta-1-wrap">
          <img src={img1} className="bg-img chy-zoomout2" alt="" />
          <div className="chy-cta-1-content"> 
            <div className="section-title-wrap">
              <h5
                className="chy-subtitle-1"
                data-aos="fade-down"
                data-aos-offset="5"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                contact us
              </h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">
                <SplitText text="Ready To Start With GotechDigi?" />
              </h2>
            </div>
            <Link to="/about" className="chy-pr-btn-1">
              <span className="text">let's get started</span>
              <span className="icon">
                <i className="fa-solid fa-right-long"></i>
                <FontAwesomeIcon icon={faRightLong} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaOne