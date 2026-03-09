import React from 'react'
import image from '../../assets/img/icon/marquee-4-icon-2.png'

function MarqueeFive() {

  // data 
  const data = [
      {
          id: "01",
          title: "Marketing",
      },
      {
          id: "02",
          title: "digital",
      },
      {
          id: "03",
          title: "strategy",
      },
      {
          id: "04",
          title: "optimization",
      },
      {
          id: "05",
          title: "seo",
      },
      {
          id: "06",
          title: "design",
      },
      {
          id: "07",
          title: "Marketing",
      },
      {
          id: "08",
          title: "digital",
      },
      {
          id: "09",
          title: "strategy",
      },
      {
          id: "10",
          title: "optimization",
      },
      {
          id: "11",
          title: "seo",
      },
      {
          id: "12",
          title: "design",
      },
  ]

  return (
    <div className="chy-marquee-5-area">
      <div className="chy-marquee-5-wrap">
        {/* data map  */}
        {data.map((item) => (
          <div key={item.id} className="chy-marquee-5-item">
            <img src={image} className="icon" alt="" />
            <h5
              className={`chy-heading-2 ${
                parseInt(item.id) % 2 == 0 ? "title-1" : "title-2"
              }`}
            >
              {item.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeFive