import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import SplitText3 from '../../components/title-animation/SplitTextAnimation3';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function TestimonialThree({data}) {

    // service card hover
    const serviceCards = useRef([]);

    const handleActiveCard = (e) => {
      serviceCards.current
        .filter((item, index) => index !== e)
        .map((item) => item.classList.remove("active"));

      serviceCards.current[e].classList.add("active");
  }

  // scroll animatin on item 
  useGSAP(() => {

    gsap.utils.toArray('.chyScl').forEach((el, index) => { 
      let chyScl = gsap.timeline({
        scrollTrigger: {
        trigger: el,
        scrub: 1,
        start: "top 95%",
        end: "top 70%",
        toggleActions: "play none none reverse",
         markers: false
        }
      })
      
      chyScl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, { scale: .8 }, { scale: 1, duration: .5, immediateRender: false})
    })

  });
  
  return (
    <div className="chy-testimonial-3-area pt-140 pb-60 fix">
      <div className="container chy-container-1">
        
        {/* section-title */}
        <div className="section-title-wrap mb-70 text-center">
          <h3 className="chy-subtitle-3 wow fadeInDown ">
            welcome creative agency
          </h3>
          <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
            <SplitText3 text="full creative services for you" />
          </h2>
        </div>

        <div className="chy-testimonial-3-item-wrap">

          {/* testimonial data map */}
          {data?.map((item, index) => (
            <div className="chyScl" key={item.id}>
              <div
                className={`chy-testimonial-3-item ${
                  index == 0 ? "active" : ""
                }`}
                ref={(el) => (serviceCards.current[index + 1] = el)}
                onMouseOver={() => handleActiveCard(index + 1)}
              >
                <span className="chy-heading-1 number">0{item.id}.</span>
                <div className="title-wrap">
                  <h6 className="chy-para-3 subtitle">{item.subtitle}</h6>
                  <h3 className="chy-heading-1 title">
                    <Link to="/service-details">{item.name}</Link>
                  </h3>
                  <span className="chy-heading-1 bio ">
                    client name: {item.clientName}
                  </span>{" "}
                  <br />
                  <span className="chy-heading-1 bio">value: {item.value}</span>
                </div>
                <p className="chy-para-3 disc">{item.disc}</p>
                <img src={item.image} className="main-img" alt="" />
                <Link to="/service-details" className="p3-btn">
                  <FiArrowUpRight/>
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default TestimonialThree