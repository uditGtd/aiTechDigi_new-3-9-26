import React from "react";
import logo1 from "../../assets/img/client/logo-1.png";
import logo2 from "../../assets/img/client/logo-2.png";
import logo3 from "../../assets/img/client/logo-3.png";
import logo4 from "../../assets/img/client/logo-4.png";
import logo5 from "../../assets/img/client/logo-5.png";
import logo6 from "../../assets/img/client/logo-6.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../../components/title-animation/SplitTextAnimation";


function ClientOne() {

  useGSAP(() => {

    // For each images with class "animate-image" on page
    gsap.utils.toArray('.chy-slideinright').forEach((el, index) => { 
      let tl4 = gsap.timeline({
        scrollTrigger: {
        trigger: el,
        scrub: 1,
        start: "top 90%",
        end: "buttom 60%",
        toggleActions: "play none none reverse",
        markers: false
        }
      })
      
      tl4
      .set(el, {transformOrigin: 'center center'})
      .from(el, { x: "+=100"}, { x:0, duration: 1, immediateRender: false})
    })  
  });

  return (
    <>
      <div className="chy-client-1-area pb-80 fix">
        <div className="container chy-container-1">
          <div className="chy-client-1-wrap ">
            <div className="row align-items-center">

              {/* left-content */}
              <div className="col-lg-5">
                <div className="chy-client-1-content chy-slideinright">
                  <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">
                    <SplitText text="our investors" />
                  </h3>
                  <p
                    className="chy-para-1 disc"
                    data-aos="fade-left"
                    data-aos-offset="5"
                    data-aos-duration="3000"
                    data-aos-once="true"
                  >
                    Every pleasure is to be welcomed and <br /> every pain
                    avoided.certain circumstances
                  </p>
                </div>
              </div>

              {/* right-logo  */}
              <div className="col-lg-7">
                <div className="chy-client-1-logo chy-slideinright">
                  <div className="logo-item">
                    <img className="logo-1" src={logo1} alt="" />
                    <img className="logo-2" src={logo1} alt="" />
                  </div>
                  <div className="logo-item">
                    <img className="logo-1" src={logo2} alt="" />
                    <img className="logo-2" src={logo2} alt="" />
                  </div>
                  <div className="logo-item">
                    <img className="logo-1" src={logo3} alt="" />
                    <img className="logo-2" src={logo3} alt="" />
                  </div>
                  <div className="logo-item">
                    <img className="logo-1" src={logo4} alt="" />
                    <img className="logo-2" src={logo4} alt="" />
                  </div>
                  <div className="logo-item">
                    <img className="logo-1" src={logo5} alt="" />
                    <img className="logo-2" src={logo5} alt="" />
                  </div>
                  <div className="logo-item">
                    <img className="logo-1" src={logo6} alt="" />
                    <img className="logo-2" src={logo6} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientOne;
