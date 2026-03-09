import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function CtaFive() {

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray(".chy-cta-5-area").forEach((el, index) => {
      let chyScl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 95%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      chyScl
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { scale: 0 },
          { scale: 1, duration: 0.5, immediateRender: false }
        );
    });
  });

  return (
    <div className="chy-cta-5-area">
        <div className="container chy-container-1">
            <form className="chy-cta-5-form" >
                <input type="email" placeholder="enter your email address" />
                <button type="button" className="chy-pr-btn-5">
                    <span className="text">
                        subcribe now
                    </span>
                    <span className="icon">
                        <FontAwesomeIcon icon={faRightLong}/>
                    </span>
                </button>
            </form>
        </div>
    </div>
  )
}

export default CtaFive