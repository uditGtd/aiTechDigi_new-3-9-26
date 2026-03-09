import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-1.png'
import ServicesCardOne from '../../components/services/ServicesCardOne'
import { dataOne } from '../../data/services/services-one'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ServicesInnerOne() {

    useGSAP(() => {
    // service item scroll animatinon
    gsap.utils.toArray(" .asslideupcta").forEach((el, index) => {
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
    

  return (
    <div className="body-bg-1 bg-default" style={{backgroundImage:`url(${bgImage})`}}>

        <div className="chy-services-1-area pt-120 pb-120 fix">
            <div className="container chy-container-1">
                <div className="section-title-wrap text-center mb-40">
                    <h5 className="chy-subtitle-1" 
                      data-aos="fade-down"
                      data-aos-duration="3000"
                      data-aos-once="true">consulting services</h5>
                    <h2 className="chy-title-1 chy-split-in-right chy-split-text">consulting costing</h2>
                </div>
                <div className="chy-services-1-wrap">

                    {/* services data map with services-card */}
                    {dataOne.map((item, index)=> <ServicesCardOne key={item.id} item={item} index={index} />)}
                  
                </div>
            </div>
        </div>

    </div>
  )
}

export default ServicesInnerOne