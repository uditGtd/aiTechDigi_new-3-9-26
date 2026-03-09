import React from 'react'
import bgImg1 from "../../assets/img/blog/b1-bg-1.png";
import { Link } from 'react-router-dom';
import { data } from '../../data/blog/blog-one';
import SplitText from '../../components/title-animation/SplitTextAnimation';

function BlogOne() {
  return (
    <>
      <div
        className="chy-blog-1-area pb-70 bg-default fix"
        style={{ backgroundImage: `url(${bgImg1})` }}
      >
        <div className="container chy-container-1">

          {/* section-title */}
          <div className="section-title-wrap text-center mb-30">
            <h5
              className="chy-subtitle-1"
              data-aos="fade-down"
              data-aos-offset="5"
              data-aos-duration="3000"
              data-aos-once="true"
            >
              our blogs
            </h5>
            <h2 className="chy-title-1  chy-split-in-right chy-split-text">
              <SplitText text="The Latest News & Blog" />
            </h2>
          </div>

          <div className="row">

            {/* blog slice and map */}
            {data?.slice(0, 3).map((item)=>     
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 ">
              <div className="chy-blog-1-item">
                <div className="main-img img-cover">
                  <img src={item.image} alt="" />
                </div>
                <span className="chy-para-1 date">{item.publish}</span>
                <h4 className="chy-heading-1 title">
                  <Link to="/blog-details" className="chy-blog-1-link">
                    {item.name}
                  </Link>
                </h4>
                <p className="chy-para-1 disc">
                  {item.brief}
                </p>
                <div className="author">
                  <div className="img img-cover">
                    <img src={item.authImg} alt="" />
                  </div>
                  <span className="chy-heading-1 name">by {item.authName}</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            )}
            

          </div>
        </div>
      </div>
    </>
  );
}

export default BlogOne