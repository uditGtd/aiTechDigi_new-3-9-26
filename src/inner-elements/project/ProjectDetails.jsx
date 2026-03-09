import React from 'react'
import image1 from '../../assets/img/project/pd-img-1.jpg'
import image2 from '../../assets/img/project/pd-img-2.jpg'
import image3 from '../../assets/img/project/pd-img-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom'

function ProjectDetails() {

    useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.chy-zoomout2').forEach((el, index) => { 
        let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 85%",
            end: "buttom 50%",
            toggleActions: "play none none reverse",
            markers: false
        }
        })
        
        tl6
        .set(el, {transformOrigin: 'center center'})
        .fromTo(el, { scale: 2}, { scale: 1, duration: 1, immediateRender: false})
    })
  });

  return (
    <div className="projects-details-area fix">

        <div className="projects-details-wrap pt-120 pb-100">
            <div className="container chy-container-1">
                <div className="row">

                    <div className="col-xl-8 col-lg-8">
                        <div className="projects-details-disc">
                            <h2 className="chy-heading-1 title chy-split-in-right chy-split-text">Digital Marketing Agency</h2>
                            <p className="chy-para-1 disc">Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in interdum nisl. Curabitur fringill turpis sed nulla auctor, laoreet mollis sem maximus. Suspendisse laoreet feugiat accumsan. Sed mo, augue a ultrices convallis, dolor metus eleifend nulla, at efficitur lacus nisi sit amet est. Morbi rutrum ullamcorper orci eu auctor. In hac habitasse platea dictumst. Integer venenatis eu arcu et convallis. Vestibulum in lacinia sem, quis aliquet turpis.</p>
                            <div className="main-img img-cover">
                                <img className="chy-zoomout2" src={image1} alt=""/>
                            </div>
                            <p className="chy-para-1 disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a libero maximus, rhoncus ex ve, sus cipit velit. Donec in interdum nisl. Curabitur fringilla turpis sed nulla auctor, laoreet mollis sem maxi mus. Suspendisse laoreet feugiat accumsan. Sed mollis, augue a ultrices convallis, dolor metus eleife nulla, at efficitur lacus nisi sit amet est. Morbi rutrum ullam corper orci eu auctor. In hac habita plat dictumst. Inte ger venenatis eu arcu et convallis. Vestibulum in lacinia sem, quis aliquet turpis. Fusce bibendum posuere velit, ut auctor leo ali quam vel.</p>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4">
                        <div className="projects-details-info">
                            <h4 className="chy-heading-1 title">project information</h4>

                            <div className="padding-wrap">
                                {/* <!-- single-item --> */}
                                <div className="projects-details-info-item">
                                    <h4 className="chy-heading-1 title">client:</h4>
                                    <a className="chy-para-1 text" href="mailto:Themeforest.validthemes.com">Themeforest.validthemes.com</a>
                                </div>

                                {/* <!-- single-item --> */}
                                <div className="projects-details-info-item">
                                    <h4 className="chy-heading-1 title">Category:</h4>
                                    <span className="chy-para-1 text">Website Design</span>
                                </div>

                                {/* <!-- single-item --> */}
                                <div className="projects-details-info-item">
                                    <h4 className="chy-heading-1 title">start date:</h4>
                                    <span className="chy-para-1 text">10 March, 2023</span>
                                </div>

                                {/* <!-- single-item --> */}
                                <div className="projects-details-info-item">
                                    <h4 className="chy-heading-1 title">end date:</h4>
                                    <span className="chy-para-1 text">10 may, 2023</span>
                                </div>

                                {/* <!-- single-item --> */}
                                <div className="projects-details-info-item">
                                    <h4 className="chy-heading-1 title">tag:</h4>
                                    <span className="chy-para-1 text">Digital Marketing Agency</span>
                                </div>

                                {/* <!-- single-item --> */}
                                <div className="projects-details-info-item">
                                    <h4 className="chy-heading-1 title">Budgets:</h4>
                                    <span className="chy-para-1 text">$10,500.00 USD</span>
                                </div>
                            </div>

                            <ul className="projects-details-info-social">
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faBasketball} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faBehance} />
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="projects-details-wrap-2 pt-135 pb-120">
            <div className="container chy-container-1">
                <div className="row g-0 align-items-center">
                    
                    <div className="col-lg-6">
                        <div className="projects-details-feature-img">
                            <div className="main-img img-cover">
                                <img className="chy-zoomout2" src={image2} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="projects-details-feature-content">
                            <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">project goals</h3>
                            <p className="chy-para-1 disc">Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in inter dum nisl. Curabitur fringill turpis sed nulla auctor, laoreet mollis sem maximu. Suspend laoreet feugiat accumsan. Sed mo, augue a ultrices convallis, dolor metus eleifen nulla, at efficitur lacus nisi sit amet est</p>

                            <ul className="projects-details-feature-list">
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Sit amet tempor mi auctor nec.
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Pellentesque aliquet est massa, sit amet tempor mi auctor nec.
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Sit amet tempor mi auctor nec
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Pellentesque aliquet est massa, sit amet tempor mi auctor nec
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <div className="projects-details-wrap-3 pt-135 pb-120">
            <div className="container chy-container-1">
                <div className="row g-0">

                    <div className="col-lg-6">
                        <div className="projects-details-feature-content">
                            <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">project goals</h3>
                            <p className="chy-para-1 disc">Suspendisse a libero maximus, rhoncus ex vel, suscipit velit. Donec in inter dum nisl. Curabitur fringill turpis sed nulla auctor, laoreet mollis sem maximu. Suspend laoreet feugiat accumsan. Sed mo, augue a ultrices convallis, dolor metus eleifen nulla, at efficitur lacus nisi sit amet est</p>

                            <ul className="projects-details-feature-list">
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Sit amet tempor mi auctor nec.
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Pellentesque aliquet est massa, sit amet tempor mi auctor nec.
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Sit amet tempor mi auctor nec
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Pellentesque aliquet est massa, sit amet tempor mi auctor nec
                                </li>
                                <li>
                                    <i className="flaticon-seen"></i>
                                    Aliquet est massa, sit amet tempor
                                </li>
                            </ul>
                        </div>
                    </div>

                                            
                    <div className="col-lg-6">
                        <div className="projects-details-feature-img">
                            <div className="main-img img-cover">
                                <img className="chy-zoomout2" src={image3} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectDetails