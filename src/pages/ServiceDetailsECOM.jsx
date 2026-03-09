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


function ServiceDetailsECOM() {
      useEffect(() => {
  
          // title setup 
          document.title = `Ai Tech Digi - E-Commerce Solutions`
  
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
          <BreadCrumb title="E-commerce Solutions" />
          <div className="service-details-area pt-120 pb-70">
            <div className="container chy-container-1">
              <div className="row">

                {/* left-content */}
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-details-content mb-50">

                    <div className="service-details-main-img img-cover">
                      <img src={image} alt="E-commerce Solutions" />
                    </div>

                    <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">E-commerce Solutions Services</h2>

                    <p className="chy-para-1 inner-page-disc">
                      GotechDigi, a leading digital marketing agency, provides robust E-Commerce Solutions to empower businesses in the digital space. Their solutions are tailored to create engaging, functional, and scalable e-commerce platforms, driving sales and enhancing customer experiences.
                    </p>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Comprehensive Services Included</h2>
                    <ul>
                      <li>
                        <b>Custom E-Commerce Website Development:</b> Personalized website designs aligning with brand identity, mobile-friendly interfaces, and integration of advanced features like wishlists and reviews.
                      </li>
                      <li>
                        <b>E-Commerce Platform Optimization:</b> Speed optimization for faster loads, SEO-friendly structures, and enhanced navigation for a better user experience.
                      </li>
                      <li>
                        <b>Shopping Cart and Payment Gateway Integration:</b> Secure multi-currency gateways, real-time tax/shipping calculations, and support for digital wallets.
                      </li>
                      <li>
                        <b>Inventory and Order Management:</b> Automated inventory updates, streamlined order processing with tracking, and logistics integration.
                      </li>
                      <li>
                        <b>Digital Marketing for E-Commerce:</b> Targeted social/PPC campaigns, retargeting ads, and data-driven strategies to maximize ROI.
                      </li>
                      <li>
                        <b>Mobile App Development:</b> Custom iOS/Android apps with push notifications and seamless sync with online stores.
                      </li>
                      <li>
                        <b>E-Commerce Analytics and Reporting:</b> Tools to monitor behavior and sales trends with real-time dashboards and actionable insights.
                      </li>
                      <li>
                        <b>Support and Maintenance:</b> Regular updates for security, bug fixes, round-the-clock support, and scalability solutions.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Why Choose GotechDigi?</h2>
                    <ul>
                      <li>
                        <strong>Platform Expertise:</strong> Expertise in leading platforms like Shopify, Magento, and WooCommerce.
                      </li>
                      <li>
                        <strong>Innovation:</strong> Innovative design and development techniques to set your store apart.
                      </li>
                      <li>
                        <strong>User-Centric:</strong> A strong focus on enhancing user experience and driving conversions.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                    <p>
                      E-commerce success hinges on a seamless user experience, secure operations, and a robust marketing strategy. GotechDigi combines these elements to deliver unmatched e-commerce solutions, enabling businesses to thrive in a competitive marketplace.
                    </p>

                  </div>
                  <hr />

                  <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your E-commerce <br />Solutions Questions</h2>

                  <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true">

                    <Accordion.Item eventKey="0" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What platforms does GotechDigi specialize in?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          GotechDigi specializes in platforms like Shopify, Magento, WooCommerce, and custom solutions.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Can GotechDigi integrate third-party tools?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes, they can integrate tools for payments, analytics, shipping, and more.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Do you provide mobile app development?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes, they create custom apps to complement your online store.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How do you ensure website security?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          By implementing SSL certificates, secure payment gateways, and regular updates.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What industries do you serve?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          GotechDigi caters to diverse industries, including fashion, electronics, and healthcare.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How long does it take to develop a site?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          The timeline depends on complexity but typically ranges from 4-12 weeks.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Do you offer SEO services for e-commerce?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes, they optimize your store for search engines to boost visibility and traffic.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What is your post-launch support policy?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          GotechDigi provides ongoing support and maintenance to ensure smooth operations.
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

export default ServiceDetailsECOM