import React from "react";
import image1 from "../../assets/img/client/c3-img-1.png";
import image2 from "../../assets/img/client/c3-img-2.png";
import image3 from "../../assets/img/client/c3-img-3.png";
import image4 from "../../assets/img/client/c3-img-4.png";
import image5 from "../../assets/img/client/c3-img-5.png";
import Tilt from "react-parallax-tilt";

function ClientThree() {

  // data 
  const data = [
      {
          id: "01",
          image: image1
      },
      {
          id: "02",
          image: image2
      },
      {
          id: "03",
          image: image3
      },
      {
          id: "04",
          image: image4
      },
      {
          id: "05",
          image: image5
      },
  ]

  return (
    <div className="chy-client-3-area">
      <div className="container chy-container-1">
        <div className="chy-client-3-wrap">
          {/* data map */}
          {data.map((item) => (
            <Tilt key={item.id}>
              <div className="item fix" key={item.id}>
                <img className="tilt_scale" src={item.image} alt="" />
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientThree;
