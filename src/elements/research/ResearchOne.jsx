import React from 'react'
import bgImg1 from "../../assets/img/research/r1-bg-img-1.png";
import img1 from "../../assets/img/research/r1-img-1.png";
import img2 from "../../assets/img/research/r1-img-2.png";
import img3 from "../../assets/img/research/r1-img-3.png";
import img4 from "../../assets/img/research/r1-img-4.png";
import imgIcon1 from "../../assets/img/research/r1-icon-1.png";
import imgIcon2 from "../../assets/img/research/r1-icon-2.png";
import imgIcon3 from "../../assets/img/research/r1-icon-3.png";
import imgIcon4 from "../../assets/img/research/r1-icon-4.png";
import SplitText from '../../components/title-animation/SplitTextAnimation';


function ResearchOne() {

  const data = [
    {
      id: "01",
      img: img1,
      icon: imgIcon1,
      title: "Digital Marketing",
      disc: "Every pleasure is to be welcomed and every pain avoided."
    },
    {
      id: "02",
      img: img2,
      icon: imgIcon2,
      title: "SEO Optimization",
      disc: "Every pleasure is to be welcomed and every pain avoided."
    },
    {
      id: "03",
      img: img3,
      icon: imgIcon3,
      title: "Product Research",
      disc: "Every pleasure is to be welcomed and every pain avoided."
    },
    {
      id: "04",
      img: img4,
      icon: imgIcon4,
      title: "Web Development",
      disc: "Every pleasure is to be welcomed and every pain avoided."
    },
  ]

  return (
    <div
      className="chy-research-1-area pt-105 pb-80 bg-default fix"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <div className="container chy-container-1">

        {/* section-title  */}
        <div className="section-title-wrap mb-35 text-center">
          <h5
            className="chy-subtitle-1"
            data-aos="fade-down"
            data-aos-offset="5"
            data-aos-duration="3000"
              data-aos-once="true"
          >
            consulting services
          </h5>
          <h2 className="chy-title-1 chy-split-in-right chy-split-text">
            <SplitText text="Potential Research" />
          </h2>
          <p className="chy-section-para-1">
            Every pleasure is to be welcomed and every pain avoided. certain
            circumstances and owing to the claims
          </p>
        </div>

        <div className="row">

          {/* data map  */}
          {
            data.map((item)=>
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="chy-research-1-item">
                  <div className="main-img">
                    <img src={item.img} alt="" />
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                  </div>
                  <h5 className="chy-heading-1 title">{item.title}</h5>
                  <p className="chy-para-1 disc">
                    {item.disc}
                  </p>
                </div>
              </div>
            )
          }
          

        </div>
      </div>
    </div>
  )
}

export default ResearchOne