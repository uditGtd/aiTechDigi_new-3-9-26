import React, { useRef } from 'react'
import imgIcon1 from "../../assets/img/services/s1-icon-1.png";
import imgIcon2 from "../../assets/img/services/s1-icon-2.png";
import imgIcon3 from "../../assets/img/services/s1-icon-3.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ServicesCardOne from '../../components/services/ServicesCardOne';
import SplitText from '../../components/title-animation/SplitTextAnimation';


function ServicesOne() {
  
  useGSAP(() => {
    // service item scroll animatinon
    gsap.utils.toArray(".asslideupcta").forEach((el, index) => {
      let tlcta = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tlcta
        .set(el, { transformOrigin: "center center" })
        .from(
          el,
          { opacity: 1, y: "+=300" },
          { opacity: 1, y: 0, duration: 1, immediateRender: false }
        );
    });
  });

  // counter ref
  const countUpRef = useRef();

  // services data 
  const data = [
    {
      id: "1",
      title: "Web Development",
      disc: "Every pleasure is to be welcomed and every pain avoided.",
      icon: imgIcon1,
      list: [
        {
          item: "Diversity Business"
        },
        {
          item: "Risk Management"
        },
        {
          item: "Certificated Company"
        },
      ]
    },
    {
      id: "2",
      title: "Digital Marketing",
      disc: "Every pleasure is to be welcomed and every pain avoided.",
      icon: imgIcon2,
      list: [
        {
          item: "Explore Pricing"
        },
        {
          item: "Risk Management"
        },
        {
          item: "Pixel & Perfect Designt"
        },
      ]
    },
    {
      id: "3",
      title: "Clock Fly TStrategy",
      disc: "Every pleasure is to be welcomed and every pain avoided.",
      icon: imgIcon3,
      list: [
        {
          item: "SEO Copywriting"
        },
        {
          item: "Plans & Pricing"
        },
        {
          item: "Risk Management"
        },
      ]
    },
  ]

  return (
    <div className="chy-services-1-area pt-140 fix">
      <div className="container chy-container-1">
        
        <div className="section-title-wrap text-center mb-40">
          <h5
            data-aos="fade-down"
            data-aos-offset="5"
            data-aos-duration="3000"
              data-aos-once="true"
            className="chy-subtitle-1"
          >
            consulting services
          </h5>
          <h2 className="chy-title-1 chy-split-in-right chy-split-text">
            <SplitText text="Consulting Costing" />
          </h2>
        </div>

        <div className="chy-services-1-wrap">
          {/* services card map  */}
          {data.map((item, index)=> <ServicesCardOne key={item.id} item={item} index={index} />)}
        </div>

        <div className="chy-services-1-counter">

          {/* single-item  */}
          <div className="chy-services-1-counter-item">
            <h3 className="chy-heading-1 number">
              <CountUp
                delay={1}
                duration={3}
                start={1}
                end={15}
                enableScrollSpy
                scrollSpyOnce
                suffix={"k +"}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>
            <h3 className="chy-heading-1 disc">
              trusted <br /> user
            </h3>
          </div>

          {/* single-item  */}
          <div className="chy-services-1-counter-item ">
            <h3 className="chy-heading-1 number">
              <CountUp
                delay={1}
                duration={3}
                start={1}
                end={25}
                enableScrollSpy
                scrollSpyOnce
                suffix={"k"}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
            </h3>
            <h3 className="chy-heading-1 disc">
              positive <br /> reiews
            </h3>
          </div>

          {/* single-item */}
          <div className="chy-services-1-counter-item justify-self-end">
            <h3 className="chy-heading-1 number">
              <CountUp
                delay={1}
                duration={3}
                start={1}
                end={35}
                enableScrollSpy
                scrollSpyOnce
                suffix={"%"}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
            </h3>
            <h3 className="chy-heading-1 disc">
              reply <br /> rate
            </h3>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ServicesOne