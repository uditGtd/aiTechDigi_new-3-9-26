import React, { useRef } from 'react'
import imageBg from "../../assets/img/project/p4-bg-img-1.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from '../../components/title-animation/SplitTextAnimation';

function ProjectFour() {

  // feature data 
  const featureData = [
    {
      id: "01",
      name: "Positive Feedback",
      number: 100,
      numberSub: "%",
      iconName: "fi fi-rs-edit-alt",
    },
    {
      id: "02",
      name: "Websites",
      number: 2,
      numberSub: "k +",
      iconName: "fi fi-ts-review",
    },
    {
      id: "03",
      name: "Reviews",
      number: 200,
      numberSub: "+",
      iconName: "fi fi-ts-employees",
    },
    {
      id: "04",
      name: "awards won",
      number: 230,
      numberSub: "+",
      iconName: "fi fi-rr-trophy-star",
    },
  ];

  useGSAP(() => {
   // For each images with class "animate-image" on page
   gsap.utils.toArray(".chy-project-4-area .bg-img").forEach((el, index) => {
     let chyScl = gsap.timeline({
       scrollTrigger: {
         trigger: el,
         scrub: 1,
         start: "top 90%",
         end: "top 50%",
         toggleActions: "play none none reverse",
         markers: false,
       },
     });

     chyScl
       .set(el, { transformOrigin: "center center" })
       .fromTo(
         el,
         { xPercent: -100 },
         { xPercent: 0, duration: 0.5, immediateRender: false }
       );
   });

   // For each images with class "animate-image" on page
   gsap.utils.toArray(".chy-project-4-area .bg-color").forEach((el, index) => {
     let chyScl = gsap.timeline({
       scrollTrigger: {
         trigger: el,
         scrub: 1,
         start: "top 90%",
         end: "top 50%",
         toggleActions: "play none none reverse",
         markers: false,
       },
     });

     chyScl
       .set(el, { transformOrigin: "center center" })
       .fromTo(
         el,
         { xPercent: 100 },
         { xPercent: 0, duration: 0.5, immediateRender: false }
       );
   });
    
  });
  

  const countUpRef = useRef()


  return (
    <div className="chy-project-4-area pt-65 pb-110 fix">
      <div className="bg-img img-cover">
        <img src={imageBg} alt="" />
      </div>

      <span className="bg-color"></span>

      <div className="container chy-container-2">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="chy-project-4-content">
              <h2 className="chy-title-4 chy-split-in-right chy-split-text">
                <SplitText text="Global Reach, Digital Excellence – GotechDigi Leads Marketing!" />
              </h2>
              <Link to="/project-02" className="chy-pr-btn-5">
                <span className="text">learn more</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faRightLong} />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="chy-project-4-feature-wrap">
              {/* data map */}
              {featureData.map((item) => (
                <div
                  className={`chy-project-4-feature ${
                    item.id == "01" ? "has-affte-before" : ""
                  } ${item.id == "04" ? "has-affte-before2" : ""}`}
                  key={item.id}
                >
                  <div className="icon">
                    <i className={`${item.iconName}`}></i>
                  </div>
                  <h6 className="chy-heading-2 number">
                    <CountUp
                      delay={1}
                      duration={4}
                      start={1}
                      end={item.number}
                      enableScrollSpy
                      scrollSpyOnce
                      suffix={item.numberSub}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </h6>
                  <p className="chy-para-4 text">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFour