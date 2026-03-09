import React from 'react'
import icon from "../../assets/img/icon/subtitle-icon.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faUser } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data/blog/blog-one';
import SplitText2 from '../../components/title-animation/SplitTextAnimation2';

function BlogTwo() {
  return (
    <>
      <div className="chy-blog-2-area pt-130 pb-100">
        <div className="container chy-container-1">

          {/* section-title */}
          <div className="section-title-wrap mb-35 text-center">
            <h3 className="chy-subtitle-2 wow fadeInRight">
              <img
                src={icon}
                className="icon"
                alt=""
              />{" "}
              our news
            </h3>
            <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
              <SplitText2 text="recent blog posts" />
            </h2>
          </div>

          <div className="row">

             {/* blog data slice and map */}
            {data?.slice(3, 6).map((item)=> 
              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="chy-blog-2-item">
                  <div className="main-img img-cover">
                    <img src={item?.image} alt="" />
                  </div>
                  <span className="chy-heading-1 categorie">web design</span>
                  <h2 className="chy-heading-1 title">
                    <Link to="/blog-details">
                      {item?.name}
                    </Link>
                  </h2>
                  <div className="chy-blog-2-item-meta">
                    <span className="author chy-para-2">
                      <FontAwesomeIcon icon={faUser} /> by {item?.authName}
                    </span>
                    <span className="date chy-para-2">
                      <FontAwesomeIcon icon={faCalendarDay} />
                      {item?.publish}
                    </span>
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

export default BlogTwo