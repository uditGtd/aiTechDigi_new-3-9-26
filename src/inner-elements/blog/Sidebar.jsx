import React from 'react'
import { Link } from 'react-router-dom'
import postImg1 from '../../assets/img/blog/recent-post-img-1.jpg'
import postImg2 from '../../assets/img/blog/recent-post-img-2.jpg'
import postImg3 from '../../assets/img/blog/recent-post-img-3.jpg'
import postImg4 from '../../assets/img/blog/recent-post-img-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="blog-2-page-sidebar mb-50">

            {/* sidebar-box */}
            <div className="sidebar-box mb-30 wow fadeInUp">
                <h4 className="sidebar-box-title chy-heading-1" >search</h4>
                <form className="sidebar-search-box">
                    <input type="search" className="search-input" name="search" placeholder="Search here..." />
                    <button type="submit" aria-label="search" className="search-btn"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </div>

            {/* sidebar-box */}
            <div className="sidebar-box mb-30 wow fadeInUp">
                <h4 className="sidebar-box-title chy-heading-1" >Categories</h4>
                <div className="sidebar-box-wrap">

                    {/* category-menu */}
                    <ul className="sidebar-category has-number">

                        <li className="wow fadeInUp">
                            <Link>
                                <span className="text">
                                    Digital Marketing
                                </span>
                                <span className="number" >0</span>
                            </Link>
                        </li>

                        <li className="wow fadeInUp">
                            <Link>
                                <span className="text">
                                    Web Development
                                </span>
                                <span className="number" >0</span>
                            </Link>
                        </li>

                        <li className="wow fadeInUp">
                            <Link>
                                <span className="text">
                                    Clock Fly Strategy
                                </span>
                                <span className="number" >0</span>
                            </Link>
                        </li>

                        <li className="wow fadeInUp">
                            <Link>
                                <span className="text">
                                    Brand Design Identity
                                </span>
                                <span className="number" >0</span>
                            </Link>
                        </li>

                        <li className="wow fadeInUp">
                            <Link>
                                <span className="text">
                                    Email Marketing
                                </span>
                                <span className="number" >0</span>
                            </Link>
                        </li>

                        <li className="wow fadeInUp">
                            <Link>
                                <span className="text">
                                    Digital Strategy
                                </span>
                                <span className="number" >0</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

            {/* sidebar-box */}
            {/* <div className="sidebar-box mb-30 wow fadeInUp">
                <h4 className="sidebar-box-title chy-heading-1" >recent posts</h4>
                <div className="sidebar-box-wrap">
                    <div className="latest-post-item-wrap">
                        
                        <div className="latest-post-item ">
                            <div className="img">
                                <Link className="d-inline-block img-cover" to="/blog-details">
                                    <img src={postImg1} alt="img" />
                                </Link>
                            </div>
                            <div className="content">
                                <span className="date chy-para-1"><i className="fal fa-calendar-alt"></i> 20 December, 2024</span>
                                <h6 className="title chy-heading-1 " >
                                    <Link to="/blog-details">Making a Statement with Your Visual Identity</Link>
                                </h6>
                            </div>
                        </div>

                        <div className="latest-post-item ">
                            <div className="img">
                                <Link className="d-inline-block img-cover" to="/blog-details">
                                    <img src={postImg2} alt="img" />
                                </Link>
                            </div>
                            <div className="content">
                                <span className="date chy-para-1"><i className="fal fa-calendar-alt"></i> 20 December, 2024</span>
                                <h6 className="title chy-heading-1 " >
                                    <Link to="/blog-details">In the Fast: Accelerating Your Business Growth</Link>
                                </h6>
                            </div>
                        </div>

                        <div className="latest-post-item ">
                            <div className="img">
                                <Link className="d-inline-block img-cover" to="/blog-details">
                                    <img src={postImg3} alt="img" />
                                </Link>
                            </div>
                            <div className="content">
                                <span className="date chy-para-1"><i className="fal fa-calendar-alt"></i> 20 December, 2024</span>
                                <h6 className="title chy-heading-1 " >
                                    <Link to="/blog-details">Brands That Are Making Waves in the Market</Link>
                                </h6>
                            </div>
                        </div>

                        <div className="latest-post-item ">
                            <div className="img">
                                <Link  className="d-inline-block img-cover" to="/blog-details">
                                    <img src={postImg4} alt="img" />
                                </Link>
                            </div>
                            <div className="content">
                                <span className="date chy-para-1"><i className="fal fa-calendar-alt"></i> 20 December, 2024</span>
                                <h6 className="title chy-heading-1 " >
                                    <Link  to="/blog-details">Navigating the Ever-Changing Online Lands</Link>
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}


            {/* sidebar-box */}
            {/* <div className="sidebar-box wow fadeInUp">
                <h4 className="sidebar-box-title chy-heading-1" >tags</h4>
                <div className="sidebar-box-wrap">

                    <div className="sidebar-tag">
                        <Link>marketing</Link>
                        <Link>technology</Link>
                        <Link>agency</Link>
                        <Link>digital agency</Link>
                        <Link>startup</Link>
                        <Link>digital</Link>
                        <Link>product</Link>
                        <Link>on sale</Link>
                        <Link>featured</Link>
                        <Link>trendy</Link>
                        <Link>marketing</Link>
                        <Link>business</Link>
                    </div>

                </div>
            </div> */}

        </div>
    </div>
  )
}

export default Sidebar