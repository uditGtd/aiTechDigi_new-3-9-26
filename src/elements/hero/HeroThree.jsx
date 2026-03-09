import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import image1 from "../../assets/img/hero/h3-img-1.png";
import image2 from "../../assets/img/hero/h3-img-2.png";
import imageIl1 from "../../assets/img/hero/h3-il-1.png";
import imageIl2 from "../../assets/img/hero/h3-il-2.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroThree() {

  // slider data 
  const data = [
    {
      id: "01",
      title1: "Innovative",
      title2: "Solutions",
      subtitle: "marketing consultings",
      image: image1,
      imageIl1,
      imageIl2,
    },
    {
      id: "02",
      title1: "Innovative",
      title2: "Solutions",
      subtitle: "marketing consultings",
      image: image2,
      imageIl1,
      imageIl2,
    },
  ]

  return (
    <div className="chy-hero-3-area fix">
      <div className="chy-hero-3-slider">

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

            {/* hero data map  */}
            {data.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="chy-hero-3-item-wrap">
                  <div className="bg-img img-cover">
                    <img src={`${image1}`} alt="" />
                  </div>
                  <div className="container chy-container-1">
                    <div className="chy-hero-3-item ">
                      <img src={item.imageIl1} className="il-img-1" alt="" />
                      <img src={item.imageIl2} className="il-img-2" alt="" />
                      <div className="chy-hero-3-item-content">
                        <h3 className="chy-heading-1 hero-3-subtitle">
                          {item.subtitle}
                        </h3>
                        <h1 className="chy-heading-1 hero-3-title">
                            {item.title1}{" "}
                        </h1>
                        <h1 className="chy-heading-1 hero-3-title-2">
                          {item.title2}
                        </h1>
                        <div className="btn-position">
                          <Link to="/about" className="chy-pr-btn-4">
                            get started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

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
  )
}

export default HeroThree