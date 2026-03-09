import React from 'react'
import bgImg from "../../assets/img/footer/f4-bg-1.png";
import img1 from "../../assets/img/footer/f4-il-1.png";
import logo from "../../assets/img/logo/new.png";
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterFour() {

  useGSAP(() => {
    // For each images with class "animate-image" on pagefs
    gsap.utils.toArray(".chy-footer-4-il-img").forEach((el, index) => {
      let chyScl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 2,
          start: "top 80%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      chyScl
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { xPercent: -100 },
          { xPercent: 0, duration: 1, immediateRender: false }
        );
    });
  });

  return (
    <footer
      className="chy-footer-4-area fix bg-default pt-120"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container chy-container-2">
        <div className="row">
          <div className="col-xl-4 col-lg-3">
            <div className="chy-footer-4-il-img">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="col-xl-8 col-lg-9">
            <div className="chy-footer-4-widget-wrap">

              {/* single-widget */}
              <div className="chy-footer-4-widget full-width">
                <Link className="d-block footer-logo mb-25" href="home-4.html">
                  <img src={logo} alt="" />
                </Link>
                <p className="chy-para-4 disc">
                  Duis torquent ipsum ligula est eleifend sagitti quisque
                  phasellus ultricies pede lacinia eget taciti bibendum
                  himenaeos curabitur accum san egestas mollis mole.
                </p>
              </div>

              {/* single-widget */}
              <div className="chy-footer-4-widget">
                <h4 className="chy-heading-2 chy-footer-4-widget-title">
                  Companies
                </h4>
                <ul className="chy-footer-4-menu">
                  <li>
                    <Link aria-label="footer menu" >
                      Home <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      About Us <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      Our Services <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      News & Blog <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      Contact us <FiArrowUpRight />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* single-widget */}
              <div className="chy-footer-4-widget">
                <h4 className="chy-heading-2 chy-footer-4-widget-title">
                  Other Links
                </h4>
                <ul className="chy-footer-4-menu">
                  <li>
                    <Link aria-label="footer menu" >
                      Our Portfolio <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      Our Pricing <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      Team Member <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      Testimonials <FiArrowUpRight />
                    </Link>
                  </li>
                  <li>
                    <Link aria-label="footer menu" >
                      FAQs <FiArrowUpRight />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* single-widget */}
              <div className="chy-footer-4-widget">
                <h4 className="chy-heading-2 chy-footer-4-widget-title">
                  Contact Us
                </h4>
                <ul className="chy-footer-4-contact mb-30">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 30 Commercila Road
                    Fratton, Australia
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} /> 1-888-452-1505
                  </li>
                </ul>
                <ul className="chy-footer-4-opening">
                  <li className="title">Open Hours:</li>
                  <li>Mon - Sat: 8 am - 5 pm Sunday: CLOSED</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="chy-footer-4-bottom">
              <span className="chy-heading-2 copyright">
                © 2024 Themexriver All Rights Reserved.
              </span>
              <ul className="menu">
                <li>
                  <Link aria-label="footer menu" >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link aria-label="footer menu" >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link aria-label="footer menu" >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterFour