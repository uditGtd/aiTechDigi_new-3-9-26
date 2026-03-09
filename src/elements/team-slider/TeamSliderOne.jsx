import React from "react";
import sliderImg1 from "../../assets/img/team/t1-slider-img-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function TeamSliderOne() {

  // data
  const data = [
    {
      id: "01",
      title: "a framework for scaling teams",
      disc: "Every pleasure is to be welcomed and every pain avoided. is to be welcomedt and every Every pleasure is to be welcomed and every pain avoided. is to be welcomed every Every pleasure is to be welcomed",
      image: sliderImg1,
      name: "logon d",
      designation: "Founder, Marketing agency",
    },
    {
      id: "02",
      title: "a framework for scaling teams",
      disc: "Every pleasure is to be welcomed and every pain avoided. is to be welcomedt and every Every pleasure is to be welcomed and every pain avoided. is to be welcomed every Every pleasure is to be welcomed",
      image: sliderImg1,
      name: "logon d",
      designation: "Founder, Marketing agency",
    },
    {
      id: "03",
      title: "a framework for scaling teams",
      disc: "Every pleasure is to be welcomed and every pain avoided. is to be welcomedt and every Every pleasure is to be welcomed and every pain avoided. is to be welcomed every Every pleasure is to be welcomed",
      image: sliderImg1,
      name: "logon d",
      designation: "Founder, Marketing agency",
    },
  ]

  return (
    <div className="chy-team-slider-1-area pt-80 pb-80">
      <div className="container chy-container-1">
        <div className="chy-team-slider-1-wrap">
          <Swiper
            loop={true}
            centeredSlides={true}
            spaceBetween={0}
            speed={500}
            slidesPerView={1}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            pagination={{
              el: ".chy-team-slider-1-pagination",
              type: "bullets",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              clickable: true,
            }}
            className="swiper-container chy_team_slider_1_active fix"
          >
            <div className="swiper-wrapper">

              {/* data map*/}
              {
                data.map((item)=>
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="chy-team-slider-1-item">
                      <div className="main-img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">
                          {item.title}
                        </h4>
                        <p className="chy-para-1 comment">
                          {item.disc}
                        </p>
                        <div className="person">
                          <h5 className="chy-heading-1 name">{item.name}</h5>
                          <span className="chy-para-1 bio">
                            {item.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }
            
            </div>
          </Swiper>

          <div className="chy-team-slider-1-pagination"></div>
        </div>
      </div>
    </div>
  )
}

export default TeamSliderOne;
