import React from 'react'
import image1 from '../../assets/img/process/career-details-img-1.jpg'
import { GiCheckMark } from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CareerDetails() {
  return (
    <div className="career-details-page-area pt-120 pb-70">
        <div className="container chy-container-1">
            <div className="row">

                {/* left-contnet */}
                <div className="col-lg-8">
                    <div className="career-details-page-content mb-50">
                        <div className="main-img img-cover">
                            <img src={image1} alt="" />
                        </div>
                        <h3 className="chy-heading-1 title">digital marketer</h3>

                        <p className="chy-para-1 disc">Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel, imperdiet ut mauris. Ut ultricies arcu risus, malesuada efficitur orci euismod in. Proin eleifend est risus, ac sodales nulla mollis vel. Etiam condimentum placerat mi, sed cursus augue dignissim sit amet. Vivamus ac dolor darius, pharetra lorem ac, tristique metus. Quisque leo ante, tempor in quam in, vestibulum vulputate enim. Nullam porta nulla ut ex aliquet molestie.</p>

                        <p className="chy-para-1 disc">Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna.</p>

                        <h3 className="chy-heading-1 subtitle">Job Responsibilities</h3>
                        
                        <p className="chy-para-1 disc">Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel, imperdiet ut mauris.</p>

                        <ul className="career-details-page-content-list mb-20">
                            <li><GiCheckMark /> Work with BAs, product managers and tech teams to lead the Product Design</li>
                            <li><GiCheckMark /> Accurately estimate design tickets during planning sessions.</li>
                            <li><GiCheckMark /> Contribute to sketching sessions involving non-designersCreate, and pattern libraries.</li>
                            <li><GiCheckMark /> Interface patterns is better for UX than reinventing the wheel</li>
                        </ul>


                        <h3 className="chy-heading-1 subtitle">Skills & Qualifications</h3>

                        <ul className="career-details-page-content-list mb-20">
                            <li><GiCheckMark /> We don't care about the degrees but as a mid-level designer, we expect that you have a minimum of 5 - 8 years of Job experience.</li>
                            <li><GiCheckMark /> Expertise in design tools</li>
                            <li><GiCheckMark /> Readability of the project documentation & ability to design regarding this.</li>
                            <li><GiCheckMark /> Experience to design products for "Envato/U18" is a plus</li>
                            <li><GiCheckMark /> Good Portfolio Must.</li>
                            <li><GiCheckMark /> Strong communication, collaboration, and analytical skills.</li>
                            <li><GiCheckMark /> Good attention to detail, time management, is self-motivated, and takes ownership of responsibilities.</li>
                            <li><GiCheckMark /> Ability to work fast and deliver projects on time.</li>
                        </ul>

                        <h3 className="chy-heading-1 subtitle">Benefits</h3>

                        <ul className="career-details-page-content-list mb-20">
                            <li><GiCheckMark /> Due time salary</li>
                            <li><GiCheckMark /> 2 Festive bonus after completing 6 months.</li>
                            <li><GiCheckMark /> Yearly Tour.</li>
                            <li><GiCheckMark /> Performance / Project Bonus.</li>
                            <li><GiCheckMark /> Yearly Salary Review.</li>
                            <li><GiCheckMark /> 16 Days Paid Leave (Sick and Casual).</li>
                            <li><GiCheckMark /> Opportunity To Learn & Grow.</li>
                        </ul>
                        <h3 className="chy-heading-1 subtitle">Salary Range</h3>

                        <span className="chy-heading-1 salary">$15000 USD - 20000 USD</span>

                    </div>
                </div>

                {/* right-sidebar */}
                <div className="col-lg-4">
                    <div className="career-details-page-sidebar">
                        <h4 className="chy-heading-1 title">Job Summery</h4>

                        <div className="padding-wrap">

                            {/* single-item */}
                            <div className="projects-details-info-item">
                                <h4 className="chy-heading-1 title"><i className="fi fi-ts-land-layer-location"></i> Location:</h4>
                                <span className="chy-para-1 text">San Francissco, USA</span>
                            </div>

                            {/* single-item */}
                            <div className="projects-details-info-item">
                                <h4 className="chy-heading-1 title"><i className="fi fi-rr-briefcase"></i> Job Title:</h4>
                                <span className="chy-para-1 text">Full Time work</span>
                            </div>

                            {/* single-item */}
                            <div className="projects-details-info-item">
                                <h4 className="chy-heading-1 title"><i className="fi fi-ts-clock-up-arrow"></i> Experience:</h4>
                                <span className="chy-para-1 text">3 - 5 Years</span>
                            </div>

                            {/* single-item */}
                            <div className="projects-details-info-item">
                                <h4 className="chy-heading-1 title"><i className="fi fi-br-female"></i> Gender:</h4>
                                <span className="chy-para-1 text">Both Males are allowed to apply</span>
                            </div>

                            {/* single-item */}
                            <div className="projects-details-info-item">
                                <h4 className="chy-heading-1 title"><i className="fi fi-rr-circle-user"></i> Age:</h4>
                                <span className="chy-para-1 text">18 to 40 Years</span>
                            </div>

                            {/* single-item */}
                            <div className="projects-details-info-item">
                                <h4 className="chy-heading-1 title"><i className="fi fi-tr-clock-five"></i> Working Time:</h4>
                                <span className="chy-para-1 text">08:00 AM to 06:00 PM</span>
                            </div>

                            {/* single-item */}
                            <div className="projects-details-info-item">
                                <h4 className="chy-heading-1 title"><i className="fi fi-rr-calendar-days"></i> Deadline:</h4>
                                <span className="chy-para-1 text">20 June, 2023</span>
                            </div>
                        </div>

                        <div className="btn-wrap">
                            <Link to="/job-apply" className="chy-pr-btn-1">
                                <span className="text">
                                    job apply now
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CareerDetails