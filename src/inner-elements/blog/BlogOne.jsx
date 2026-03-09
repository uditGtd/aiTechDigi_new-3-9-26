import React from 'react'
import image1 from '../../assets/img/blog/bp-img-1.jpg'
import image2 from '../../assets/img/blog/bp-img-2.jpg'
import image3 from '../../assets/img/blog/bp-img-3.jpg'
import image4 from '../../assets/img/blog/bp-img-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function BlogOne() {
  return (
    <div className="blog-page-area pt-120 pb-70">
        <div className="container chy-container-1">
            <div className="row">

                {/* left-content */}
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <div className="blog-page-item-wrap mb-50">

                        {/* signle-item */}
                        <div className="blog-page-item">
                            <div className="main-img img-cover">
                                <img src={image1} alt="" />
                            </div>
                            <div className="meta">
                                <span className="author chy-para-1" ><i className="fi fi-rs-circle-user"></i>admin</span>
                                <span className="author chy-para-1" ><i className="fi fi-rr-comment-alt-middle"></i>comments(0)</span>
                                <span className="author chy-para-1" ><i className="fi fi-rs-calendar"></i>20 December, 2023</span>
                            </div>
                            <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">
                                <Link to="/blog-details">Social Media Marketing Strategies for Small Business</Link>
                            </h3>
                            <p className="chy-para-1 disc">Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in inter dum nisl. Curabitur fringill turpis sed nulla auctor, laoreet mollis sem maximu. Suspen laoreet feugiat accumsan. Sed mo, augue a ultrices convallis, dolor metus eleif end nulla, at efficitur lacus nisi sit amet est</p>
                            <Link to="/blog-details" className="chy-pr-btn-1">
                                <span className="text">
                                    read more
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                        </div>

                        {/* signle-item */}
                        <div className="blog-page-item">
                            <div className="main-img img-cover">
                                <img src={image2} alt="" />
                            </div>
                            <div className="meta">
                                <span className="author chy-para-1" ><i className="fi fi-rs-circle-user"></i>admin</span>
                                <span className="author chy-para-1" ><i className="fi fi-rr-comment-alt-middle"></i>comments(0)</span>
                                <span className="author chy-para-1" ><i className="fi fi-rs-calendar"></i>20 December, 2023</span>
                            </div>
                            <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">
                                <Link to="/blog-details">influencer marketing trends 2023: what you 
                                    need know
                                </Link>
                            </h3>
                            <p className="chy-para-1 disc">Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in inter dum nisl. Curabitur fringill turpis sed nulla auctor, laoreet mollis sem maximu. Suspen laoreet feugiat accumsan. Sed mo, augue a ultrices convallis, dolor metus eleif end nulla, at efficitur lacus nisi sit amet est</p>
                            <Link to="/blog-details" className="chy-pr-btn-1">
                                <span className="text">
                                    read more
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                        </div>

                        {/* signle-item */}
                        <div className="blog-page-item">
                            <div className="main-img img-cover">
                                <img src={image3} alt="" />
                            </div>
                            <div className="meta">
                                <span className="author chy-para-1" ><i className="fi fi-rs-circle-user"></i>admin</span>
                                <span className="author chy-para-1" ><i className="fi fi-rr-comment-alt-middle"></i>comments(0)</span>
                                <span className="author chy-para-1" ><i className="fi fi-rs-calendar"></i>20 December, 2023</span>
                            </div>
                            <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">
                                <Link to="/blog-details">SEO: Which Digital Advertis ing Strategy Is Right 
                                    for You?
                                </Link>
                            </h3>
                            <p className="chy-para-1 disc">Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in inter dum nisl. Curabitur fringill turpis sed nulla auctor, laoreet mollis sem maximu. Suspen laoreet feugiat accumsan. Sed mo, augue a ultrices convallis, dolor metus eleif end nulla, at efficitur lacus nisi sit amet est</p>
                            <Link to="/blog-details" className="chy-pr-btn-1">
                                <span className="text">
                                    read more
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                        </div>

                        {/* signle-item */}
                        <div className="blog-page-item">
                            <div className="main-img img-cover">
                                <img src={image4} alt="" />
                            </div>
                            <div className="meta">
                                <span className="author chy-para-1" ><i className="fi fi-rs-circle-user"></i>admin</span>
                                <span className="author chy-para-1" ><i className="fi fi-rr-comment-alt-middle"></i>comments(0)</span>
                                <span className="author chy-para-1" ><i className="fi fi-rs-calendar"></i>20 December, 2023</span>
                            </div>
                            <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">
                                <Link to="/blog-details">Get the most out og the creativity</Link>
                            </h3>
                            <p className="chy-para-1 disc">Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in inter dum nisl. Curabitur fringill turpis sed nulla auctor, laoreet mollis sem maximu. Suspen laoreet feugiat accumsan. Sed mo, augue a ultrices convallis, dolor metus eleif end nulla, at efficitur lacus nisi sit amet est</p>
                            <Link to="/blog-details" className="chy-pr-btn-1">
                                <span className="text">
                                    read more
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                        </div>

                    </div>
                    <div className="page-next-prev-btn text-center pb-30">
                        <Link aria-label="page number"><i className="fi fi-rs-angle-double-left"></i></Link>
                        <span className="active">1</span>
                        <Link aria-label="page number">2</Link>
                        <Link aria-label="page number">3</Link>
                        <Link aria-label="page number"><i className="fi fi-rs-angle-double-right"></i></Link>
                    </div>
                </div>

                {/* sidebar */}
                <Sidebar />

            </div>
        </div>
    </div>
  )
}

export default BlogOne