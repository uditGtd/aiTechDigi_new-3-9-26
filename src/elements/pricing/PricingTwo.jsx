import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import img1 from "../../assets/img/price/p2-img-1.png";
import img2 from "../../assets/img/price/p2-img-2.png";
import img3 from "../../assets/img/price/p2-img-3.png";
import img4 from "../../assets/img/price/p2-img-4.png";
import img5 from "../../assets/img/price/p2-img-5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import subtitleIcon from '../../assets/img/icon/subtitle-icon.png'
import SplitText2 from '../../components/title-animation/SplitTextAnimation2';

function PricingTwo() {

  // data 
  const data = [
    {
      id: "01",
      image1: img1,
      image2: img2,
      image3: img3,
      image4: img4,
      image5: img5,
      price: 7999,
      sent: 99,
      title:"Starter Package",
      list: [
        {
          name: "24/7 support available"
        },
        {
          name: "Responsive Web Design"
        },
        {
          name: "Dedicated Account Manager",
        },
        {
          name: "Affordable Cost",
        },
        {
          name: "Satisfaction Guaranteed",
        },
        {
          name: "One week Unlimited Revision",
        },
      ],
      type: "Plan billed annually, US$199/year",
    },
    {
      id: "02",
      image1: img2,
      image2: img3,
      image3: img4,
      image4: img5,
      image5: img1,
      price: 11999,
      sent: 99,
      title:"Business Package",
      list: [
        {
          name: "24/7 support available"
        },
        {
          name: "Responsive Web Design"
        },
        {
          name: "Dedicated Account Manager",
        },
        {
          name: "Affordable Cost",
        },
        {
          name: "Satisfaction Guaranteed",
        },
        {
          name: "One week Unlimited Revision",
        },
      ],
      type: "Plan billed annually, US$199/year",
    },
    {
      id: "03",
      image1: img3,
      image2: img4,
      image3: img5,
      image4: img1,
      image5: img2,
      price: 19999,
      sent: 99,
      title:"E-Commerce Package",
      list: [
        {
          name: "24/7 support available"
        },
        {
          name: "Responsive Web Design"
        },
        {
          name: "Dedicated Account Manager",
        },
        {
          name: "Affordable Cost",
        },
        {
          name: "Satisfaction Guaranteed",
        },
        {
          name: "One week Unlimited Revision",
        },
      ],
      type: "Plan billed annually, US$199/year",
    },
    // {
    //   id: "04",
    //   image1: img4,
    //   image2: img5,
    //   image3: img1,
    //   image4: img2,
    //   image5: img3,
    //   price: 49999,
     
    //   list: [
    //     {
    //       name: "24/7 support available"
    //     },
    //     {
    //       name: "Expert Professionals"
    //     },
    //     {
    //       name: "On time delivered",
    //     },
    //     {
    //       name: "Dedicated maintenance",
    //     },
    //   ],
    //   type: "Plan billed annually, US$199/year",
    // },
    // {
    //   id: "05",
    //   image1: img5,
    //   image2: img1,
    //   image3: img2,
    //   image4: img3,
    //   image5: img4,
    //   price: 49999,
    //   sent: 99,
    //   list: [
    //     {
    //       name: "24/7 support available"
    //     },
    //     {
    //       name: "Expert Professionals"
    //     },
    //     {
    //       name: "On time delivered",
    //     },
    //     {
    //       name: "Dedicated maintenance",
    //     },
    //   ],
    //   type: "Plan billed annually, US$199/year",
    // },
  ]
  return (
    <div className="chy-price-2-area pt-0 pb-130 fix ">

      {/* section-title */}
      <div className="section-title-wrap mb-35 text-center ">
        <h3 className="chy-subtitle-2 wow fadeInRight">
          <img src={subtitleIcon} className="icon" alt="" />{" "}
          pricing Packagese
        </h3>
        <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
          <SplitText2 text="Get the best price" />
        </h2>
      </div>

      <div className="chy-price-2-slider ">
        <Swiper
          loop={true}
          spaceBetween={0}
          speed={500}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={{
            nextEl: ".chy_price_2_next",
            prevEl: ".chy_price_2_prev",
          }}
          modules={[Autoplay, Navigation, EffectFade]}
          className="swiper-container fix chy_price_2_active "
        >
          <div className="swiper-wrapper">

            {/* data map */}
            {
              data.map((item)=> 
                <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="chy-price-2-item">
                    <div className="img-item-wrap">
                      <div className="img-item img-cover">
                        <img src={item.image1} alt="" />
                      </div>
                      <div className="img-item img-cover">
                        <img src={item.image2} alt="" />
                      </div>
                      <div className="img-item-big img-cover">
                        <img src={item.image3} alt="" />
                        <span className="chy-heading-1 best">best</span>
                      </div>
                      <div className="img-item img-cover">
                        <img src={item.image4} alt="" />
                      </div>
                      <div className="img-item img-cover">
                        <img src={item.image5} alt="" />
                      </div>
                    </div>

                    <div className="content-wrap">
                      <div className="list-wrap mb-3">
                        <div className="price-wrap">
                          <h3 className="chy-heading-1 title">{item.title}</h3>
                          <h4 className="chy-heading-1 price">
                            <span className="dollar-sine">Inr₹</span>{item.price}
                            {/* <span className="sent">.{item.sent}</span> */}
                          </h4>
                        </div>
                        <ul className="chy-price-2-list">
                          {item.list.map((lItem, index)=>
                            <li key={index} className="chy-heading-2">
                            <IoMdCheckmarkCircle /> {lItem.name}
                          </li>
                          )}
                        </ul>
                        {/* <span className="chy-para-2 month">
                          {item.type}
                        </span> */}
                      </div>
                      <Link to="/contact" className="price-2-btn">
                        Get A Quote
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            }
            
          </div>
        </Swiper>

        <div className="chy-price-2-slider-btn">
          <div className="chy_price_2_prev">
            <FontAwesomeIcon icon={faLongArrowLeft} />
          </div>
          <div className="chy_price_2_next">
            <FontAwesomeIcon icon={faLongArrowRight} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PricingTwo