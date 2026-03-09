import React, { useRef } from 'react'
import imgIcon1 from "../../assets/img/price/pc-1-icon-1.png";
import imgIcon2 from "../../assets/img/price/pc-1-icon-2.png";
import imgIcon3 from "../../assets/img/price/pc-1-icon-3.png";
import imgIl1 from "../../assets/img/price/p1-il-2.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from '../title-animation/SplitTextAnimation';

function PricingCardOne() {

    // price card data 
    const priceData = [
      {
        id: 1,
        name: "Business",
        disc: "Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every",
        trial: "14-Day Free Trial - No Credit Card Required",
        feature: [
          {
            item: "Setup & Onboarding",
          },
          {
            item: "Onboarding & Setup",
          },
          {
            item: "Awosame Consulting",
          },
        ],
            price: "$29 /Month",
        icon: imgIcon1,
      },
      {
        id: 2,
        name: "Agency",
        disc: "Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every",
        trial: "14-Day Free Trial - No Credit Card Required",
        feature: [
          {
            item: "Setup & Onboarding",
          },
          {
            item: "Onboarding & Setup",
          },
          {
            item: "Awosame Consulting",
          },
        ],
          price: "$69 /Month",
        icon: imgIcon2
      },
      {
        id: 3,
        name: "Company",
        disc: "Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every",
        trial: "14-Day Free Trial - No Credit Card Required",
        feature: [
          {
            item: "Setup & Onboarding",
          },
          {
            item: "Onboarding & Setup",
          },
          {
            item: "Awosame Consulting",
          },
        ],
          price: "$99 /Month",
        icon: imgIcon3
      },
    ];


    // pricing card hover active class add and remove

    const priceCards = useRef([])
    
    const handleActiveCard = (e) => {
    
       priceCards.current
            .filter((item, index) => index !== e).map((item) => item.classList.remove('active'))
        
        priceCards.current[e].classList.add('active')
    }

  useGSAP(() => {

    // scroll up card animation 
    gsap.utils.toArray('.asslideupcta-2').forEach((el, index) => { 
    let tlcta = gsap.timeline({
      scrollTrigger: {
      trigger: el,
      scrub: 1,
      start: "top 90%",
      end: "top 70%",
      toggleActions: "play none none reverse",
      markers: false
      }
    })
    
    tlcta
    .set(el, {transformOrigin: 'center center'})
    .from(el, { opacity: 1,  y: "+=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
    })
  
  });
    
    
  return (
    <>
      <div className="chy-price-card-1-area pt-145 fix">
        <div className="container chy-container-1">

          {/* section-title */}
          <div className="section-title-wrap mb-30 text-center">
            <h5
              className="chy-subtitle-1"
              data-aos="fade-down"
              data-aos-offset="5"
              data-aos-duration="3000"
              data-aos-once="true"
            >
              discount price
            </h5>
            <h2 className="chy-title-1  chy-split-in-right chy-split-text">
              <SplitText text="make brand identities" />
            </h2>
          </div>

          <div className="row chy-price-card-1-hight">
            {/* data map */}
            {priceData.map((data, index) => (
              <div
                key={data.id}
                className={`col-xl-4 col-lg-6 col-md-6 ${
                  index%2 == 0 ? "asslideupcta-2" : ""}`}
              >
                <div
                  ref={(el) => (priceCards.current[index + 1] = el)}
                  onMouseOver={() => handleActiveCard(index + 1)}
                  className={`chy-price-card-1-item ${
                    data.id == 2 ? "active" : ""
                  }`}
                >
                  <div className="icon-wrap">
                    <div className="icon">
                      <img src={data.icon} alt="" />
                    </div>
                    <h3 className="chy-heading-1 price">{data.price}</h3>
                  </div>
                  <h6 className="chy-heading-1 title">{data.name}</h6>
                  <p className="chy-para-1 disc">{data.disc}</p>
                  <Link to="/contact-us" className="pc1-btn">get started</Link>
                  <p className="chy-heading-1 date">{data.trial}</p>
                  <ul className="chy-price-card-1-item-list">
                    {/* data map */}
                    {data.feature.map((li, index) => (
                      <li key={index}>
                        <i className="fi fi-br-check"></i>
                        {li.item}
                      </li>
                    ))}
                  </ul>
                  <img src={imgIl1} alt="" className="style-icon" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default PricingCardOne