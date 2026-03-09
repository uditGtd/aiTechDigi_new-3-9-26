import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../../components/title-animation/SplitTextAnimation";

function TeamFour({data}) {

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
    <div className="chy-team-4-area pt-130 pb-100">
      <div className="container chy-contaienr-2">

        {/* section-title */}
        <div className="section-title-wrap mb-20">
          <div className="center">
            <h5 className="chy-subtitle-4 chy-class-add">Our Amazing Team</h5>
            <h2 className="chy-title-4 chy-split-in-right chy-split-text">
              <SplitText text="Meet Our Professional" /><br />
              <SplitText text="Team Members" />
            </h2>
          </div>
          {/* <div className="right">
            <Link to="/team-02" className="chy-pr-btn-5">
              <span className="text">View all more</span>
              <span className="icon">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
            </Link>
          </div> */}
        </div>

        <div className="row">
          {/* data map */}
          {data.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={item.id}>

              <div
                className={`chy-team-2-item ${index == 0 && "asslideupcta"} ${
                  index == 2 && "asslideupcta"
                } ${index == 3 && "asslideupcta"} ${index == 5 && "asslideupcta"}`}
              >
                <div className="main-img">
                  <img src={item.image} alt="" style={{borderTopLeftRadius:"50px",borderTopRightRadius:"50px"}}/>
                  <div className="content-wrap text-center">
                    <Link to="#" className="chy-haeding-1 name">{item.name}</Link>
                    <span className="bio chy-para-1">{item.designation}</span>
                  </div>
                  <ul className="social-links">
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
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default TeamFour;
