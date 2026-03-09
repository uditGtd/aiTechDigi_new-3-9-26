import { faLongArrowLeft, faLongArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import quiteIcon from "../../assets/img/testimonial/t3-qoute.png";
import image1 from "../../assets/img/testimonial/t3-person-1.png";
import image2 from "../../assets/img/testimonial/t3-person-2.png";

function TestimonialFour() {

  // data
  const data = [
    {
      id: "01",
      name: "charli hapan",
      subtitle: "what prople say",
      disc: "When an unknown printer took A galley of type and scrambled it to make a type specimen Book. It has survived not only Five centuries.",
      quiteIcon,
      image: image1,
    },
    {
      id: "02",
      name: "charli hapan",
      subtitle: "what prople say",
      disc: "When an unknown printer took A galley of type and scrambled it to make a type specimen Book. It has survived not only Five centuries.",
      quiteIcon,
      image: image2,
    },
  ];

  return (
    <div className="chy-testimonial-4-area pt-140 pb-60">
      <div className="chy-testimonial-4-wrap fix">
        <div className="container chy-container-1">
          <div className="chy-testimonial-4-slider">
            <Swiper
              loop={true}
              spaceBetween={0}
              speed={500}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".chy_testimonial_4_next",
                prevEl: ".chy_testimonial_4_prev",
              }}
              modules={[Autoplay, Navigation]}
              className="swiper-container chy_testimonial_4_active"
            >
              <div className="swiper-wrapper">

                {/* testimonial data map */}
                {data.map((item) => (
                  <SwiperSlide className="swiper-slide" key={item.id}>
                    <div className="chy-testimonial-4-item">
                      <div className="icon">
                        <img src={item.quiteIcon} alt="" />
                      </div>
                      <div className="content-wrap">
                        <span className="subtitle chy-heading-1">
                          {item.subtitle}
                        </span>
                        <h3 className="chy-heading-1 comment">{item.disc}</h3>
                        <div className="person-wrap">
                          <div className="person-img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="name-wrap">
                            <h4 className="chy-heading-1 name">{item.name}</h4>
                            <div className="reating">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </div>
            </Swiper>
            <div className="chy-testimonial-4-btn">
              <div className="chy_testimonial_4_prev">
                <FontAwesomeIcon icon={faLongArrowLeft} />
              </div>
              <div className="chy_testimonial_4_next">
                <FontAwesomeIcon icon={faLongArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialFour;
