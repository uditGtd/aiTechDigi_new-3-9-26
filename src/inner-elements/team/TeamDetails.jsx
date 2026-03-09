import React from 'react'
import mainImage from '../../assets/img/team/td-img-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function TeamDetails() {
  return (
    <div className="team-details-area pt-120 pb-120">
        <div className="container h1-container">
            
            <div className="team-details-person-wrap mb-50">

                {/* img */}
                <div className="team-details-person-img"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true">
                    <img src={mainImage} alt="" />
                </div>

                {/* bio */}
                <div className="team-details-person-bio">
                    <h5 className="name chy-heading-1" >leslie alexander</h5>
                    <span className="skill-name chy-heading-1">Digital Marketer</span>
                    <ul className="team-details-person-bio-list mb-30">
                        <li>
                            <span>postion:</span>
                            web designer
                        </li>
                        <li>
                            <span>experience:</span>
                            15+ years
                        </li>
                        <li>
                            <span>location:</span>
                            12/A, NYC, USA
                        </li>
                        <li>
                            <span>phone:</span>
                            +123 789 4560
                        </li>
                    </ul>
                    
                    {/* social */}
                    <ul className="team-details-person-social"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-once="true">
                        <h6 className="title  chy-heading-1" >social  media</h6>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faXTwitter} />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faDribbble} />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faBehance} />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="content-wrap">

                    {/* short bio */}
                    <div className="team-details-person-short-bio mb-25">
                        <h5 className="title chy-heading-1" >career guideline</h5>
                        <p className="text chy-para-1">Lorem ipsum dolor sit amet consectetur. Sed risus lectu ac semper id proin mi nulla tellus. Tellus fermentum mor a nisi ut amet leo fermentum eget. Neque orci feugiat tempus diam. Aliquam in gravida pulvinar arcu</p>
                    </div>

                    {/* skill */}
                    <div className="team-details-person-skill">
                        <h5 className="title chy-heading-1" >skills</h5>

                        {/* signle-item */}
                        <div className="progress-item mb-20 ">
                            <div className="progress-heading">
                                <p className="title chy-heading-1">web design</p>
                                <span>85%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar w-85 wow slideInLeft" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" ></div>
                            </div>
                        </div>

                        {/* signle-item */}
                        <div className="progress-item mb-20 ">
                            <div className="progress-heading">
                                <p className="title chy-heading-1">digital marketing</p>
                                <span>90%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar w-90 wow slideInLeft" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" ></div>
                            </div>
                        </div>

                        {/* signle-item */}
                        <div className="progress-item">
                            <div className="progress-heading">
                                <p className="title chy-heading-1">web development</p>
                                <span>60%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar w-60 wow slideInLeft" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" ></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="team-details-person-dic mb-70">
                <h6 className="title chy-heading-1">profetional info</h6>
                <p className="text chy-para-1">Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel, impe ut mauris. Ut ultricies arcurisus, malesuada efficitur orci euismod in. Proin eleifend est risus, ac sodales nulla mollis vel. Etiam condimentum placer mi, sed cursus augue dignissim sit amet. Viva ac dolor dapibus, pharetra lorem ac, tristique metus. Quisque leo ante, tempor in quam in, vestibulum vulputate enim. Nullam porta nulla ut ex aliquet molestie. Praesent enim dui, lobortis id placerat bibendum, placerat et justo.</p>
                <p className="text chy-para-1">Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla tellus. Tellus fermentum morbi a nisi ut amet leo fermentum eget. Neque orci feugiat tempus diam. Aliquam in gravida pulvinar arcu porttitor viverra sed sem orci. Ac ullamcorper in ornare lorem nulla. Ame mi sagittis feugiat diam ac. Dignissim auctor eu fames cras.</p>
            </div>

            <div className="contact-form-wrap wow fadeInUp">
                <h6 className="title chy-heading-1">contact me</h6>
                <p className="text chy-para-1">In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget mauris in nisl tempus lobortis.</p>

                <form className="contact-form">
                    <input type="text" placeholder="first name" />
                    <input type="number" placeholder="phone number" />
                    <input type="email" placeholder="email address" />
                    <select name="service">
                        <option disabled>Select Service Type</option>
                        <option defaultValue="one">One</option>
                        <option defaultValue="two">Two</option>
                        <option defaultValue="three">Three</option>
                    </select>

                    <textarea name="" id="" cols="30" rows="10" placeholder="Type your message"></textarea>

                    <div className="btn-wrap">
                        <button className="chy-pr-btn-1"> 
                            <span className="text">
                                send message
                            </span>
                            <span className="icon">
                                <FontAwesomeIcon icon={faRightLong} />
                            </span>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default TeamDetails