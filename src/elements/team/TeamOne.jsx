import React from 'react'
import facebookImg from "../../assets/img/team/t1-facebook.png";
import instagramImg from "../../assets/img/team/t1-instragram.png";
import img1 from "../../assets/img/team/t1-img-1.png";
import img2 from "../../assets/img/team/t1-img-2.png";
import imgIl1 from "../../assets/img/team/t1-il-text-1.png";
import imgIl2 from "../../assets/img/team/t1-il-text-2.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from '../../components/title-animation/SplitTextAnimation';

function TeamOne() {

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.chyt1cc').forEach((el, index) => { 
      let tl6 = gsap.timeline({
        scrollTrigger: {
        trigger: el,
        scrub: 1,
        start: "top 70%",
        end: "buttom 40%",
        toggleActions: "play none none reverse",
        markers: false
        }
      })
      
      tl6
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, { backgroundColor: "#6733E8"}, { backgroundColor: "#EDDFFF", duration: 1, immediateRender: false})
    })
  });

  return (
    <div className="chy-team-1-area pt-70 pb-75 fix">
      <span className="bg-shape chyt1cc"></span>
      <div className="container chy-container-1">

        {/* section-title */}
        <div className="section-title-wrap mb-30 text-center">
          <h5
            className="chy-subtitle-1"
            data-aos="fade-down"
            data-aos-offset="5"
            data-aos-duration="3000"
            data-aos-once="true"
          >
            marketing agency team
          </h5>
          <h2 className="chy-title-1  chy-split-in-right chy-split-text">
            <SplitText text="make brand identities from sractch and help" />
          </h2>
        </div>

        <div className="chy-team-1-wrap">
          <img src={facebookImg} className="il-img-2" alt="" />
          <img src={instagramImg} className="il-img-3" alt="" />

          {/* single-item  */}
          <div className="chy-team-1-member">
            <div className="main-img img-cover">
              <img src={img1} alt="" />
              <div className="content-wrap">
                <h5 className="chy-heading-1 name">
                  <Link to="/team-details">Natalie Portman</Link>
                </h5>
                <p className="chy-para-1 bio">marketing officer</p>
              </div>
            </div>
            <img src={imgIl1} className="text-img" alt="" />
          </div>

          {/* single-item  */}
          <div className="chy-team-1-member has-style-2">
            <div className="main-img img-cover">
              <img src={img2} alt="" />
              <div className="content-wrap">
                <h5 className="chy-heading-1 name">
                  <Link to="/team-details">Dwayne Johnson</Link>
                </h5>
                <p className="chy-para-1 bio">wp developer</p>
              </div>
            </div>
            <img src={imgIl2} className="text-img" alt="" />
          </div>

        </div>

        <div className="col-12 pt-20 text-center">
          <Link to="/team" className="chy-pr-btn-1">
            <span className="text">explore more</span>
            <span className="icon">
              <FontAwesomeIcon icon={faRightLong} />
            </span>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default TeamOne