import React, { useRef, useState } from 'react'
import logo from '../../assets/img/logo/ai-tech-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faAngleLeft,
  faAngleDown,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo2 from "../../assets/img/logo/new.png";
import img1 from "../../assets/img/project/p1-img-1.png";
import img2 from "../../assets/img/project/p1-img-2.png";
import img3 from "../../assets/img/project/p1-img-3.png";
import img4 from "../../assets/img/project/p1-img-4.png";
import img5 from "../../assets/img/project/p3-img-3.png";
import img6 from "../../assets/img/project/p3-img-2.png";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Fancybox from "../../components/utiles/Fancybox";
import SearchPopup from '../../components/search-popup/SearchPopup';

// --- DATA ---
const servicesList = [
  { name: "Search Engine Optimization (SEO)", link: "/service-seo-details" },
  { name: "Pay-Per-Click", link: "/service-ppc-details" },
  { name: "Social Media Marketing", link: "/service-smm-details" },
  { name: "Content Marketing", link: "/service-cm-details" },
  { name: "Email Marketing", link: "/service-em-details" },
  { name: "Affiliate Marketing", link: "/service-am-details" },
  { name: "Influencer Marketing", link: "/service-im-details" },
  { name: "Conversion Rate Optimization (CRO)", link: "/service-cro-details" },
  { name: "Web Development & Design", link: "/service-wdd-details" },
  { name: "Mobile App Marketing", link: "/service-mam-details" },
  { name: "Online Reputation Management (ORM)", link: "/service-orm-details" },
  { name: "Market Analysis Research", link: "/service-orm-details" },
  { name: "Brand Strategy Design", link: "/service-bsd-details" },
  { name: "Public Relations", link: "/service-pr-details" },
  { name: "Event Marketing", link: "/service-eventm-details" },
  { name: "Graphic Design Service", link: "/service-gds-details" },
  { name: "E-commerce Solution", link: "/service-ecom-details" },
  { name: "Marketing Automation", link: "/service-ma-details" },
  { name: "Customer Relationship Management (CRM) Solutions", link: "/service-crm-details" },
  { name: "Voice Search Optimization", link: "/service-vso-details" },
];

const pagesList = [
  { name: "Team", link: "/team" },
  { name: "Projects", link: "/project" },
  { name: "Careers", link: "/career" },
  { name: "FAQs", link: "/faqs" },
  { name: "Our Clients", link: "/our-clients" },
  { name: "Prices", link: "/pricing" },
  { name: "Process", link: "/process" },
  { name: "Blogs", link: "/blog" },
];

// --- STYLES ---
// Ye style dropdown ko scrollable banayega aur height fix karega
const dropdownScrollStyle = {
    maxHeight: "300px",  // Height fix (aap ise kam/jyada kar sakte hain)
    overflowY: "auto",   // Scroll enable
    overflowX: "hidden", // Horizontal scroll hide
    paddingRight: "5px"  // Scrollbar ke liye thoda space
};

// Ye style font size chota karega
const dropdownLinkStyle = {
    fontSize: "16px",    // Font size small
    padding: "8px 15px", // Padding adjust for compact look
    lineHeight: "1.4",
    paddingLeft:"40px",
    display: "block"
};

function HeaderTwo() {

  // gsap animation 
  useGSAP(() => {
    var menuToggle = document.getElementById("menuToggle");
    var menuToggle2 = document.getElementById("menuToggle2");

    var menuBar = gsap.timeline();

    menuBar.to(
      ".chy-menu-btn-1 ",
      0.5,
      {
        background: "#6F9EDE",
      },
      "start"
    );

    menuBar.reverse();

    var menubgline = gsap.timeline({ paused: true });

    menubgline.to(".fullpage-menu", {
      duration: 0,
      display: "block",
      ease: "Expo.easeInOut",
    });
    menubgline.to(".menu-bg span", {
      duration: 0.5,
      width: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });
    menubgline.to(".menu-logo", {
      x: 0,
      opacity: 1,
      ease: "Expo.easeInOut",
    });
    menubgline.to(".mobile-main-navigation , .mobile-search-bar", {
      opacity: 1,
      y: 0,
      ease: "Expo.easeInOut",
    });

    menubgline.to(".fullpage-menu-gellary .item", {
      duration: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });

    menubgline.to(".full-page-socail-link li", {
      opacity: 1,
      y: 1,
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });
    menubgline.to(".fullpage-menu-close", {
      duration: 0,
      x: 0,
      rotate: 0,
      opacity: 1,
      ease: "Expo.easeInOut",
    });

    menubgline.reverse();

    menuToggle.addEventListener("click", function () {
      menubgline.reversed(!menubgline.reversed());
    });

    menuToggle2.addEventListener("click", function () {
      menubgline.reversed(!menubgline.reversed());
    });
  });

  // handle mobile dropdown menu toggle
  const handleMobMenu = (e) => {
    const dropdown = e.currentTarget;
    dropdown.classList.toggle("active");
  }

  const [btnActive, setBtnActive] = useState(false)

  return (
    <>
      <SearchPopup btnActive={btnActive} setBtnActive={setBtnActive} />

      {/* desktop */}
      <header className="chy-header-2-area transparent-header">
        <div className="chy-header-2-wrap">
          <Link className="d-block chy-logo">
            <img src={logo} alt="" height={60} />
          </Link>

          <div className="chy-main-menu-1 has-menu-2 d-none d-lg-block">
            <nav className="main-navigation clearfix ul-li">
              
              <ul id="main-nav" className="nav navbar-nav clearfix">

                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  
                  {/* SERVICES DROPDOWN (Scrollable & Small Font) */}
                  <li className="dropdown menu-item-has-children">
                    <NavLink to="/services">
                        Services
                    </NavLink>
                    <ul className="dropdown-menu clearfix" style={dropdownScrollStyle}>
                        {servicesList.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link} style={dropdownLinkStyle}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                  </li>

                  {/* PAGES DROPDOWN (Scrollable & Small Font) */}
                  <li className="dropdown menu-item-has-children">
                    <NavLink to="/project">
                        Pages
                    </NavLink>
                    <ul className="dropdown-menu clearfix" style={dropdownScrollStyle}>
                        {pagesList.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link} style={dropdownLinkStyle}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                  </li>

                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
              </ul>

            </nav>
          </div>

          <div className="chy-header-2-action-btn">
            {/* <button
              className="chy-search-btn-1 d-xl-flex d-none search_btn_toggle"
              onClick={()=> setBtnActive(true)}
            >
              <i className="fi fi-rr-search"></i>
            </button> */}

            <Link to="/contact" className="chy-pr-btn-2 d-sm-block d-none" href="#">
              Get a Quote
            </Link>

            <div className="chy-menu-btn-1 d-lg-none" id="menuToggle">
              <FontAwesomeIcon icon={faBars} className='icon-1' />
              <FontAwesomeIcon icon={faAngleLeft} className='icon-2' />
            </div>
          </div>
        </div>
      </header>

      {/* mobile */}
      <div className="fullpage-menu">
        <div className="fullpage-menu-inner">
          <div className="menu-bg">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
          </div>

          <div className="fullpage-menu-logo-wrap">
            <Link
              className="menu-logo d-block"
            >
              <img src={logo2} alt="" />
            </Link>
            <FontAwesomeIcon
              id="menuToggle2"
              className="fullpage-menu-close"
              icon={faTimes}
            />
          </div>

          <div className="mobile-search-bar">
            {/* <form>
              <input type="text" name="search" placeholder="Keywords" />
              <button type="button" aria-label="search">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form> */}
          </div>

          <div className="fullpage-content-wrap">
            <nav className="mobile-main-navigation  clearfix ul-li">
                <ul id="m-main-nav" className="nav navbar-nav clearfix">
                    
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    
                    {/* MOBILE SERVICES */}
                    <li className="dropdown" onClick={(e) => handleMobMenu(e)}>
                        <span>Services</span>
                        <div className="dropdown-btn">
                            <FontAwesomeIcon icon={faCaretRight} />
                        </div>
                        <ul className="dropdown-menu clearfix">
                            {servicesList.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.link}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* MOBILE PAGES */}
                    <li className="dropdown" onClick={(e) => handleMobMenu(e)}>
                        <span>Pages</span>
                        <div className="dropdown-btn">
                            <FontAwesomeIcon icon={faCaretRight} />
                        </div>
                        <ul className="dropdown-menu clearfix">
                            {pagesList.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.link}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                  
              </ul>
            </nav>

            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <div className="fullpage-menu-gellary">
                <a data-fancybox="footer-gallery-3" data-src={img1} className="item img-cover popup_img">
                  <img src={img1} alt="" />
                </a>
                <a data-fancybox="footer-gallery-3" data-src={img2} className="item img-cover popup_img">
                  <img src={img2} alt="" />
                </a>
                <a data-fancybox="footer-gallery-3" data-src={img3} className="item img-cover popup_img">
                  <img src={img3} alt="" />
                </a>
                <a data-fancybox="footer-gallery-3" data-src={img4} className="item img-cover popup_img">
                  <img src={img4} alt="" />
                </a>
                <a data-fancybox="footer-gallery-3" data-src={img5} className="item img-cover popup_img">
                  <img src={img5} alt="" />
                </a>
                <a data-fancybox="footer-gallery-3" data-src={img6} className="item img-cover popup_img">
                  <img src={img6} alt="" />
                </a>
              </div>
            </Fancybox>
          </div>
          
          <ul className="full-page-socail-link text-center pt-50">
            <li>
              <a href="https://www.facebook.com/gotechdigi/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/?next=%2Fgotechdigi&source=omni_redirect" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/company/gotechdigi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@gotech_digi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
}

export default HeaderTwo