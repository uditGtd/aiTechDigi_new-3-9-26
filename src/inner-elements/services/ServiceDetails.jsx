
import image from '../../assets/img/services/sd-img-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function ServiceDetails() {
    return (
        <div className="service-details-area pt-120 pb-70">
            <div className="container chy-container-1">
                <div className="row">

                    {/* left-content */}
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="service-details-content mb-50">

                            <div className="service-details-main-img img-cover">
                                <img src={image} alt="" />
                            </div>

                            <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Search Engine Optimization (SEO)</h2>

                            <p className="chy-para-1 inner-page-disc">
                                Search Engine Optimization (SEO) is the cornerstone of digital marketing, enabling businesses to improve their visibility on search engines and connect with their target audience. GotechDigi, a leading digital marketing agency, specializes in delivering top-notch SEO services tailored to diverse business needs. Their comprehensive approach ensures that your website ranks higher, attracts quality traffic, and drives measurable results.
                            </p>
                            <p className="chy-para-1 inner-page-disc">
                                Below is a detailed exploration of GotechDigi’s SEO services and what they include:
                            </p>

                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">On-Page Optimization</h2>
                            <p>
                                This is the foundation of any SEO strategy. GotechDigi ensures your website is fully optimized to rank well on search engines.

                            </p>
                            <ul>
                                <li>
                                    <b>Keyword Research:</b> Identify high-traffic, low-competition keywords relevant to your niche.
                                </li>
                                <li>
                                    <b> Content Optimization:</b> Create and refine content with strategic keyword placement.
                                </li>
                                <li>
                                    <b>Meta Tags:</b> Optimize title tags, meta descriptions, and headers for better rankings.
                                </li>
                                <li>
                                    <b>Image Optimization:</b> Use alt tags and compress images to enhance load times.
                                </li>
                                <li>
                                    <b>URL Structuring:</b> Ensure clean and descriptive URLs for each page.
                                </li>
                            </ul>
                            <div>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle"    >Technical SEO</h2>
                                <ul>
                                    <li>
                                        <strong>Website Speed Optimization:</strong> Enhance load times for improved user experience.
                                    </li>
                                    <li>
                                        <strong>Mobile Responsiveness:</strong> Ensure websites are mobile-friendly and follow Google’s mobile-first indexing.
                                    </li>
                                    <li>
                                        <strong>XML Sitemap Creation:</strong> Develop sitemaps for better indexing by search engines.
                                    </li>
                                    <li>
                                        <strong>Fix Crawl Errors:</strong> Identify and resolve issues that prevent search engine bots from indexing pages.
                                    </li>
                                    <li>
                                        <strong>Secure Connections (SSL):</strong> Implement HTTPS for website security and credibility.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Off-Page Optimization</h2>
                                <ul>
                                    <li>
                                        <strong>Link Building:</strong> Earn high-quality backlinks from authoritative websites.
                                    </li>
                                    <li>
                                        <strong>Guest Blogging:</strong> Write valuable content for external platforms to drive traffic.
                                    </li>
                                    <li>
                                        <strong>Social Media Integration:</strong> Leverage social signals to boost visibility.
                                    </li>
                                    <li>
                                        <strong>Local Directory Submissions:</strong> Optimize listings on platforms like Google My Business and Yelp.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Content Marketing</h2>
                                <ul>
                                    <li>
                                        <strong>Blog Writing:</strong> Publish informative blogs that engage your audience and target keywords.
                                    </li>
                                    <li>
                                        <strong>Infographics:</strong> Create visually engaging content to attract backlinks.
                                    </li>
                                    <li>
                                        <strong>Video Content:</strong> Develop videos optimized for YouTube and other search platforms.
                                    </li>
                                    <li>
                                        <strong>Content Audits:</strong> Regularly review and refresh old content to maintain relevance.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Local SEO</h2>
                                <ul>
                                    <li>
                                        <strong>Google My Business Optimization:</strong> Ensure accurate and detailed GMB profiles.
                                    </li>
                                    <li>
                                        <strong>Local Keywords:</strong> Target geographically relevant keywords for better rankings.
                                    </li>
                                    <li>
                                        <strong>NAP Consistency:</strong> Ensure Name, Address, and Phone number are uniform across all platforms.
                                    </li>
                                    <li>
                                        <strong>Customer Reviews Management:</strong> Encourage and manage online reviews to build trust.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">E-Commerce SEO</h2>
                                <ul>
                                    <li>
                                        <strong>Product Page Optimization:</strong> Optimize descriptions, images, and meta data.
                                    </li>
                                    <li>
                                        <strong>Category SEO:</strong> Enhance category pages for broader keyword targeting.
                                    </li>
                                    <li>
                                        <strong>Schema Markup:</strong> Add rich snippets for products, reviews, and prices.
                                    </li>
                                    <li>
                                        <strong>Cart and Checkout Optimization:</strong> Improve user experience to reduce bounce rates.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Analytics and Reporting</h2>
                                <ul>
                                    <li>
                                        <strong>Traffic Reports:</strong> Track the number of visitors and their behavior.
                                    </li>
                                    <li>
                                        <strong>Ranking Reports:</strong> Monitor keyword rankings on search engines.
                                    </li>
                                    <li>
                                        <strong>Competitor Analysis:</strong> Understand and outperform competitors’ strategies.
                                    </li>
                                    <li>
                                        <strong>Custom Dashboards:</strong> Provide real-time insights into SEO performance.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Advanced SEO Strategies</h2>
                                <ul>
                                    <li>
                                        <strong>Voice Search Optimization:</strong> Optimize content for voice search queries.
                                    </li>
                                    <li>
                                        <strong>AI-Powered Insights:</strong> Use AI tools to uncover new opportunities.
                                    </li>
                                    <li>
                                        <strong>Video SEO:</strong> Ensure video content ranks well on platforms like YouTube.
                                    </li>
                                    <li>
                                        <strong>Multilingual SEO:</strong> Optimize websites targeting multiple languages and regions.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Why Choose GotechDigi for SEO?</h2>
                                <ul>
                                    <li>
                                        <strong>Proven Expertise:</strong> Extensive experience in handling diverse industries.
                                    </li>
                                    <li>
                                        <strong>Customized Strategies:</strong> Tailored plans to match your unique business goals.
                                    </li>
                                    <li>
                                        <strong>Dedicated Support:</strong> 24/7 customer assistance for all your queries.
                                    </li>
                                    <li>
                                        <strong>Result-Oriented:</strong> Focus on delivering measurable outcomes like traffic and conversions.
                                    </li>
                                </ul>

                                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                                <ul>
                                    <li>
                                        GotechDigi’s SEO services enhance online visibility, drive traffic, and support business growth.
                                    </li>
                                    <li>
                                        A holistic SEO approach ensures long-term and sustainable results.
                                    </li>
                                    <li>
                                        Continuous adaptation to industry trends keeps your brand competitive and impactful.
                                    </li>
                                </ul>

                            </div>
                            <hr />

                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your (SEO) <br />Service Questions</h2>

                            <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                data-aos-once="true">

                                <Accordion.Item eventKey="0" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >What is SEO and why is it importent for my business?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            SEO, or Search Engine Optimization, is the practice of optimizing your website to improve its visibility on search engines like Google. By optimizing your site, you increase the chances of ranking higher on search results, driving more organic traffic, and attracting potential customers, which is crucial for the growth of your business.
                                        </div>
                                    </Accordion.Body>

                                </Accordion.Item>

                                <Accordion.Item eventKey="1" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >How long does it take to see the results from SEO?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            The time it takes to see SEO results can vary, but typically,
                                            you can start seeing improvements in rankings within 3 to 6 months.
                                            SEO is a long-term strategy, and it depends on factors like competition, the quality of your website, and the effectiveness of your SEO efforts.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >What SEO server GotechDigi offer?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            At GotechDigi, we offer a comprehensive range of SEO services, including keyword research, on-page optimization, technical SEO, link building, local SEO, content optimization, and SEO audits. We tailor our services to meet the specific needs of your business.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >Do I need to hire an SEO expert or can I do it myself?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            While you can implement some basic SEO strategies on your own, hiring an SEO expert, like the team at GotechDigi, ensures that your SEO efforts are professional and result-oriented. Experts have the knowledge and tools to effectively improve your rankings and drive targeted traffic to your website.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >How much dose SEO cost?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            The cost of SEO can vary based on your business's needs and the level of competition in your industry. At GotechDigi, we offer customized pricing based on your goals. We ensure that our services provide good value and return on investment (ROI) for your business.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >What is the difference between on-page and off-page SEO?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            On-page SEO refers to optimizing elements on your website such as content, meta tags, and internal links. Off-page SEO involves activities outside your website, like link building and social media marketing, to improve your website’s authority and search engine ranking.

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >How do you meansure the success of SEO?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            At GotechDigi, we measure SEO success through key performance indicators (KPIs) like organic traffic, keyword rankings, conversion rates, bounce rates, and overall engagement. We provide regular reports to track progress and adjust strategies accordingly.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="mb-15">
                                    <Accordion.Header>
                                        <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                        <span className="title chy-heading-1" >Can SEO help my business in local search results?</span>
                                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="disc chy-para-1">
                                            Yes, SEO plays a significant role in improving your visibility in local search results. With local SEO strategies, such as optimizing your Google My Business profile and targeting location-based keywords, GotechDigi can help your business attract customers in your specific geographic area.

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

                            {/* sidebar-box */}
                            {/* <div className="sidebar-box mb-30"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-once="true">
                            <h4 className="sidebar-box-title chy-heading-1" >our brochures</h4>
                            <div className="sidebar-box-wrap">

                                <ul className="sidebar-download">

                                    <li
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    data-aos-once="true">
                                        <Link>
                                            <span className="icon-1" >
                                                <i className="fi fi-ts-file-pdf"></i>
                                            </span>
                                            <span className="text-wrap">
                                                <span className="title">Company file</span>
                                                <span className="kbs">250kb</span>
                                            </span>
                                            <span className="icon-2" >
                                                <i className="fi fi-ss-download"></i>
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    data-aos-once="true">
                                        <Link>
                                            <span className="icon-1" >
                                                <i className="fi fi-ts-file-pdf"></i>
                                            </span>
                                            <span className="text-wrap">
                                                <span className="title">local file</span>
                                                <span className="kbs">500kb</span>
                                            </span>
                                            <span className="icon-2" >
                                                <i className="fi fi-ss-download"></i>
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div> */}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceDetails