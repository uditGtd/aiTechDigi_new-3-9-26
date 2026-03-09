import React from 'react'
import bgImg1 from "../../assets/img/project/p1-bg-img-1.png";
import img1 from '../../assets/img/project/p1-img-1.png';
import img2 from '../../assets/img/project/p1-img-2.png';
import img3 from '../../assets/img/project/p1-img-3.png';
import img4 from '../../assets/img/project/p1-img-4.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Link } from 'react-router-dom';
import SplitText from '../../components/title-animation/SplitTextAnimation';

function ProjectOne() {

  // data
  const data = [
    {
      id: "01",
      image: img1,
      subtitle: "Custom Website Design",
      title: "Rising Stars Obscure",
    },
    {
      id: "02",
      image: img2,
      subtitle: "SEO Mastery",
      title: "Rising Stars Obscure",
    },
    {
      id: "03",
      image: img3,
      subtitle: "Data-Driven Advertising",
      title: "Rising Stars Obscure",
    },
    {
      id: "04",
      image: img4,
      subtitle: "Ongoing Support",
      title: "Rising Stars Obscure",
    },
    {
      id: "05",
      image: img3,
      subtitle: "cultural festival",
      title: "Rising Stars Obscure",
    },
    {
      id: "06",
      image: img2,
      subtitle: "cultural festival",
      title: "Rising Stars Obscure",
    },
  ]
  return (
    <div
      className="chy-project-1-area bg-default pt-120 pb-90 fix"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <div className="container chy-container-1">
        <div className="section-title-wrap mb-30 text-center">
          <h5
            className="chy-subtitle-1"
            data-aos="fade-down"
            data-aos-offset="5"
            data-aos-duration="3000"
            data-aos-once="true"
          >
            Our Work
          </h5>
          <h2 className="chy-title-1  chy-split-in-right chy-split-text">
            <SplitText text="AI Solutions Tailored to Your Industry" />
          </h2>
        </div>
      </div>

      {/* slider */}
      <div className="chy-project-1-slider">
        <Swiper
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: ".chy_project_1_next",
            prevEl: ".chy_project_1_prev",
          }}
          spaceBetween={0}
          speed={800}
          slidesPerView={3}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            0: {
              width: 0,
              slidesPerView: 1,
            },
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
            1400: {
              width: 1400,
              slidesPerView: 3,
            },
            1600: {
              width: 1600,
              slidesPerView: 4,
            },
            1900: {
              width: 1900,
              slidesPerView: 4,
            },
          }}
          className="swiper-container fix chy_project_1_active"
        >
          <div className="swiper-wrapper">

            {/* single-item */}
            {
              data.map((item)=> 
                <SwiperSlide key={item.id}>
                  <div className="chy-project-1-item img-cover">
                    <img src={item.image} alt="" />
                    <div className="content-wrap">
                      <span className="chy-heading-1 subtitle">
                        {item.subtitle}
                      </span>
                      <h4 className="chy-heading-1 title">
                        <Link to="/project-details" className="chy-project-1-link">
                          {item.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              )
            }

          </div>
        </Swiper>

        {/* slider-btn */}
        <div className="chy-project-1-slider-btn">
          <div className="chy_project_1_prev">
            <i className="fi fi-br-arrow-left"></i>
          </div>
          <div className="chy_project_1_next">
            <i className="fi fi-br-arrow-right"></i>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectOne