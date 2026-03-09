import React from 'react'
import { data } from '../../data/blog/blog-one'
import { Link } from 'react-router-dom';
import Tilt from "react-parallax-tilt";
import SplitText3 from '../../components/title-animation/SplitTextAnimation3';

function BlogThree() {
  return (
    <div className="chy-blog-3-area pt-60 pb-100">
      <div className="container chy-container-1">

        {/* section-title */}
        <div className="section-title-wrap mb-50 text-center">
          <h3 className="chy-subtitle-3 wow fadeInDown ">recent blog</h3>
          <h2 className="chy-title-3 chy-split-in-right-2 chy-split-text">
            <SplitText3 text="update journal" />
          </h2>
        </div>

        <div className="row">

          {/* data slice and map */}
          {data?.slice(6, 9).map((item) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.8}
                glareColor="#ffffff"
                glarePosition="top"
                perspective={3500}
              >
                <div className="chy-blog-3-item tilt_scale" data-tilt-max="1">
                  <span className="chy-heading-1 date">
                    {item.publishDate} <br /> {item.publishMon}
                  </span>
                  <div className="main-img img-cover">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-wrap">
                    <div className="chy-blog-3-item-meta">
                      <span className="chy-heading-1 author">
                        <i className="fi fi-rr-user"></i> {item.authName}
                      </span>
                      <span className="chy-heading-1 comment">
                        <i className="fi fi-rr-comment-alt-middle"></i>{" "}
                        {item.comment} comments
                      </span>
                    </div>
                    <h5 className="chy-heading-1 title">
                      <Link to="/blog-details">{item.name}</Link>
                    </h5>
                    <p className="chy-para-3 disc">{item.brief}</p>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}

          {/* <!-- all-btn --> */}
          <div className="col-12 text-center pt-45">
            <span className="chy-blog-3-btn">
              Want to see our Recent News & Updates.{" "}
              <Link to="/blog-01">Click here to View More</Link>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BlogThree