import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../../assets/img/hero/h2-bg-img-1.png'
import "@flaticon/flaticon-uicons/css/all/all.css";
import img1 from "../../assets/img/hero/h2-img-1.png";
import freamImg from "../../assets/img/hero/h2-il-frame.png";
import IlImg1 from "../../assets/img/hero/h2-il-1.png";
import IlImg2 from "../../assets/img/hero/h2-il-2.png";
import IlImg3 from "../../assets/img/hero/h2-il-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HeroTwo() {
  return (
    <div
      className="chy-hero-2-area fix "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container chy-container-1 ">
        <div className="chy-hero-2-wrap ">
          <div className="chy-hero-2-slider">
            <Swiper
              loop={true}
              spaceBetween={0}
              speed={500}
              slidesPerView={1}
              effect={"fade"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".chy_hero_2_next",
                prevEl: ".chy_hero_2_prev",
              }}
              modules={[Autoplay, Navigation, EffectFade]}
              className="swiper-container chy_hero_2_active"
            >
              <div className="swiper-wrapper">

                {/* single-item */}
                <SwiperSlide className="swiper-slide">
                  <div className="chy-hero-2-item">
                    <div className="chy-hero-2-item-img">
                      <div className="main-img">
                        <img className="person-img" src={img1} alt="" height={500} />
                        <img className="il-frame" src={freamImg} alt="" />
                      </div>

                      <img src={IlImg1} className="il-img-1" alt="" />
                      <img src={IlImg2} className="il-img-2" alt="" />
                      <img src={IlImg3} className="il-img-3" alt="" />
                    </div>
                    <div className="chy-hero-2-item-content">
                      <h3 className="chy-heading-1 hero-2-subtitle">
                        marketing consultings
                      </h3>
                      <h1 className="chy-heading-1 hero-2-title">
                        Innovative{" "}
                      </h1>
                      <h1 className="chy-heading-1 hero-2-title-2">
                        Solutions
                      </h1>
                      <p className="chy-para-1 hero-2-disc">
                        GotechDigi is a leading digital marketing agency based in Naraina Vihar, Delhi.
                        We deliver customized marketing solutions using innovative strategies and advanced technology to achieve measurable results.
                      </p>
                      <Link to="/about" className="chy-pr-btn-3">
                        <span className="text">explore more</span>
                        <FontAwesomeIcon icon={faLongArrowRight} />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* single-item */}
                <SwiperSlide className="swiper-slide">
                  <div className="chy-hero-2-item">
                    <div className="chy-hero-2-item-img">
                      <div className="main-img">
                        <img className="person-img" src={img1} alt="" height={500} />
                        <img className="il-frame" src={freamImg} alt="" />
                      </div>

                      <img src={IlImg1} className="il-img-1" alt="" />
                      <img src={IlImg2} className="il-img-2" alt="" />
                      <img src={IlImg3} className="il-img-3" alt="" />
                    </div>
                    <div className="chy-hero-2-item-content">
                      <h3 className="chy-heading-1 hero-2-subtitle">
                        marketing consultings
                      </h3>
                      <h1 className="chy-heading-1 hero-2-title">
                        Innovative{" "}
                      </h1>
                      <h1 className="chy-heading-1 hero-2-title-2">
                        Solutions
                      </h1>
                      <p className="chy-para-1 hero-2-disc">
                       Our expert team delivers data-driven digital strategies across SEO, PPC, Social Media, and Content Marketing, focusing on transparency and long-term growth to help businesses achieve lasting success.
                      </p>
                      <Link to="/about" className="chy-pr-btn-3">
                        <span className="text">explore more</span>
                        <FontAwesomeIcon icon={faLongArrowRight} />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

              </div>
            </Swiper>

            <div className="chy-hero-2-btn">
              <div className="chy_hero_2_prev">
                <FontAwesomeIcon icon={faLongArrowLeft} />
              </div>
              <div className="chy_hero_2_next">
                <FontAwesomeIcon icon={faLongArrowRight} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroTwo