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

function ServiceDetailsEventM() {
  useEffect(() => {

    // title setup 
    document.title = `Ai Tech Digi - Event Marketing`

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
          <BreadCrumb title="Event Marketing" />
          <div className="service-details-area pt-120 pb-70">
            <div className="container chy-container-1">
              <div className="row">

                {/* left-content */}
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-details-content mb-50">

                    <div className="service-details-main-img img-cover">
                      <img src={image} alt="Event Marketing Services" />
                    </div>

                    <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Event Marketing Services</h2>

                    <p className="chy-para-1 inner-page-disc">
                      GotechDigi, a leading digital marketing agency, specializes in innovative event marketing services designed to elevate brand visibility and engagement. Event marketing involves promoting a product, service, or brand through impactful, interactive experiences, both online and offline.
                    </p>
                    <p className="chy-para-1 inner-page-disc">
                      Here’s how GotechDigi helps businesses achieve their goals through expert event marketing strategies tailored to create immersive experiences.
                    </p>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Key Services Included</h2>
                    <ul>
                      <li>
                        <b>Strategic Planning & Concept Development:</b> Identifying the target audience and goals, and creating tailored event concepts to match brand objectives.
                      </li>
                      <li>
                        <b>Event Branding and Design:</b> Crafting eye-catching visual designs for booths, invitations, and digital assets. Logo placement, banners, and promotional materials that align with your brand.
                      </li>
                      <li>
                        <b>Digital Campaigns for Events:</b> Leveraging social media marketing to generate buzz, email campaigns to reach specific demographics, and paid ads for wider visibility.
                      </li>
                      <li>
                        <b>Venue Management & Logistics:</b> Selection of the best venues suited for the event theme, along with coordination of equipment, setup, and vendor management.
                      </li>
                      <li>
                        <b>Audience Engagement:</b> Using live polls, Q&A sessions, gamification, interactive kiosks, and mobile applications to keep the audience invested.
                      </li>
                      <li>
                        <b>Live Streaming & Hybrid Events:</b> Reaching global audiences through professional live-streaming services, creating a seamless experience for both in-person and online attendees.
                      </li>
                      <li>
                        <b>Post-Event Analysis:</b> Collecting feedback through surveys and audience interactions, and providing detailed reports on event performance metrics.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Advantages of GotechDigi’s Services</h2>
                    <ul>
                      <li>
                        <strong>Enhanced Brand Awareness:</strong> Events create lasting impressions, making your brand more memorable.
                      </li>
                      <li>
                        <strong>Lead Generation:</strong> Events act as a platform to attract high-quality leads.
                      </li>
                      <li>
                        <strong>ROI Tracking:</strong> With measurable goals, GotechDigi provides insights into the effectiveness of your event investments.
                      </li>
                      <li>
                        <strong>Networking Opportunities:</strong> Events are perfect for building industry connections.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Why Choose GotechDigi?</h2>
                    <ul>
                      <li>
                        <strong>Tailored Strategies:</strong> Customized plans that align with your business needs.
                      </li>
                      <li>
                        <strong>Expert Team:</strong> Experienced professionals proficient in the latest marketing trends.
                      </li>
                      <li>
                        <strong>Comprehensive Approach:</strong> From planning to execution, every detail is meticulously handled.
                      </li>
                      <li>
                        <strong>Affordable Services:</strong> High-quality event marketing solutions without breaking your budget.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                    <p>
                      Event marketing is a powerful tool to engage audiences and enhance your brand’s presence. GotechDigi’s comprehensive services ensure every aspect of your event is handled professionally, creating memorable experiences and driving results. Transform your brand’s impact with GotechDigi’s expert event marketing services.
                    </p>

                  </div>
                  <hr />

                  <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your Event <br />Marketing Questions</h2>

                  <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true">

                    <Accordion.Item eventKey="0" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What is event marketing?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Event marketing involves promoting products, services, or brands through live events to create immersive experiences.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What types of events are included?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Trade shows, webinars, product launches, corporate events, and hybrid gatherings.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How does GotechDigi promote events?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Through a mix of social media campaigns, email marketing, paid ads, and SEO strategies.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Can GotechDigi manage virtual events?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes, they offer live-streaming and hybrid event solutions.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What is the cost of event marketing?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Costs vary based on the event’s size, location, and complexity.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How does GotechDigi measure event success?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          By tracking KPIs such as attendance, engagement, lead conversions, and post-event feedback.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Do they provide branding services for events?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes, from logo placements to promotional material designs, they cover all aspects of branding.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How early should I plan my event with GotechDigi?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          It's advisable to start planning at least 3-6 months before the event for optimal results.
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

export default ServiceDetailsEventM