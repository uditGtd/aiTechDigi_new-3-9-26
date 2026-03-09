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

function ServiceDetailsPPC() {
    useEffect(() => {

        // title setup 
        document.title = `Ai Tech Digi - Pay-Per-Click`

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
                    <BreadCrumb title="Pay Per Click" />
                    <div className="service-details-area pt-120 pb-70">
                        <div className="container chy-container-1">
                            <div className="row">

                                {/* left-content */}
                                <div className="col-xxl-8 col-xl-8 col-lg-8">
                                    <div className="service-details-content mb-50">

                                        <div className="service-details-main-img img-cover">
                                            <img src={image} alt="PPC Advertising" />
                                        </div>

                                        <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Pay-Per-Click (PPC) Advertising</h2>

                                        <p className="chy-para-1 inner-page-disc">
                                            Pay-Per-Click (PPC) Advertising is a model of internet marketing in which advertisers pay a fee each time one of their ads is clicked. Essentially, it’s a way of buying visits to your site, rather than attempting to “earn” those visits organically. GotechDigi provides expert PPC management services to help businesses drive instant traffic, generate leads, and maximize their Return on Investment (ROI).
                                        </p>
                                        <p className="chy-para-1 inner-page-disc">
                                            Below is a detailed exploration of GotechDigi’s PPC services and what they include:
                                        </p>

                                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Keyword Research and Search Advertising</h2>
                                        <p>
                                            Effective PPC advertising begins with thorough keyword research. At GotechDigi, the team begins by identifying keywords that align with your business objectives. They use advanced tools and techniques to analyze search patterns, competition, and user intent to create a customized keyword strategy.

                                        </p>
                                        <ul>
                                            <li>
                                                <b>Targeting the Right Audience:</b> GotechDigi ensures that your PPC campaigns target the most relevant audience by choosing keywords that match the needs of potential customers.
                                            </li>
                                            <li>
                                                <b>Long-tail Keywords:</b> They focus not only on popular short keywords but also on long-tail keywords, which are often more specific and less competitive, making it easier for businesses to rank higher and achieve better results.
                                            </li>
                                            <li>
                                                <b>Competitor Analysis:</b> By studying competitor keyword strategies, GotechDigi can identify opportunities that businesses can leverage to gain a competitive edge.
                                            </li>
                                            {/* <li>
                                    <b>Ad Extensions:</b> Utilizing extensions like sitelinks, callouts, and structured snippets to improve visibility.
                                </li> */}
                                        </ul>
                                        <p>By combining broad and niche keywords in your PPC campaigns, GotechDigi ensures that your ads are visible to the right audience at the right time.</p>

                                        <div>
                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Ad Creation and Optimization</h2>
                                            <p>Creating compelling ads is crucial to the success of any PPC campaign. GotechDigi’s PPC team specializes in crafting highly effective ad copy that attracts attention and encourages users to click.</p>
                                            <ul>
                                                <li>
                                                    <strong>Ad Copywriting:</strong> They write clear, concise, and persuasive ads that resonate with your target audience. The goal is to highlight your product or service’s unique selling points (USPs) while addressing the pain points of potential customers.
                                                </li>
                                                <li>
                                                    <strong>Visual Appeal:</strong> In addition to well-written ad copy, GotechDigi also focuses on creating visually appealing ads, particularly for display campaigns. They use engaging images, videos, and graphics to capture the audience’s attention.
                                                </li>
                                                <li>
                                                    <strong>Ad Extensions:</strong> GotechDigi uses ad extensions such as call extensions, site link extensions, and location extensions to provide additional information and increase the chances of a click.
                                                </li>
                                                <li>
                                                    <strong>A/B Testing for Optimization:</strong> The team constantly tests and optimizes ad copy to determine which versions perform best. This iterative process ensures that the ads are constantly improving and achieving maximum engagement.
                                                </li>
                                            </ul>
                                            <p>The ads created by GotechDigi are designed not only to stand out but also to encourage high-quality clicks that convert into leads or sales.</p>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Bid Management</h2>
                                            <p>Bid management is a crucial element of any PPC campaign. The goal is to ensure that your ads are placed in prime positions without exceeding your budget. GotechDigi’s experts use sophisticated bid management techniques to ensure your campaign delivers results while staying cost-effective.</p>
                                            <ul>
                                                <li>
                                                    <strong>Smart Bidding:</strong> GotechDigi uses automated bidding strategies like Target CPA (Cost Per Acquisition), Target ROAS (Return on Ad Spend), and Maximize Conversions to help you get the best results.
                                                </li>
                                                <li>
                                                    <strong>Budget Allocation:</strong> The team allocates budgets based on performance data, ensuring that more money is spent on campaigns and keywords that deliver the highest ROI.
                                                </li>
                                                <li>
                                                    <strong>Real-Time Adjustments:</strong> Since the digital landscape is constantly changing, GotechDigi monitors campaigns in real-time and adjusts bids based on competition, time of day, and device targeting.

                                                </li>
                                                <p>
                                                    Through careful bid management, GotechDigi ensures that your PPC campaigns are optimized for performance, making every click count and maximizing the value of your advertising budget.
                                                </p>
                                                {/* <li>
                                        <strong>Audience Segmentation:</strong> Creating custom audiences for highly personalized ad experiences.
                                    </li> */}
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Landing Page Optimization</h2>
                                            <p>
                                                Even the best PPC ads will underperform if the landing page is not optimized. At GotechDigi, landing page optimization is a key part of their PPC services. The goal is to create a seamless experience for visitors once they click on your ad.

                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Responsive Design:</strong> GotechDigi ensures that your landing pages are mobile-friendly and load quickly, as these factors are crucial for a positive user experience and higher conversion rates.
                                                </li>
                                                <li>
                                                    <strong>Clear Call-to-Actions (CTAs):</strong> The team designs clear, compelling CTAs that guide visitors towards taking the desired action, whether it’s making a purchase, signing up for a newsletter, or requesting more information.
                                                </li>
                                                <li>
                                                    <strong>Conversion Tracking:</strong> They implement conversion tracking tools to measure the effectiveness of landing pages and make data-driven adjustments to improve performance.
                                                </li>
                                                {/* <li>
                                        <strong>Video Remarketing:</strong> Serving ads to people who have interacted with your videos or YouTube channel.
                                    </li> */}
                                            </ul>
                                            <p>Optimized landing pages ensure that the traffic driven by PPC campaigns is more likely to convert, making the overall campaign more successful.</p>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">A/B Testing for Continuous Improvement</h2>
                                            <p>
                                                A/B testing, or split testing, is a powerful technique used by GotechDigi to ensure the best possible performance of your PPC campaigns. Through A/B testing, they test different versions of ads, landing pages, and targeting options to see which combination yields the highest conversion rates.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Ad Testing:</strong> GotechDigi tests multiple ad variations, including different headlines, descriptions, and calls to action, to find the most effective combination.
                                                </li>
                                                <li>
                                                    <strong>Landing Page Testing:</strong> Different versions of landing pages are tested to determine which design, content, and layout lead to the most conversions.
                                                </li>
                                                <li>
                                                    <strong>Targeting Testing:</strong> GotechDigi also tests various targeting methods, including demographic, geographic, and device-based targeting, to ensure your ads reach the right audience.
                                                </li>
                                                {/* <li>
                                        <strong>Performance Monitoring:</strong> Tracking sales and ROI specifically for e-commerce products.
                                    </li> */}
                                            </ul>
                                            <p>By constantly testing and optimizing campaigns, GotechDigi ensures that your PPC campaigns evolve and improve over time, delivering better results and maximizing ROI.</p>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Analytics and Reporting</h2>
                                            <p>Transparency is essential when it comes to PPC campaigns. GotechDigi provides detailed analytics and reporting so that clients can track their campaign performance.</p>
                                            <ul>
                                                <li>
                                                    <strong>Custom Reports:</strong> GotechDigi offers custom PPC reports that highlight key metrics such as impressions, clicks, conversions, and return on ad spend. These reports are designed to give you a clear picture of how your campaign is performing.

                                                </li>
                                                <li>
                                                    <strong>Data-Driven Insights:</strong> The team uses data from the campaign to provide actionable insights, such as identifying high-performing keywords, areas of improvement, and opportunities for further optimization.
                                                </li>
                                                <li>
                                                    <strong>Regular Updates:</strong> GotechDigi sends regular updates and offers meetings to discuss campaign performance, ensuring that clients are always informed.
                                                </li>
                                                {/* <li>
                                        <strong>Monthly Reporting:</strong> Transparent reports detailing clicks, costs, conversions, and ROI.
                                    </li> */}
                                                <p>
                                                    With detailed reporting, GotechDigi ensures that clients understand the value they’re getting from their PPC investment and can make informed decisions to further enhance the campaign’s performance.
                                                </p>
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Retargeting</h2>
                                            <p>Retargeting is an essential strategy to increase conversions and maximize the value of your PPC campaigns. GotechDigi uses advanced retargeting techniques to bring back website visitors who didn’t convert the first time.</p>
                                            <ul>
                                                <li>
                                                    <strong>Behavioral Retargeting:</strong> By tracking user behavior on your website, GotechDigi can show targeted ads to visitors who viewed specific products or services but did not take action.

                                                </li>
                                                <li>
                                                    <strong>Cross-Device Retargeting:</strong> GotechDigi’s retargeting strategies work across devices, ensuring that users are reminded of your products or services regardless of whether they are on mobile, tablet, or desktop.

                                                </li>
                                                <li>
                                                    <strong>Sequential Retargeting:</strong> The agency also uses sequential retargeting, where users are shown different ads at various stages of their buying journey to encourage conversion.

                                                </li>
                                                <p>
                                                    Through retargeting, GotechDigi maximizes the efficiency of PPC campaigns and ensures that no potential customer is lost.

                                                </p>
                                                {/* <li>
                                        <strong>Continuous Optimization:</strong> We constantly monitor and refine campaigns to ensure maximum efficiency.
                                    </li> */}
                                            </ul>

                                            <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Final Thoughts</h2>
                                            <p>
                                                GotechDigi offers a comprehensive suite of Pay-Per-Click (PPC) advertising services that help businesses achieve their digital marketing goals. From keyword research and ad creation to bid management, landing page optimization, and retargeting, GotechDigi covers every aspect of PPC advertising to ensure your campaigns drive traffic, boost conversions, and maximize ROI.
                                                <br /><br />
                                                Their approach is data-driven, with a focus on continuous optimization through A/B testing, real-time adjustments, and in-depth reporting. Whether you’re a small business or a large enterprise, GotechDigi’s PPC services can help you enhance your online presence, outshine your competitors, and achieve sustainable growth.
                                                <br /><br />
                                                For more information on how GotechDigi can help you with PPC advertising, visit GotechDigi.
                                            </p>

                                        </div>
                                        <hr />

                                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Answers to Your (PPC) <br />Service Questions</h2>

                                        <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                                            data-aos="fade-up"
                                            data-aos-duration="2000"
                                            data-aos-once="true">

                                            <Accordion.Item eventKey="0" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >What is Pay-Per-Click (PPC) advertising?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        PPC is a digital marketing strategy where advertisers pay a fee each time their ad is clicked. It’s a way to buy website traffic rather than earning it organically. GotechDigi specializes in crafting targeted PPC campaigns to drive high-quality leads and boost your ROI.                                            </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How can PPC advertising benefit my business?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        PPC helps increase visibility, drive targeted traffic, and generate leads quickly. With GotechDigi’s expert PPC management, you can target the right audience and achieve measurable results efficiently.                                            </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >What platforms are best for PPC advertising?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Popular platforms include Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and Twitter. GotechDigi will assess your business goals and recommend the most suitable platforms for your campaigns.                                            </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How much does PPC advertising cost?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        PPC costs vary depending on your industry, competition, and the keywords you target. You have control over your budget and can set a daily limit. At GotechDigi, we work to optimize your campaigns to lower your Cost Per Click (CPC) and maximize your Return on Ad Spend (ROAS).
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How do you choose the right keywords for my PPC campaign?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        GotechDigi conducts in-depth keyword research to identify high-performing and relevant keywords. This ensures your ads appear in front of the right audience and deliver optimal results.                                            </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >How do you measure the success of a PPC campaign?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        Key metrics include click-through rates (CTR), cost-per-click (CPC), conversion rates, and return on ad spend (ROAS). GotechDigi provides detailed reports and analytics to track and optimize your campaign performance.                                            </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="6" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Can PPC help improve my organic search rankings?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        While PPC doesn’t directly affect organic rankings, it can complement SEO by increasing your website’s visibility and attracting more visitors. GotechDigi can create a balanced strategy combining PPC and SEO for long-term success.                                            </div>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="7" className="mb-15">
                                                <Accordion.Header>
                                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                    <span className="title chy-heading-1" >Why should I choose GotechDigi for my PPC services?</span>
                                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="disc chy-para-1">
                                                        GotechDigi offers expert PPC management with a focus on results. Our team uses advanced strategies, analytics, and continuous optimization to ensure your campaigns deliver maximum ROI. We are committed to helping your business grow through targeted and effective PPC solutions                                            </div>
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

export default ServiceDetailsPPC