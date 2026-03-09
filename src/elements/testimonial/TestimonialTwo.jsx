import React from 'react'
import bgImg from '../../assets/img/testimonial/t2-bg-img-1.png'
import img1 from "../../assets/img/price/p2-img-1.png";
import img2 from "../../assets/img/price/p2-img-2.png";
import img3 from "../../assets/img/price/p2-img-3.png";
import logo1 from "../../assets/img/testimonial/t2-logo-1.png"; // Agar use nahi ho rahe to hata sakte hain
import logo2 from "../../assets/img/testimonial/t2-logo-2.png";
import logo3 from "../../assets/img/testimonial/t2-logo-3.png";
import logo4 from "../../assets/img/testimonial/t2-logo-4.png";
import logo5 from "../../assets/img/testimonial/t2-logo-5.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// FaStar import kiya rating ke liye
import { FaUser, FaStar } from 'react-icons/fa'; 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function TestimonialTwo() {

  // Yahan par saara data hai (Image, Name, Bio, Comment, Rating)
  // Naya card add karne ke liye bas yahan ek naya object {} add karein
  const testimonialData = [
    {
      id: 1,
      image: img1,
      name: "Real Divine Healing",
      bio: "building corp",
      comment: "Wonderful experience while working with Gotech team. They are group of amazing people strive to give the best solutions to their customers, with their full dedication and very smooth behavior!Their hand holding ever after completion of projects shows their dedication towards customer delight! I strongly recommend all to entrust the work they are best at !",
      rating: 5 // 5 Stars
    },
    {
      id: 2,
      image: img2,
      name: "karan Arya",
      bio: "interior design",
      comment: "very polite and experienced in work. They work professionally and very creative.",
      rating: 5 // 4 Stars
    },
    {
      id: 3,
      image: img3,
      name: "Gurpreet Singh",
      bio: "architecture firm",
      comment: "A reliable company for Google promotion, delivering effective strategies that help improve visibility and reach the right audience",
      rating: 4 // 5 Stars
    },
    {
      id: 4,
      image: img3,
      name: "JJ Saffron",
      bio: "architecture firm",
      comment: "To my mind, the greatest reward for any renovation project is being able to expertience the transformation from beginning to end. I enjoy getting to see how a renovation can go from an idea to a reality and lead to an elevated mood",
      rating: 5 // 5 Stars
    },
    {
      id: 5,
      image: img3,
      name: "aman mishra",
      bio: "architecture firm",
      comment: "Working with Go Tech Digi was a seamless and professional experience. The team understood my vision, delivered a modern, user-friendly website, and stayed responsive throughout the process. Special thanks to Rajesh and Jyotsna for their excellent work—I highly recommend Go Tech Digi.",
      rating: 5 // 5 Stars
    },
    {
      id: 6,
      image: img3,
      name: "Kristiyana Boyadzhieva",
      bio: "architecture firm",
      comment: "I am absolutely thrilled with the work done by Gotech Digital exceeded my expectations with their professionalism and responsiveness. They delivered a beautifully designed website that perfectly reflects my brand, and I highly recommend their services.",
      rating: 5 // 5 Stars
    },
  ];

  useGSAP(() => {
  // clip animation (Same as before)
    gsap.utils.toArray(".chyclip").forEach((el, index) => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 2,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl6
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { clipPath: "polygon(30% 0, 70% 0, 70% 100%, 30% 100%)" },
          {
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 1,
            immediateRender: false,
          }
        );
    });
  });

  return (
    <div
      className="chy-testimonial-2-area bg-default pt-100 pb-50 chyclip"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container chy-container-1">
        {/* slider */}
        <div className="chy-testimonial-2-slider fix mb-50">
          <Swiper
            loop={true}
            spaceBetween={0}
            speed={500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".chy-testimonial-2-pagination",
              type: "bullets",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="swiper-container fix chy_testimonial_2_active"
          >
            <div className="swiper-wrapper">

              {/* Data Map Loop Starts Here - Automatically cards banayega */}
              {testimonialData.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="chy-testimonial-2-item">
                    <div className="main-img">
                      <img src={item.image} alt="" />
                    </div>
                    <h4 className="chy-heading-1 comment">
                      {item.comment}
                    </h4>
                    <div className="person-wrap">
                      <div className="icon" style={{borderRadius: "50px"}}>
                        <FaUser />
                      </div>
                      
                      <div className="right">
                        <h3 className="chy-heading-1 name">{item.name}</h3>
                        {/* <p className="chy-para-2 bio">{item.bio}</p> */}
                        
                        {/* Rating Logic: Jitna number data me hai utne stars banenge */}
                        <div className="chy-rating" style={{ display: 'flex', gap: '3px', marginTop: '5px' }}>
                          {[...Array(item.rating)].map((_, i) => (
                            <FaStar key={i} style={{ color: "#FFB800", fontSize: "14px" }} />
                          ))}
                        </div>

                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Data Map Loop Ends Here */}

            </div>
          </Swiper>
          <div className="chy-testimonial-2-pagination"></div>
        </div>
        
      </div>
    </div>
  )
}

export default TestimonialTwo