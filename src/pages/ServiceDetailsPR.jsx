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

function ServiceDetailsPR() {
  useEffect(() => {

    // title setup 
    document.title = `Ai Tech Digi - Public Relations`

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
          <BreadCrumb title="Public Relations" />
          <div className="service-details-area pt-120 pb-70">
            <div className="container chy-container-1">
              <div className="row">

                {/* left-content */}
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-details-content mb-50">

                    <div className="service-details-main-img img-cover">
                      <img src={image} alt="Public Relations Services" />
                    </div>

                    <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Public Relations (PR) Services</h2>

                    <p className="chy-para-1 inner-page-disc">
                      Public Relations (PR) is a cornerstone for businesses aiming to build and maintain a positive brand image. For digital marketing agencies like GotechDigi, PR forms an integral part of their holistic approach to elevating brand visibility and trust.
                    </p>
                    <p className="chy-para-1 inner-page-disc">
                      PR is about managing communication between a brand and its audience to build a favorable reputation. Unlike traditional advertising, PR emphasizes earned media, fostering genuine relationships with the public, media, and other stakeholders.
                    </p>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Core Services Included</h2>
                    <ul>
                      <li>
                        <b>Media Relations:</b> Building relationships with journalists and editors, distributing press releases, and organizing press conferences for newsworthy updates.
                      </li>
                      <li>
                        <b>Brand Storytelling:</b> Developing compelling narratives aligned with your mission, crafting engaging content, and highlighting client success stories.
                      </li>
                      <li>
                        <b>Crisis Communication:</b> Preparing management plans, responding to negative publicity with empathetic messaging, and monitoring platforms to mitigate risks.
                      </li>
                      <li>
                        <b>Event Management:</b> Organizing product launches, webinars, and press meets while collaborating with influencers to maximize coverage.
                      </li>
                      <li>
                        <b>Social Media PR:</b> Managing online reputation, collaborating with influencers, and monitoring trends to stay responsive and relevant.
                      </li>
                      <li>
                        <b>Reputation Management:</b> Monitoring brand mentions, addressing customer complaints promptly, and highlighting positive feedback to reinforce trust.
                      </li>
                      <li>
                        <b>Thought Leadership:</b> Positioning executives as industry leaders through articles, interviews, speaking engagements, and industry awards.
                      </li>
                      <li>
                        <b>Corporate Communications:</b> Managing internal and external communications, developing policies, and creating newsletters and announcements.
                      </li>
                      <li>
                        <b>Community Engagement:</b> Partnering with local organizations, organizing CSR activities, and encouraging employee volunteering to foster goodwill.
                      </li>
                      <li>
                        <b>Analytics and Reporting:</b> Measuring campaign impact through data analytics, detailed media mention reports, and sentiment analysis.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Why Choose GotechDigi?</h2>
                    <ul>
                      <li>
                        <strong>Comprehensive Expertise:</strong> From media outreach to social media strategies, GotechDigi offers end-to-end PR solutions tailored to your business.
                      </li>
                      <li>
                        <strong>Data-Driven Strategies:</strong> Every campaign is backed by in-depth analytics to ensure optimal results.
                      </li>
                      <li>
                        <strong>Customized Solutions:</strong> GotechDigi’s PR strategies are aligned with your brand’s goals and values.
                      </li>
                      <li>
                        <strong>Experienced Team:</strong> With a team of PR professionals, GotechDigi ensures your brand’s story is told effectively and authentically.
                      </li>
                    </ul>

                    <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                    <p>
                      Public Relations is indispensable for brands striving to establish trust and authority in their industry. With its wide array of PR services, GotechDigi empowers businesses to navigate the competitive digital landscape effectively. By leveraging GotechDigi’s expertise, your brand can foster meaningful relationships, mitigate challenges, and achieve sustainable growth.
                    </p>

                  </div>
                  <hr />

                  <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your Public Relations <br />(PR) Service Questions</h2>

                  <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true">

                    <Accordion.Item eventKey="0" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What is public relations (PR)?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Public Relations is the process of managing your brand’s communication with the public and media to build a favorable reputation, increase visibility, and shape public perceptions.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How does PR differ from marketing?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          PR focuses on earned media and reputation building through strategic communication, while marketing typically involves paid promotion to drive sales and conversions.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What industries can benefit from PR services?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Almost every industry — including startups, tech companies, healthcare, education, e-commerce, hospitality, and professional services — can benefit from PR to strengthen credibility.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How long does it take to see results?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          PR impact varies by industry and outreach strategy, but tangible media coverage and brand awareness often begin within a few weeks of campaign launch.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Do you handle crisis communication?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes — GotechDigi offers crisis communication planning and management to protect your brand during unexpected challenges.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >What kinds of media outlets do you target?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          They target a mix of digital publications, blogs, online news portals, local/international media outlets, and industry-specific press channels.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >Can PR improve SEO and online presence?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Yes — digital PR helps increase high-quality backlinks, mentions, and visibility across search engines and social platforms, boosting overall online presence.
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className="mb-15">
                      <Accordion.Header>
                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                        <span className="title chy-heading-1" >How much does PR cost?</span>
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="disc chy-para-1">
                          Pricing is variable based on the scope of services, campaign goals, and deliverables. GotechDigi provides custom quotes after consultation.
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

export default ServiceDetailsPR