import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBars, faCaretRight, faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo2 from "../../assets/img/logo/ai-tech-logo-white.png";
import img1 from "../../assets/img/project/p1-img-1.png";
import img2 from "../../assets/img/project/p1-img-2.png";
import img3 from "../../assets/img/project/p1-img-3.png";
import img4 from "../../assets/img/project/p1-img-4.png";
import img5 from "../../assets/img/project/p3-img-3.png";
import img6 from "../../assets/img/project/p3-img-2.png";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Fancybox from "../../components/utiles/Fancybox";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

// --- DATA FROM HEADER TWO ---
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
  { name: "Market Analysis Research", link: "/service-mar-details" },
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

// --- STYLES FOR SCROLLABLE DROPDOWN ---
const dropdownScrollStyle = {
    maxHeight: "300px",
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: "5px",
    
};

const dropdownLinkStyle = {
    fontSize: "16px", // Thoda adjust kiya taaki fit ho
    padding: "8px 15px",
    paddingLeft:"40px",
    lineHeight: "1.4",
    display: "block"
};


function HeaderFive() {

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

  // handle mobile dropdoen menu toggle
  const handleMobMenu = (e) => {
    // e.stopPropagation(); // Optional: prevent bubble up if needed
    const dropdown = e.currentTarget; // Changed to currentTarget for safety
    dropdown.classList.toggle("active")
  }

  // handle mobile sub dropdoen menu toggle
  const handleMobMenu2 = (e) => {
    const dropdown = e.target.parentElement;
    dropdown.classList.toggle("active2")
  }


  return (
    <>
      {/* header desktop */}
      <header className="chy-header-1-area has-inner-page transparent-header">
        <div className="container chy-container-1">
          <div className="chy-header-1-wrap">
            <div className="left">
              <div className="chy-menu-btn-1 open_mobile_menu" id="menuToggle">
                <FontAwesomeIcon className="icon-1" icon={faBars} />
                <FontAwesomeIcon className="icon-2" icon={faAngleLeft} />
              </div>

              <div className="chy-main-menu-1 d-none d-lg-block">
                <nav className="main-navigation clearfix ul-li">

                  <ul id="main-nav" className="nav navbar-nav clearfix">

                    {/* --- UPDATED MENU DATA HERE --- */}
                    
                    {/* HOME */}
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    {/* ABOUT */}
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>

                    {/* SERVICES DROPDOWN */}
                    <li className="dropdown">
                        <NavLink to="/services">Services</NavLink>
                        <ul className="dropdown-menu clearfix" style={dropdownScrollStyle}>
                            {servicesList.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.link} style={dropdownLinkStyle}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* PAGES DROPDOWN */}
                    <li className="dropdown">
                        <NavLink to="/project">Pages</NavLink>
                        <ul className="dropdown-menu clearfix" style={dropdownScrollStyle}>
                            {pagesList.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.link} style={dropdownLinkStyle}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* CONTACT */}
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>

                  </ul>

                </nav>
              </div>
            </div>

            <Link to="/" className="d-block chy-logo">
              <img src={logo2} alt="" height={50} />
            </Link>

          </div>
        </div>
      </header>
      

      {/* header mobile */}
      <div className="fullpage-menu">
        <div className="fullpage-menu-inner">
          <div className="menu-bg">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
          </div>

          <div className="fullpage-menu-logo-wrap">
            <Link to="/"
              className="menu-logo d-block"
            >
              <img src={logo2} alt="" height={50}/>
            </Link>
            <FontAwesomeIcon
              id="menuToggle2"
              className="fullpage-menu-close"
              icon={faTimes}
            />
          </div>

          <div className="mobile-search-bar">
            <form>
              <input type="text" name="search" placeholder="Keywords" />
              <button type="button" aria-label="search">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>

          <div className="fullpage-content-wrap">

            <nav className="mobile-main-navigation  clearfix ul-li">
                <ul id="m-main-nav" className="nav navbar-nav clearfix">
                    
                    {/* --- MOBILE UPDATED DATA --- */}

                    {/* HOME */}
                    <li><NavLink to="/">Home</NavLink></li>

                    {/* ABOUT */}
                    <li><NavLink to="/about">About</NavLink></li>

                    {/* SERVICES DROPDOWN MOBILE */}
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

                    {/* PAGES DROPDOWN MOBILE */}
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

                    {/* CONTACT */}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    
              </ul>
            </nav>

            {/* image gallery */}
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <div className="fullpage-menu-gellary">
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={img1}
                  className="item img-cover popup_img"
                >
                  <img src={img1} alt="" />
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={img2}
                  className="item img-cover popup_img"
                >
                  <img src={img2} alt="" />
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={img3}
                  className="item img-cover popup_img"
                >
                  <img src={img3} alt="" />
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={img4}
                  className="item img-cover popup_img"
                >
                  <img src={img4} alt="" />
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={img5}
                  className="item img-cover popup_img"
                >
                  <img src={img5} alt="" />
                </a>
                <a
                  data-fancybox="footer-gallery-3"
                  data-src={img6}
                  className="item img-cover popup_img"
                >
                  <img src={img6} alt="" />
                </a>
              </div>
            </Fancybox>
          </div>

          {/* social media */}
          <ul className="full-page-socail-link text-center pt-50">
            <li>
              <Link>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderFive;