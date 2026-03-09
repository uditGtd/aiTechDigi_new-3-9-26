import React from "react";
import playIcon from "../../assets/img/video/plybtn-text.png";
import img1 from "../../assets/img/video/v1-img-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Fancybox from "../../components/utiles/Fancybox";
import SplitText from "../../components/title-animation/SplitTextAnimation";

function VideoPopupOne() {

  useGSAP(() => {
    
    // zoomout effect
    gsap.utils.toArray(".chy-zoomout2").forEach((el, index) => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 85%",
          end: "buttom 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl6
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { scale: 2 },
          { scale: 1, duration: 1, immediateRender: false }
        );
    });

  });

  return (
    <div className="chy-video-1-area img-cover">
      <div className="content-wrap">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <a
            href="https://youtu.be/9No-FiEInLA?si=RY99ck2ur9zX4WSA"
            data-fancybox
            data-width="900"
            data-height="500"
            className="chy-plybtn-2 popup-video chy-zoomout2"
          >
            <FontAwesomeIcon icon={faPlay} />
            <img className="text-img" src={playIcon} alt="" />
          </a>
        </Fancybox>
        <h4 className="chy-heading-1 title chy-split-in-right chy-split-text">
          <SplitText text="We Help Your Business To Become Stronger" />
        </h4>
      </div>
      <img className="chy-zoomout2" src={img1} alt="" />
    </div>
  )
}

export default VideoPopupOne;
