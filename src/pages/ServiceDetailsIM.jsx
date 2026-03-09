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

function ServiceDetailsIM() {
    useEffect(() => {

        // title setup 
        document.title = `Ai Tech Digi - Influencer Marketing`

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
                    <BreadCrumb title="Influencer Marketing" />
                    <div className="service-details-area pt-120 pb-70">
                        <div className="container chy-container-1">
                            <div className="row">

                                {/* left-content */}
                                <div className="col-xxl-8 col-xl-8 col-lg-8">
                                    <div className="service-details-content mb-50">

                                        <div className="service-details-main-img img-cover">
                                            <img src={image} alt="Influencer Marketing" />
                                        </div>

                                        <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Influencer Marketing Services</h2>

                                        <p className="chy-para-1 inner-page-disc">
                                            Influencer marketing has emerged as a powerful strategy to build brand visibility, engage audiences authentically, and drive conversions. GotechDigi is a leading digital marketing agency offering end-to-end influencer marketing services tailored to your business needs. By partnering with relevant influencers and leveraging creative campaigns, GotechDigi helps brands reach new heights across social platforms and beyond.
                                        </p>
                                        <p className="chy-para-1 inner-page-disc">
                                            Influencer marketing helps brands connect with engaged audiences through trusted individuals who have credibility and influence over their followers.
                                        </p>

                                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Why Influencer Marketing Matters</h2>
                                        <ul>
                                            <li>
                                                <b>Increase Brand Awareness:</b> Reach new and engaged audiences quickly.
                                            </li>
                                            <li>
                                                <b>Drive Engagement:</b> Spark real conversations around your brand.
                                            </li>
                                            <li>
                                                <b>Improve Credibility:</b> Build trust through authentic voices.
                                            </li>
                                            <li>
                                                <b>Boost Conversions:</b> Drive sales effectively through targeted recommendations.
                                            </li>
                                        </ul>

                                        <div>
                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">GotechDigi’s Influencer Solutions</h2>
                                            <ul>
                                                <li>
                                                    <strong>Influencer Campaign Strategy:</strong> Building a customized strategy based on your goals, target audience, and market trends to identify the best platforms and creators.
                                                </li>
                                                <li>
                                                    <strong>Influencer Identification & Placement:</strong> Connecting your brand with influencers who align with your niche, have genuine engagement, and can deliver results.
                                                </li>
                                                <li>
                                                    <strong>Negotiation & Collaboration:</strong> Handling outreach and negotiations to secure effective collaborations with clear deliverables.
                                                </li>
                                                <li>
                                                    <strong>Creative Campaign Execution:</strong> Crafting campaigns that resonate with audiences and generate buzz across platforms.
                                                </li>
                                                <li>
                                                    <strong>Monitoring & Optimization:</strong> Tracking performance using KPIs and making adjustments to maximize impact and ROI.
                                                </li>
                                                <li>
                                                    <strong>Reporting & Insights:</strong> Providing detailed analytics on engagement, reach, and conversions to measure effectiveness.
                                                </li>
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Benefits of Partnering with Us</h2>
                                            <ul>
                                                <li>
                                                    <strong>Authentic Engagement:</strong> Build trust through influencers with loyal followers.
                                                </li>
                                                <li>
                                                    <strong>Targeted Reach:</strong> Reach specific audiences based on interests and behavior.
                                                </li>
                                                <li>
                                                    <strong>Higher ROI:</strong> Influencer campaigns often outperform traditional ad campaigns.
                                                </li>
                                                <li>
                                                    <strong>Enhanced Social Proof:</strong> User-generated content and testimonials increase brand credibility.
                                                </li>
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Steps to Launch</h2>
                                            <ul>
                                                <li>
                                                    <strong>Consultation and Goal Assessment</strong>
                                                </li>
                                                <li>
                                                    <strong>Influencer Shortlisting</strong>
                                                </li>
                                                <li>
                                                    <strong>Partnership Negotiation</strong>
                                                </li>
                                                <li>
                                                    <strong>Influencer Collaboration & Content Creation</strong>
                                                </li>
                                                <li>
                                                    <strong>Campaign Deployment</strong>
                                                </li>
                                                <li>
                                                    <strong>Performance Tracking & Optimization</strong>
                                                </li>
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                                            <p>
                                                Influencer marketing offers an opportunity for brands to engage audiences in an authentic manner while delivering measurable business results. Partnering with GotechDigi allows businesses to leverage strategic influencer campaigns that build brand visibility, drive engagement, and boost conversions across digital platforms.
                                            </p>

                                        </div>
                                        <hr />

                                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your (Influencer Marketing) <br />Service Questions</h2>

                                        <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                                            data-aos="fade-up"
                                            data-aos-duration="2000"
                                            data-aos-once="true">

                                            <Accordion.Item eventKey="0" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >What is influencer marketing?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Influencer marketing is a strategy where brands collaborate with individuals who have strong online followings to promote products or services.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Which platforms do influencer campaigns work on?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Influencer campaigns typically run on platforms like Instagram, YouTube, TikTok, and Facebook, depending on brand goals.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How do you choose the right influencers?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        GotechDigi selects influencers who align with your brand’s values, niche audience, and campaign goals.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Can influencer marketing boost conversions?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Yes, high-quality collaborations can increase product visibility and drive higher conversions and sales.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How is campaign success measured?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Success is measured through metrics like reach, engagement, conversions, and ROI.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Does GotechDigi manage influencer payments?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Yes, GotechDigi manages all negotiations and payment processing to ensure smooth collaborations.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="6" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Is influencer marketing suitable for all industries?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Yes, it can be effective for businesses in various sectors.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="7" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How do I get started with influencer marketing?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Contact GotechDigi for a consultation to discuss your goals and audience.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>

                                    </div>
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

export default ServiceDetailsIM