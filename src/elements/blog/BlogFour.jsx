import React from 'react'
import { data } from '../../data/blog/blog-one'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import SplitText from '../../components/title-animation/SplitTextAnimation';

function BlogFour() {
  return (
    <div className="chy-blog-4-area pt-130 pb-80">
      <div className="container chy-container-2">

        <div className="section-title-wrap">
          <div className="left">
            <h5 className="chy-subtitle-4 chy-class-add">Our news & blog</h5>
            <h2 className="chy-title-4 chy-split-in-right chy-split-text">
              <SplitText text="Get More Update For News & Blog" />
            </h2>
          </div>
          <div className="right">
            <p className="chy-para-4">
              We are 100+ professional software engineers with more than 10
              years of experience in delivering superior.
            </p>
          </div>
        </div>

        <div className="row">

          {/* data slice and map */}
          {data?.slice(9, 12).map((item) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
              <div className="chy-blog-4-item">
                <div className="main-img img-cover">
                  <img src={item.image} alt="" />
                </div>
                <div className="content-wrap">
                          <h6 className="chy-heading-2 subtitle">marketing</h6>
                  <div className="inner-div">
                    <h3 className="chy-heading-2 title">
                      <Link to="/blog-details">
                        {item.name}
                      </Link>
                    </h3>
                    <span className="author chy-para-4">
                       <span>{item.authName}</span> - {item.publish}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}


          <div className="col-12 text-center pt-20">
            <Link to="/blog-02" className="chy-pr-btn-5">
              <span className="text">view all more</span>
              <span className="icon">
                <FontAwesomeIcon icon={faRightLong}/>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BlogFour