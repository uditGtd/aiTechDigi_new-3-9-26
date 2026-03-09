import React, { useRef } from "react";
import image1 from "../../assets/img/services/s4-img-1.png";
import image2 from "../../assets/img/services/s4-img-2.png";
import image3 from "../../assets/img/services/s4-img-3.png";
import { Link } from "react-router-dom";
import '@flaticon/flaticon-uicons/css/all/all.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

function ServicesFour() {

  // data
  const data = [
    {
      id: "1",
      name: "Strategy & Research",
      disc: "We are 100+ professional software engineers with more than 10 years of experience in",
      list1: "Design should Srich our day",
      list2: "Visual Design Challenges",
      image: image1,
    },
    {
      id: "2",
      name: "Web Interation Design",
      disc: "We are 100+ professional software engineers with more than 10 years of experience in",
      list1: "Design should Srich our day",
      list2: "Visual Design Challenges",
      image: image2,
    },
    {
      id: "3",
      name: "Business Visible",
      disc: "We are 100+ professional software engineers with more than 10 years of experience in",
      list1: "Design should Srich our day",
      list2: "Visual Design Challenges",
      image: image3,
    },
  ]

  // services card hover active class add and remove
  const servicesCards = useRef([]);

  const handleActiveCard = (e) => {
    servicesCards.current
      .filter((item, index) => index !== e)
      .map((item) => item.classList.remove("active"));

    servicesCards.current[e].classList.add("active");
  }
    
  return (
    <div className="chy-services-4-area">
      <div className="chy-services-4-wrap">

        {/* services data map */}
        {data.map((item, index) => (
          <div
            ref={(el) => (servicesCards.current[index + 1] = el)}
            onMouseOver={() => handleActiveCard(index + 1)}
            className={`chy-services-4-item ${item.id == "2" ? "active" : ""} ${
              item.id == "3" ? "has-black" : ""
            }`}
            key={item.id}
          >
            <div className="main-img ">
              <div className="rotatedscal img-cover">
                <img className="" src={item.image} alt="" />
              </div>
            </div>
            <h4 className="chy-heading-1 title">
              <Link to="/service-details">{item.name}</Link>
            </h4>
            <p className="chy-para-3 disc">{item.disc}</p>
            <ul className="chy-services-4-item-list mb-30">
              <li>
                <i className="fi fi-bs-check"></i>
                {item.list1}
              </li>
              <li>
                <i className="fi fi-bs-check"></i>
                {item.list2}
              </li>
            </ul>
            <Link to="/service-details" className="s4-btn">
              <FontAwesomeIcon icon={faLongArrowRight} />
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ServicesFour;
