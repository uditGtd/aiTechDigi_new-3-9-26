import React from 'react'
import bgImg1 from "../../assets/img/price/p1-bg-img-1.png";
import img1 from "../../assets/img/price/p1-img-1.png";
import img2 from "../../assets/img/price/p1-img-2.png";
import img3 from "../../assets/img/price/p1-img-3.png";
import imgIcon1 from "../../assets/img/price/p1-il-1.png";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from '../../components/title-animation/SplitTextAnimation';

function PricingOne() {

  // data
  const data = [
    {
      id: "01",
      title: "We'll Help You Get Started",
      disc: "Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances",
      priceType: "monthly price",
      price: "16.32",
      image: img1,
    },
    {
      id: "02",
      title: "We'll Help You Get Started",
      disc: "Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances",
      priceType: "monthly price",
      price: "56.32",
      image: img1,
    },
    {
      id: "03",
      title: "We'll Help You Get Started",
      disc: "Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances",
      priceType: "monthly price",
      price: "99.32",
      image: img1,
    },
    {
      id: "04",
      title: "We'll Help You Get Started",
      disc: "Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances",
      priceType: "monthly price",
      price: "109.32",
      image: img1,
    },
  ]

  useGSAP(() => {
    // add active class
    gsap.to(".chy-price-1-area", {
      scrollTrigger: {
        trigger: ".chy-price-1-area",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
        toggleClass: "active",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    // zoom out animatin 
    gsap.utils.toArray(".chy-zoomout").forEach((el, index) => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 85%",
          end: "buttom 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl6
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { scale: 1 },
          { scale: 0, duration: 1, immediateRender: false }
        );
    });
  });

  return (
    <div
      className="chy-price-1-area bg-default pt-135 pb-105 chy-class-add fix"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <div className="container chy-contaienr-1">
        <div className="swiper chy-price-1-slider mb-95">
          <Swiper
            loop={true}
            centeredSlides={true}
            spaceBetween={0}
            speed={800}
            slidesPerView={1}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            pagination={{
              el: ".chy-price-1-pagination",
              type: "bullets",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              clickable: true,
            }}
            className="swiper-container chy_price_1_active"
          >
            <div className="swiper-wrapper">

              {/* data map  */}
              
              {
                data.map((item)=>
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="chy-price-1-slider-item">
                      <div className="left">
                        <div className="chy-price-1-slider-item-img">
                          <img src={item.image} alt="" />
                          <div className="chy_price_1_next">
                            <i className="fas fa-arrows-alt-h"></i>
                          </div>
                        </div>
                      </div>
                      <div className="transform-orgn">
                        <div className="right">
                          <div className="section-title-wrap mb-25">
                            <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                              <SplitText text={item.title} />
                            </h2>
                            <p className="chy-section-para-1">
                              {item.disc}
                            </p>
                          </div>
                          <div className="innter-div">
                            <div className="inner-div-left">
                              <div className="chy-price-1-pricing mb-40">
                                <h4 className="chy-heading-1 dollar">${item.price}</h4>
                                <p className="chy-para-1 monthly">
                                  {item.priceType}
                                </p>
                              </div>
                              <Link to="/contact-us" className="chy-pr-btn-1 ">
                                <span className="text">explore more</span>
                                <span className="icon">
                                  <FontAwesomeIcon icon={faRightLong} />
                                </span>
                              </Link>
                            </div>
                            <div className="inner-div-right">
                              <img src={img2} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }

            </div>
          </Swiper>
          <div className="chy-price-1-pagination"></div>
        </div>
        <div className="chy-price-1-animation-line mb-70">
          <img src={imgIcon1} className="icon" alt="" />
        </div>

        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-7">
            <div className="chy-price-1-content">
              <div className="section-title-wrap mb-30">
                <h2 className="chy-title-1 has-55  chy-split-in-right chy-split-text">
                  <SplitText text="Better Ship Faster Avoid Unauthorized" />
                </h2>
                <p
                  className="chy-section-para-1"
                  data-aos="fade-up"
                  data-aos-offset="5"
                  data-aos-duration="3000"
                  data-aos-once="true"
                >
                  Every pleasure is to be welcomed and every pain avoided.
                  certain circumstances and owing to the claims welcomed and
                  every pain avoided certain circumstances
                </p>
              </div>
              <Link to="/about"
                className="chy-pr-btn-1"
                data-aos="fade-up"
                data-aos-offset="5"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                <span className="text">explore more</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faRightLong} />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="chy-price-1-img img-cover">
              <span className="animation chy-zoomout"></span>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PricingOne