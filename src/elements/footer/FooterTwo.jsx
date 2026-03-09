import React, { useEffect } from 'react'
import team1 from "../../assets/img/footer/f2-team-1.png";
import team2 from "../../assets/img/footer/f2-team-2.png";
import team3 from "../../assets/img/footer/f2-team-3.png";
import team4 from "../../assets/img/footer/f2-team-4.png";
import icon1 from "../../assets/img/footer/f2-icon-1.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import Fancybox from "../../components/utiles/Fancybox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IoImagesOutline } from 'react-icons/io5';
import {
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

function FooterTwo() {

  useGSAP(() => {
    // image animation
    gsap.utils.toArray(".chyroted").forEach((el, index) => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 3,
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl6
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { rotateZ: 360 },
          { rotateZ: 0, duration: 1, immediateRender: false }
        );
    });
  });

  return (
    <footer className="chy-footer-2-area pt-110 pb-90 fix" style={{background:" #010021"}}>
      <div className="container chy-container-1">
        <div className="row">

          {/* left-content */}
          <div className="col-lg-5">
            <div className="chy-footer-2-content">
              <h3 className="chy-heading-1 title chyf2cc">
                let's <img src={icon1} className="chyroted" alt="" /> connect.
              </h3>
              <div className="chy-para-2 disc">
                <div className='d-flex gap-2'>
                 <span><FontAwesomeIcon icon={faEnvelope} /></span> info@gotechdigi.com
                </div>
                <div className='d-flex gap-2'>
                 <span><FontAwesomeIcon icon={faPhone} /></span> +91 75032 66571
                </div>
                <div className='d-flex gap-2'>
                 <span><FontAwesomeIcon icon={faLocationDot} /></span> Office no. 72, harikishan plaza, CB- 201, Ring Rd, Block CB, Naraina Village, Naraina, New Delhi, Delhi 110028
                </div>
                
                {/* At Gotechdigi, we thrive on tackling challenges and pioneering innovative solutions in the advertising sector, driven by our unwavering passion for creativity and excellence. */}
              </div>
              <ul className="chy-footer-2-social-link mb-30">
                <li>
                  <a aria-label="link" href="https://www.facebook.com/gotechdigi/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a aria-label="link" href="https://in.linkedin.com/company/gotechdigi">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a aria-label="link" href="https://www.instagram.com/accounts/login/?next=%2Fgotechdigi&source=omni_redirect">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a aria-label="link" href="https://www.youtube.com/@gotech_digi">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
              <h4 className="chy-heading-1 copyright-link">
                {/* © copyright 2024 by{" "}
                <Link
                  to={{ pathname: "https://themexriver.com/" }}
                  target="_blank"
                >
                  themexriver.com
                </Link> */}
                Powered by Gotech Digi. All rights reserved.
              </h4>
            </div>
          </div>

          {/* right-content */}
          <div className="col-lg-7">
            <div className="chy-footer-2-widget-wrap">
              {/* single-item */}
              <div className="chy-footer-2-widget">
                <h4 className="chy-heading-1 chy-footer-1-widget-title text-light">
                  Quick Links
                </h4>
                <ul className="chy-footer-1-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                </ul>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget">
                <h4 className="chy-heading-1 chy-footer-1-widget-title text-light">
                  Terms Links
                </h4>
                <ul className="chy-footer-1-menu">
                  
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/cancellation-refunds">Cancellation & Refunds</Link>
                  </li>
                </ul>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget">
                {/* <h4 className="chy-heading-1 chy-footer-1-widget-title text-light">
                  Offers
                </h4> */}
                <form className="chy-footer-1-form">
                  {/* <input type="text" placeholder="enter your email" /> */}
                  <Link to="/contact">
                    <button aria-label="newsletter" type="submit">
                      Get a Quote
                    </button>
                  </Link>
                </form>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget has-full-widht">
                <span className="line"></span>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget has-full-widht">
                <h4 className="chy-heading-1 chy-footer-1-widget-title text-light">
                  our team
                </h4>
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <div
                    className="chy-footer-2-team wow slideInRight"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    data-aos-offset="200"
                  >
                    <a
                      data-fancybox="gallery"
                      data-src={team1}
                      className="item popup_img img-cover"
                    >
                      <img src={team1} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                    <a
                      data-fancybox="gallery"
                      data-src={team2}
                      className="item popup_img img-cover"
                    >
                      <img src={team2} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                    <a
                      data-fancybox="gallery"
                      data-src={team3}
                      className="item popup_img img-cover"
                    >
                      <img src={team3} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                    <a
                      data-fancybox="gallery"
                      data-src={team4}
                      className="item popup_img img-cover"
                    >
                      <img src={team4} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                  </div>
                </Fancybox>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterTwo