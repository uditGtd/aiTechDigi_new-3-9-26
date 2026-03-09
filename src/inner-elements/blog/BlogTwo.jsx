import React from 'react'
import img1 from '../../assets/img/blog/b1-img-1.png'
import auth1 from '../../assets/img/blog/b1-author-6.png'
import img2 from '../../assets/img/blog/b1-img-2.png'
import auth2 from '../../assets/img/blog/b1-author-5.png'
import img3 from '../../assets/img/blog/b1-img-3.png'
import auth3 from '../../assets/img/blog/b1-author-4.png'
import img4 from '../../assets/img/blog/b1-img-4.jpg'
import auth4 from '../../assets/img/blog/b1-author-3.png'
import img5 from '../../assets/img/blog/b1-img-5.jpg'
import auth5 from '../../assets/img/blog/b1-author-2.png'
import img6 from '../../assets/img/blog/b1-img-6.jpg'
import auth6 from '../../assets/img/blog/b1-author-7.png'
import img7 from '../../assets/img/blog/b1-img-7.jpg'
import auth7 from '../../assets/img/blog/b1-author-8.png'
import img8 from '../../assets/img/blog/b1-img-8.jpg'
import auth8 from '../../assets/img/blog/b1-author-9.png'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function BlogTwo() {
  return (
    <div className="blog-page-2-area pt-120 pb-70">
            <div className="container chy-container-1">
                <div className="row">

                    {/* left-content */}
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="blog-page-2-item mb-20">
                            <div className="row">

                                {/* single-blog-item */}
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="chy-blog-1-item">
                                        <div className="main-img img-cover">
                                            <img src={img1} alt="" />
                                        </div>
                                        <span className="chy-para-1 date">january 14, 2025</span>
                                        <h4 className="chy-heading-1 title">
                                            <Link to="/blog-details" >Affordable website designing services in Naraina</Link>
                                        </h4>
                                        <p className="chy-para-1 disc">
                                            Affordable website designing services in Naraina are essential for small businesses, startups, and entrepreneurs looking to establish a strong digital presence without overspending. This article...
                                        </p>
                                        {/* <div className="author">
                                            <div className="img img-cover">
                                                <img src={auth1} alt="" />
                                            </div>
                                            <span className="chy-heading-1 name">by john week</span>
                                            <span className="line"></span>
                                        </div> */}
                                    </div>
                                </div>
            
            
                            </div>
                        </div>
                    </div>

                    {/* sidebar */}
                    <Sidebar />

                </div>
            </div>
        </div>
  )
}

export default BlogTwo