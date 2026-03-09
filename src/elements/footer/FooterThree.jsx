import React from 'react'
import logo from "../../assets/img/logo/logo-3.png";
import image1 from "../../assets/img/footer/f2-team-1.png";
import image2 from "../../assets/img/footer/f2-team-2.png";
import image3 from "../../assets/img/footer/f2-team-3.png";
import image4 from "../../assets/img/footer/f2-team-4.png";
import '@flaticon/flaticon-uicons/css/all/all.css'
import { FiArrowUpRight } from 'react-icons/fi';
import { IoImagesOutline } from 'react-icons/io5';
import Fancybox from '../../components/utiles/Fancybox';
import { Link } from 'react-router-dom';

function FooterThree() {
  return (
    <footer className="chy-footer-3-area pt-110 pb-30">
      <div className="container chy-container-1">
        <div className="chy-footer-3-top">

          {/* single-item */}
          <div className="chy-footer-3-widget">
            <Link aria-label="link" className="footer-logo" to="/home-03">
              <img src={logo} alt="" />
            </Link>
            <p className="chy-para-3 disc">
              Made using clean, non-toxic ingredients, our products are signed
              for everyone. Made using clean, non-toxic ngredients, our products
              are signed
            </p>

            <ul className="chy-footer-3-social">
              <li>
                <Link>
                  <i className="fi fi-brands-facebook"></i> facebook
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fi fi-brands-instagram"></i> instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* single-item */}
          <div className="chy-footer-3-widget">
            <ul className="chy-footer-3-menu">
              <li>
                <Link>
                  <FiArrowUpRight /> recent work
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> product gallery
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> about us
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> product gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* single-item */}
          <div className="chy-footer-3-widget">
            <ul className="chy-footer-3-menu">
              <li>
                <Link>
                  <FiArrowUpRight /> branding
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> web & interactive
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> branded marchandise
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> seo & interactive
                </Link>
              </li>
            </ul>
          </div>

          {/* single-item */}
          <div className="chy-footer-3-widget">
            <ul className="chy-footer-3-menu">
              <li>
                <Link>
                  <FiArrowUpRight /> our history
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> help & support
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> our awards
                </Link>
              </li>
              <li>
                <Link>
                  <FiArrowUpRight /> help & support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="chy-footer-3-bottom">
          {/* single-widget */}
          <div className="chy-footer-3-widget">
            <h4 className="chy-heading-1 chy-footer-3-widget-title">newsletter</h4>
            <form className="chy-footer-3-form">
              <input type="text" placeholder="email address" />
              <button type="submit">
                subsrcribe
              </button>
            </form>
          </div>

          {/* single-widget */}
          <div className="chy-footer-3-widget">
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <div className="chy-footer-2-team">
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={image1}
                  className="item popup_img img-cover"
                >
                  <img src={image1} alt="" />
                  <span className="icon">
                    <IoImagesOutline />
                  </span>
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={image2}
                  className="item popup_img img-cover"
                >
                  <img src={image2} alt="" />
                  <span className="icon">
                    <IoImagesOutline />
                  </span>
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={image3}
                  className="item popup_img img-cover"
                >
                  <img src={image3} alt="" />
                  <span className="icon">
                    <IoImagesOutline />
                  </span>
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={image4}
                  className="item popup_img img-cover"
                >
                  <img src={image4} alt="" />
                  <span className="icon">
                    <IoImagesOutline />
                  </span>
                </a>
              </div>
            </Fancybox>
          </div>

          {/* single-widget */}
          <div className="chy-footer-3-widget">
            <ul className="chy-footer-3-contact">
              <li>
                <a href="tel:(021)666 888 0000">
                  <i className="fi fi-sr-phone-call"></i>( 021 ) 666 888 0000
                </a>
              </li>
              <li>
                <a href="mailto:needhelp@company.com">
                  <i className="fi fi-sr-envelope"></i>
                  needhelp@company.com
                </a>
              </li>
            </ul>
          </div>

          {/* single-widget */}
          <div className="chy-footer-3-widget full-width">
            <h4 className="chy-heading-1 copyright-link text-center">
              <span>© copyright 2024.</span> all rights reserved
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterThree