import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function TeamCard({ item, index }) {

  useGSAP(() => {
    // scroll animatinon
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
  
  return (
    <div
      class={`chy-team-2-item ${index == 0 ? "asslideupcta" : ""} ${
        index == 2 ? "asslideupcta" : ""
      }`}
    >
      <div class="main-img">
        <img src={item.image} alt="" />
        <div class="content-wrap text-center">
          <Link class="chy-haeding-1 name">{item.name}</Link>
          <span class="bio chy-para-1">{item.designation}</span>
        </div>
        <ul class="social-links">
          <li>
            <Link>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
