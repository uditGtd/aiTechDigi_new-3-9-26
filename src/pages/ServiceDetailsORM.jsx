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


function ServiceDetailsORM() {
    useEffect(() => {

        // title setup 
        document.title = `Ai Tech Digi - Online Reputation Management`

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
                    <BreadCrumb title="Online Reputation Management" />
                    <div className="service-details-area pt-120 pb-70">
                        <div className="container chy-container-1">
                            <div className="row">

                                {/* left-content */}
                                <div className="col-xxl-8 col-xl-8 col-lg-8">
                                    <div className="service-details-content mb-50">

                                        <div className="service-details-main-img img-cover">
                                            <img src={image} alt="Online Reputation Management" />
                                        </div>

                                        <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Online Reputation Management (ORM) Services</h2>

                                        <p className="chy-para-1 inner-page-disc">
                                            Online Reputation Management (ORM) is essential for businesses to build trust, improve credibility, and maintain a positive digital presence. For companies like GotechDigi, a premier digital marketing agency, ORM services help businesses enhance their online footprint and manage public perception effectively.
                                        </p>
                                        <p className="chy-para-1 inner-page-disc">
                                            ORM involves monitoring, influencing, and managing the reputation of a business or individual in the online world. Its primary goal is to create a positive brand image, minimize negative feedback, and address potential crises before they escalate.
                                        </p>

                                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Key Services Included in ORM</h2>
                                        <ul>
                                            <li>
                                                <b>Online Reviews Management:</b> Regular monitoring of reviews on platforms like Google, Yelp, and Trustpilot. Encouraging satisfied customers to leave positive reviews and responding to negative reviews constructively to rebuild trust.
                                            </li>
                                            <li>
                                                <b>Search Engine Results Optimization:</b> Suppressing negative search results with strategic SEO techniques and promoting favorable content like blogs, press releases, and customer testimonials.
                                            </li>
                                            <li>
                                                <b>Social Media Management:</b> Monitoring mentions, comments, and direct messages across platforms. Implementing crisis management strategies for negative trends or posts.
                                            </li>
                                            <li>
                                                <b>Content Marketing for Positive Brand Building:</b> Developing blogs, case studies, and whitepapers that reflect expertise and reliability.
                                            </li>
                                            <li>
                                                <b>Crisis Management:</b> Proactively addressing negative publicity with immediate and thoughtful responses using PR strategies to control and redirect narratives.
                                            </li>
                                            <li>
                                                <b>Monitoring Brand Mentions:</b> Using tools to track brand mentions on forums, blogs, and news articles, and analyzing sentiment to respond promptly.
                                            </li>
                                            <li>
                                                <b>Competitor Analysis:</b> Identifying competitors’ ORM strategies and benchmarking to craft superior approaches.
                                            </li>
                                        </ul>

                                        <div>
                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Why Choose GotechDigi for ORM?</h2>
                                            <ul>
                                                <li>
                                                    <strong>Customized Strategies:</strong> GotechDigi crafts ORM strategies tailored to industry-specific needs, ensuring effectiveness for businesses of any scale.
                                                </li>
                                                <li>
                                                    <strong>Experienced Team:</strong> A team of seasoned professionals handles everything from SEO to social media, ensuring consistency and quality.
                                                </li>
                                                <li>
                                                    <strong>Proven Tools and Technology:</strong> Advanced tools are utilized to monitor, analyze, and optimize online reputation comprehensively.
                                                </li>
                                                <li>
                                                    <strong>End-to-End Management:</strong> From monitoring mentions to creating engaging content, GotechDigi offers holistic ORM services.
                                                </li>
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Benefits of Investing in ORM Services</h2>
                                            <ul>
                                                <li>
                                                    <strong>Improved Customer Trust:</strong> A strong online reputation attracts and retains customers. Positive reviews and consistent engagement reinforce credibility.
                                                </li>
                                                <li>
                                                    <strong>Crisis Prevention:</strong> By monitoring online activities, GotechDigi ensures that potential issues are addressed before they escalate.
                                                </li>
                                                <li>
                                                    <strong>Enhanced SEO Performance:</strong> Favorable online content boosts your search rankings, driving organic traffic.
                                                </li>
                                                <li>
                                                    <strong>Stronger Brand Identity:</strong> Thoughtful ORM strategies reinforce your brand’s mission and values, creating a lasting impact on audiences.
                                                </li>
                                                <li>
                                                    <strong>Higher ROI:</strong> An improved reputation results in better customer retention and increased sales.
                                                </li>
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                                            <p>
                                                Online Reputation Management (ORM) is the cornerstone of building and maintaining a trustworthy and credible digital presence. With GotechDigi’s comprehensive ORM services, businesses can proactively monitor their brand, engage with audiences, and tackle crises effectively. By focusing on tailored strategies and leveraging the latest technologies, GotechDigi empowers businesses to stay ahead of the competition and foster long-term customer trust.
                                            </p>

                                        </div>
                                        <hr />

                                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your (ORM) <br />Service Questions</h2>

                                        <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                                            data-aos="fade-up"
                                            data-aos-duration="2000"
                                            data-aos-once="true">

                                            <Accordion.Item eventKey="0" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >What is Online Reputation Management (ORM)?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        ORM is the process of managing and improving how your brand is perceived online by monitoring reviews, addressing negative feedback, and promoting positive content.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Why is ORM important for businesses?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        ORM is crucial as it helps build trust, enhances credibility, attracts customers, and mitigates potential crises arising from negative feedback or publicity.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How does GotechDigi handle negative reviews?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        GotechDigi responds to negative reviews with professionalism, addressing concerns and offering solutions to rebuild customer trust and mitigate damage.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Can ORM improve my website’s SEO?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Yes, ORM includes creating and promoting positive content that can rank higher in search results, thereby boosting your website’s overall SEO performance.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >What industries can benefit from ORM services?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        ORM is beneficial for all industries, including retail, healthcare, real estate, hospitality, and e-commerce, where customer perceptions significantly impact success.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How does social media influence ORM?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Social media plays a pivotal role in ORM by offering platforms to engage with customers, address their concerns, and create a positive brand image.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="6" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How long does it take to see results from ORM?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        The timeline for results varies depending on the brand’s current reputation and the strategies implemented, but significant improvements typically take a few months.
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="7" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Why should I choose GotechDigi for ORM?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        GotechDigi offers tailored ORM strategies, advanced tools, and a dedicated team of experts to ensure comprehensive and effective reputation management for your business.
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

export default ServiceDetailsORM