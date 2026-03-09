import React, { useEffect } from 'react'
import img from "../../assets/img/trusted/t2-group-img-1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 1. FontAwesome imports add kiye hain
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAngular, 
  faReact, 
  faNodeJs, 
  faPython, 
  faAws, 
  faDocker 
} from "@fortawesome/free-brands-svg-icons";

function TrustedTwo() {

  // data
const data = [
  {
    id: "01",
    iconName: faAngular,
    title: "Angular",
    disc: "Used to build scalable and high-performance web applications.",
  },
  {
    id: "02",
    iconName: faReact,
    title: "React",
    disc: "Creates fast, interactive, and reusable user interfaces.",
  },
  {
    id: "03",
    iconName: faNodeJs,
    title: "Node.js",
    disc: "Handles backend logic and builds fast, scalable server-side apps.",
  },
  {
    id: "04",
    iconName: faPython,
    title: "Python",
    disc: "Used for data analysis, AI, and backend development.",
  },
  {
    id: "05",
    iconName: faAws,
    title: "AWS",
    disc: "Provides secure cloud hosting and scalable infrastructure.",
  },
  {
    id: "06",
    iconName: faDocker,
    title: "Docker",
    disc: "Simplifies app deployment using containerized environments.",
  },
];


  return (
    <div className="chy-trusted-2-area fix">
      <div className="container chy-container-1">
        <div className="chy-trusted-2-wrap pt-70 pb-100">
          <div className="row align-items-center">

            {/* left-content */}
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="chy-trusted-2-content">
                <h4
                  className="chy-heading-1 title"
                  data-aos="fade-right"
                  data-aos-offset="5"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  Technologies
                </h4>
                <p
                  className="chy-para-2 disc"
                  data-aos="fade-right"
                  data-aos-offset="5"
                  data-aos-duration="2000"
                  data-aos-delay="50"
                  data-aos-once="true"
                >
                  Technologies We Use
                  Cutting-edge tools and frameworks for modern development
                </p>
                <div
                  className="team-group"
                  data-aos="fade-right"
                  data-aos-offset="5"
                  data-aos-duration="2000"
                  data-aos-delay="70"
                  data-aos-once="true"
                >
                  <h6 className="chy-heading-1 title">our creative team</h6>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>

            {/* right-slideer */}
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="chy-trusted-2-slider fix">
                <Swiper
                  loop={true}
                  spaceBetween={15}
                  speed={1000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  pagination={{
                    el: ".chy-trusted-2-pagination",
                    type: "bullets",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    clickable: true,
                  }}
                  slidesPerView={2}
                  breakpoints={{
                    0: {
                      width: 0,
                      slidesPerView: 1,
                    },
                    710: {
                      width: 710,
                      slidesPerView: 2,
                    },
                  }}
                  className="swiper-container chy_trusted_2_active"
                >
                  <div className="swiper-wrapper">

                    {/* data map */}
                    {
                      data.map((item, index) =>
                        <SwiperSlide key={item.id} className="swiper-slide">
                          <div className="chy-trusted-2-slider-item">
                            <div className={`icon ${index % 2 == 0 ? "has-bg" : ""}`}>
                              {/* 2. Yahan <i> tag hata kar FontAwesomeIcon component lagaya hai */}
                              <FontAwesomeIcon icon={item.iconName} style={{ fontSize: '60px',marginTop:"10px" }} />
                            </div>
                            <h4 className="chy-heading-1 title">
                              {item.title}
                            </h4>
                            <p className="chy-para-2 disc">
                              {item.disc}
                            </p>
                          </div>
                        </SwiperSlide>
                      )
                    }

                  </div>
                </Swiper>

                <div className="chy-trusted-2-pagination"></div>
              </div>
            </div>

          </div>
        </div>
        <span className="animation-line"></span>
      </div>
    </div>
  )
}

export default TrustedTwo