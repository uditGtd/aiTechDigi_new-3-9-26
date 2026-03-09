import image from '../assets/img/services/sd-img-1.jpg' // Ensure path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import HeaderFive from '../elements/headers/HeaderFive';
import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import FooterTwo from '../elements/footer/FooterTwo';
import BackToTop from '../components/back-to-top/BackToTop';
// addition imports
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react'
import Preloader from '../components/preloader/Preloader'

function ServiceDetailsGDS() {
      useEffect(() => {
  
          // title setup 
          document.title = `Ai Tech Digi - Graphic Design Services`
  
          // aos activation
          AOS.init();
  
      }, [])
  
  
      // preloader handle 
      const [loading, setLoading] = useState(true);
  
      useEffect(() => {
          const handleLoad = () => {
              setLoading(false);
          };
  
          if (document.readyState === 'complete') {
              setLoading(false);
          } else {
              window.addEventListener('load', handleLoad);
              return () => window.removeEventListener('load', handleLoad);
          }
      }, []);
  return (
    <>
      {loading && <Preloader />}
      {!loading &&
        <div>
          <HeaderFive />
          <BreadCrumb title="Graphic Design" />
          <div className="service-details-area pt-120 pb-70">
            <div className="container chy-container-1">
              <div className="row">

                {/* left-content */}
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-details-content mb-50">

                    <div className="service-details-main-img img-cover">
                      <img src={image} alt="Graphic Design Services" />
                    </div>

                    <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Graphic Design Services</h2>

                    <p className="chy-para-1 inner-page-disc">
                      At GotechDigi, we offer innovative and comprehensive graphic design services tailored to enhance your brand’s identity and make it stand out in the competitive digital landscape. With a team of skilled designers, we specialize in creating visually appealing designs that resonate with your target audience and align seamlessly with your brand goals.
                    </p>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Key Offerings</h2>
                    <ul>
                      <li>
                        <b>Logo Design:</b> Crafting unique logos that reflect your brand’s essence, incorporating trends and brand colors for lasting impact.
                      </li>
                      <li>
                        <b>Marketing Collaterals:</b> Designing brochures, flyers, and pamphlets for promotional campaigns with custom designs for targeted marketing.
                      </li>
                      <li>
                        <b>Event Marketing Materials:</b> Banners, posters, invitations, standees, and booth designs to create memorable event experiences.
                      </li>
                      <li>
                        <b>Digital Media Graphics:</b> Social media post templates, infographics, web banners, ads, and email newsletters.
                      </li>
                      <li>
                        <b>Custom Illustrations:</b> Tailored illustrations to add a creative touch to brand messaging and engaging visuals for blogs and presentations.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Specialized Services for Event Marketing</h2>
                    <p className="chy-para-1 inner-page-disc">
                      Graphic design plays a pivotal role in event marketing by ensuring every visual aspect is engaging and cohesive. Here’s what we include:
                    </p>
                    <ul>
                      <li>
                        <b>Event Branding:</b> Custom logos, themes, and a unified design language across all materials.
                      </li>
                      <li>
                        <b>Print Design:</b> Tickets, badges, invitations, booklets, and agendas with premium design aesthetics.
                      </li>
                      <li>
                        <b>Digital Promotions:</b> Eye-catching designs for event landing pages, emails, countdowns, and live coverage graphics.
                      </li>
                      <li>
                        <b>On-site Materials:</b> Directional signage, stage backdrops, standees, and creative booth/stall designs.
                      </li>
                      <li>
                        <b>Merchandise Design:</b> Branded T-shirts, mugs, and bags that attendees cherish and remember.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Why Choose GotechDigi?</h2>
                    <ul>
                      <li>
                        <strong>Experienced Team:</strong> With a proven track record of delivering high-quality designs, our team ensures creativity and professionalism.
                      </li>
                      <li>
                        <strong>Customization:</strong> Every design is tailored to meet client-specific goals and industry standards.
                      </li>
                      <li>
                        <strong>Cutting-edge Tools:</strong> We use advanced graphic design software to deliver polished outputs.
                      </li>
                      <li>
                        <strong>Quick Turnaround:</strong> Time is of the essence, and we ensure timely delivery without compromising quality.
                      </li>
                      <li>
                        <strong>Cost-effective Solutions:</strong> Affordable packages without hidden costs.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                    <p>
                      Graphic design is more than just aesthetics; it’s a strategic tool that bridges the gap between your brand and your audience. At GotechDigi, we are committed to delivering designs that are not only visually stunning but also functional and aligned with your marketing objectives. Whether it’s event marketing or building a strong digital presence, our graphic design services ensure your brand leaves a lasting impression.
                    </p>

                  </div>
                  <hr />

                  <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your Graphic <br />Design Service Questions</h2>

                  <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true">

                    <Accordion.Item eventKey="0" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What industry do you serve?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          We cater to various industries, including real estate, healthcare, education, and e-commerce.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What types of designs does GotechDigi offer?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          GotechDigi offers logo design, social media creatives, banners, brochures, posters, advertisements, and branding visuals.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How long does it take to design a logo?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Typically, logo design takes 5-7 business days, depending on the complexity and revisions.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What format will I receive my designs in?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Designs are provided in high-quality formats like PNG, JPEG, and vector files (AI, EPS).
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Do you offer revisions on designs?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes, we offer revisions to ensure the final design aligns with your vision.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Can you handle bulk projects?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Absolutely! Our team is equipped to handle bulk design requirements efficiently.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Do you offer packages for startups?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes, we have special packages for startups, including branding, logo, and social media design.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How much do graphic design services cost?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Costs vary based on the complexity and volume of designs. Contact us for a custom quote.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>

                </div>

                {/* sidebar */}
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="blog-2-page-sidebar mb-50">

                    {/* sidebar-box */}
                    <div className="sidebar-box mb-30"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true">
                      <h4 className="sidebar-box-title chy-heading-1" >services category</h4>
                      <div className="sidebar-box-wrap">

                        {/* category-menu */}
                        <ul className="sidebar-category">

                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-seo-details">
                              <span className="text">
                                Search Engine Optimization
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>

                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-ppc-details">
                              <span className="text">
                                PPC Advertising
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>

                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-smm-details">
                              <span className="text">
                                Social Media Marketing (SMM)
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>

                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-cm-details">
                              <span className="text">
                                Content Marketing
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>

                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-em-details">
                              <span className="text">
                                Email Marketing
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>

                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-am-details">
                              <span className="text">
                                Affiliate Marketing
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-cro-details">
                              <span className="text">
                                Conversion Rate Optimization (CRO)
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-wdd-details">
                              <span className="text">
                                Website Development & Design
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-mam-details">
                              <span className="text">
                                Mobile App Marketing
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-orm-details">
                              <span className="text">
                                Online Reputation Management (ORM)
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-im-details">
                              <span className="text">
                                Influencer Marketing
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-mar-details">
                              <span className="text">
                                Marketing Analytics & Reporting
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-bsd-details">
                              <span className="text">
                                Brand Strategy Development
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-pr-details">
                              <span className="text">
                                Public Relations (PR)
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-eventm-details">
                              <span className="text">
                                Event Marketing
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-gds-details">
                              <span className="text">
                                Graphic Design Services
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-ecom-details">
                              <span className="text">
                                E-commerce Solutions
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-ma-details">
                              <span className="text">
                                Marketing Automation
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-crm-details">
                              <span className="text">
                                Customer Relationship Management (CRM) Solutions
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <Link to="/service-vso-details">
                              <span className="text">
                                Voice Search Optimization
                              </span>
                              <span className="icon-1" >
                                <i className="fi fi-ss-angle-double-right"></i>
                              </span>
                            </Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <FooterTwo />
          <BackToTop />
        </div>
      }
    </>
  )
}

export default ServiceDetailsGDS