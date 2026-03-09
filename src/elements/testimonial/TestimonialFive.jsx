import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import bgImage from "../../assets/img/testimonial/t5-img-bg.png";
import { dataOne, dataTwo } from "../../data/testimonial/testimonial-five";
import SplitText from "../../components/title-animation/SplitTextAnimation";

function TestimonialFive() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="chy-testimonial-5-area fix pt-130">
      <div className="container chy-container-2">
        <div className="chy-testimonial-5-slider fix">
          <Swiper
            loop={true}
            spaceBetween={0}
            speed={500}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Autoplay, EffectFade, Thumbs]}
            className="swiper-container chy_testimonial_5_active"
          >
            <div className="swiper-wrapper">

              {/* data map */}
              {dataOne.map((item) => (
                <SwiperSlide className="swiper-slide" key={item.id}>
                  <div className="chy-testimonial-5-item">
                    <div
                      className="main-img bg-default"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    >
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content-wrap">
                      <div className="section-title-wrap mb-40">
                        <h5 className="chy-subtitle-4 chy-class-add">
                          our testimonials
                        </h5>
                        <h2 className="chy-title-4 chy-split-in-right chy-split-text">
                          <SplitText text="What Our Clients Say About Us" />
                        </h2>
                      </div>

                      <div className="comment-wrap">
                        <svg
                          className="arrow-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="51"
                          height="69"
                          viewBox="0 0 51 69"
                          fill="none"
                        >
                          <path
                            d="M3.75082 42.3064C-1.24949 38.3032 -1.24949 30.6968 3.75082 26.6936L34.0002 2.47611C40.5473 -2.76541 50.25 1.8958 50.25 10.2825L50.25 58.7174C50.25 67.1042 40.5473 71.7654 34.0002 66.5239L3.75082 42.3064Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          className="qoute"
                          xmlns="http://www.w3.org/2000/svg"
                          width="355"
                          height="208"
                          viewBox="0 0 355 208"
                          fill="none"
                        >
                          <path
                            opacity="0.15"
                            d="M23.9412 207.25L139.252 207.25C152.072 207.25 162.565 198.228 162.565 187.065L162.565 107.323C162.565 96.1591 152.072 87.1371 139.252 87.1371L58.7846 87.1371L58.7846 4.32259C58.7846 2.31617 56.9168 0.750008 54.6909 0.750008C24.9164 0.750006 0.629017 21.6961 0.629014 47.5161L0.629 187.064C0.628999 198.228 11.1221 207.25 23.9412 207.25ZM8.81642 47.5161C8.81642 26.8906 27.1817 9.84873 50.5972 8.05129L50.5972 90.7097C50.5972 92.7161 52.465 94.2822 54.6909 94.2822L139.252 94.2823C147.627 94.2823 154.377 100.165 154.377 107.323L154.377 187.065C154.377 194.222 147.627 200.105 139.252 200.105L23.9412 200.105C15.5662 200.105 8.81641 194.222 8.81641 187.064L8.81642 47.5161ZM216.127 207.25L331.438 207.25C344.257 207.25 354.75 198.228 354.75 187.065L354.75 107.323C354.75 96.1591 344.257 87.1371 331.438 87.1371L250.97 87.1371L250.97 4.32261C250.97 2.31615 249.101 0.750023 246.876 0.750022C217.102 0.75002 192.814 21.6961 192.814 47.5161L192.814 187.065C192.814 198.228 203.307 207.25 216.127 207.25ZM201.002 47.5161C201.002 26.8906 219.367 9.84874 242.783 8.05131L242.783 90.7097C242.783 92.7161 244.651 94.2823 246.876 94.2823L331.438 94.2823C339.813 94.2823 346.563 100.165 346.563 107.323L346.563 187.065C346.563 194.222 339.813 200.105 331.438 200.105L216.127 200.105C207.752 200.105 201.002 194.222 201.002 187.065L201.002 47.5161Z"
                            fill="url(#paint0_linear_66_982)"
                            stroke="url(#paint1_linear_66_982)"
                            strokeWidth="0.5"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_66_982"
                              x1="362.16"
                              y1="104"
                              x2="0.879004"
                              y2="104"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#9255CE" />
                              <stop offset="1" stopColor="#BE60FF" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_66_982"
                              x1="354.5"
                              y1="104"
                              x2="0.879011"
                              y2="104"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#B60B0B" />
                              <stop offset="1" stopColor="#FF3838" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p className="chy-heading-2 comment-text">
                          {item.comment}
                        </p>
                        <span className="chy-heading-2 name">{item.name}</span>
                        <span className="chy-para-4 bio">
                          {item.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
            </div>
          </Swiper>
        </div>
      </div>
      <div className="chy-testimonial-5-preview">
        <Swiper
          loop={false}
          spaceBetween={30}
          speed={1000}
          slidesPerView={3}
          direction={"vertical"}
          centeredSlides={false}
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
              direction: "horizontal",
            },
            576: {
              width: 576,
              slidesPerView: 3,
              direction: "horizontal",
            },
            768: {
              width: 768,
              slidesPerView: 3,
              direction: "horizontal",
            },
            1600: {
              width: 1600,
              slidesPerView: 3,
              direction: "vertical",
            },
            1900: {
              width: 1900,
              slidesPerView: 3,
              direction: "vertical",
            },
          }}
          className="swiper-container chy_t5_preview_active"
        >
          <div className="swiper-wrapper">
            {dataTwo.map((item) => (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <div className="chy-t5-preview-item">
                  <img src={item.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default TestimonialFive;
