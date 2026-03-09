import React from "react";
import image1 from "../../assets/img/portfolio/p2-img-1.png";
import image2 from "../../assets/img/portfolio/p2-img-2.png";
import image3 from "../../assets/img/portfolio/p2-img-3.png";
import image4 from "../../assets/img/portfolio/p2-img-4.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FiArrowUpRight } from "react-icons/fi";
import SplitText3 from "../../components/title-animation/SplitTextAnimation3";

function ProjectThree() {

  // data
  const data = [
    {
      id: "01",
      subtitle: "energy & environment",
      name: "business solutions",
      image: image1,
    },
    {
      id: "02",
      subtitle: "energy & environment",
      name: "business solutions",
      image: image2,
    },
    {
      id: "03",
      subtitle: "energy & environment",
      name: "business solutions",
      image: image3,
    },
    {
      id: "04",
      subtitle: "energy & environment",
      name: "business solutions",
      image: image4,
    },
    {
      id: "05",
      subtitle: "energy & environment",
      name: "business solutions",
      image: image2,
    },
  ]

  return (
    <div className="chy-project-3-area pt-70">
      <div className="container">

        {/* section-title */}
        <div className="section-title-wrap mb-40 text-center">
          <h3 className="chy-subtitle-3 wow fadeInDown ">our projects</h3>
          <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
            <SplitText3 text="our selected projects" />
          </h2>
        </div>
      </div>

      <div className="chy-project-3-slider fix">
        <Swiper
          loop={true}
          spaceBetween={0}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".chy_project_3_next",
            prevEl: ".chy_project_3_prev",
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
              slidesPerView: 2,
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
              slidesPerView: 4,
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
          className="swiper-container chy_project_3_active"
        >
          <div className="swiper-wrapper">

            {/* data map  */}
            {data.map((item) => (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <div className="chy-project-3-item">
                  <div className="main-img img-cover">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-wrap">
                    <div className="left">
                      <span className="chy-heading-1 subtitle">
                        {item.subtitle}
                      </span>
                      <h3 className="chy-heading-1 title">
                        <Link to="/project-details">{item.name}</Link>
                      </h3>
                    </div>
                    <Link to="/project-details" className="p3-btn">
                      <FiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </div>
        </Swiper>
        <div className="chy-project-3-btn">
          <div className="chy_project_3_prev">
            <FontAwesomeIcon icon={faLongArrowLeft} />
          </div>
          <div className="chy_project_3_next">
            <FontAwesomeIcon icon={faLongArrowRight} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectThree;
