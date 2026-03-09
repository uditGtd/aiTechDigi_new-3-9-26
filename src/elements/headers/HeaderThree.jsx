import React from 'react'
import logo from '../../assets/img/logo/logo-color-2.png'
import { Link, NavLink } from 'react-router-dom';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch, faAngleLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
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
import { menu_2 } from '../../data/menu/menu';

function HeaderThree() {

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
    const dropdown = e.target.parentElement;
    dropdown.classList.toggle("active")
  }

  // handle mobile sub dropdoen menu toggle
  const handleMobMenu2 = (e) => {
    const dropdown = e.target.parentElement;
    dropdown.classList.toggle("active2")
  }

  return (
    <>
      {/* desktop */}
      <header className="chy-header-3-area">
        <div className="chy-header-3-wrap">
          {/* header-logo */}
          <Link
            className="d-block chy-logo"
          >
            <img src={logo} alt="" />
          </Link>

          {/* menu */}
          <div className="chy-main-menu-3 d-none d-lg-block">
            <nav className="main-navigation clearfix ul-li">
              
              <ul id="main-nav" className="nav navbar-nav clearfix">

                  {/* menu data map */}
                  {menu_2.map((item)=> <li key={item.id} className={item.dropdown && 'dropdown'}>
                    {item.link ? <NavLink to={item.link}>{item.name}</NavLink> : <a>{item.name}</a>}

                    {item?.dropdown && <ul className="dropdown-menu clearfix">

                      {item.dropdown.map((dropItem, index) =>
                        <li key={index} className={dropItem.dropdown && 'dropdown'}>
                          {dropItem.link ? <NavLink to={dropItem.link}>{dropItem.name}</NavLink> : <a>{dropItem.name}</a>}
                          {dropItem?.dropdown && <ul className="dropdown-menu clearfix">

                          <li>
                            {dropItem.dropdown.map((dropItem2, index) => <NavLink key={index} to={dropItem2.link}>{dropItem2.name}</NavLink>)}
                          </li>

                        </ul>}
                      </li>)}
                    </ul>}
                  </li>
                  )}
                  
              </ul>

            </nav>
          </div>

          <div className="chy-header-3-action-btn">
            <div className="chy-call-1-btn-wrap">
              <a
                aria-label="link"
                href="tel:+193-940-9845"
                className="chy-call-1-icon"
              >
                <BiSolidPhoneCall />
              </a>
              <div className="chy-call-1-content">
                <span className="text chy-heading-1">give us a call</span>
                <a className="phone chy-heading-1" href="tel:+193-940-9845">
                  +193-940-9845
                </a>
              </div>
            </div>

            {/* pr-btn */}
            <Link className="chy-pr-btn-4 d-sm-block d-none">
              get started
            </Link>

            <div className="chy-menu-btn-1 d-lg-none" id="menuToggle">
              <FontAwesomeIcon icon={faBars} className="icon-1" />
              <FontAwesomeIcon icon={faAngleLeft} className="icon-2" />
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
            <form>
              <input type="text" name="search" placeholder="Keywords" />
              <button type="button" aria-label="search">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>

          <div className="fullpage-content-wrap">
            {/* mobile-menu-list  */}
            <nav className="mobile-main-navigation clearfix ul-li">
                <ul id="m-main-nav" className="nav navbar-nav clearfix">
                
                {
                  menu_2.map((item) =>
                    
                    <li key={item.id} className={item.dropdown && 'dropdown'} onClick={(e)=> handleMobMenu(e)}>
                        
                          {item.dropdown && <>
                            <span>{item.name}</span>
                            <div className="dropdown-btn">
                              <FontAwesomeIcon icon={faCaretRight} />
                            </div>
                          </>}

                          {!item.dropdown && <NavLink to={item.link}>{item.name}</NavLink>}

                          {item?.dropdown && <ul className="dropdown-menu clearfix">
                                
                            {
                              item.dropdown.map((dropItem, index) =>

                                <li key={index} className={dropItem.dropdown && 'dropdown'} onClick={(e)=> handleMobMenu2(e)}>

                                  {dropItem.dropdown && <>
                                    <span>{dropItem.name}</span>
                                    <div className="dropdown-btn">
                                      <FontAwesomeIcon icon={faCaretRight} />
                                    </div>
                                  </>}

                                  {!dropItem.dropdown && <NavLink to={dropItem.link}>{dropItem.name}</NavLink>}
                                  
                                  {dropItem?.dropdown && <ul className="dropdown-menu clearfix">

                                    <li>
                                      {dropItem.dropdown.map((dropItem2, index) => <NavLink key={index} to={dropItem2.link}>{dropItem2.name}</NavLink>)}
                                    </li>

                                  </ul>}
                                </li>

                              )
                            }
                          
                          </ul>}
                    
                        </li>

                  )
                }
                    
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

export default HeaderThree