import { faRightLong, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function Faq() {

    // 1. STATE MANAGEMENT
    const [activeTab, setActiveTab] = useState('seo');

    // 2. TAB DATA (Navigation Filters)
    const tabData = [
        { id: 1, name: 'Search Engine Optimization', value: 'seo' },
        { id: 2, name: 'Pay-Per-Click Advertising', value: 'ppc' },
        { id: 3, name: 'Social Media Marketing', value: 'smm' },
        { id: 4, name: 'Content Marketing', value: 'content' },
        { id: 5, name: 'Email Marketing', value: 'email' },
        { id: 6, name: 'Affiliate Marketing', value: 'affiliate' },
        { id: 7, name: 'Influencer Marketing', value: 'influencer' },
        { id: 8, name: 'Conversion Rate Optimization (CRO)', value: 'cro' },
        { id: 9, name: 'Website Development & Design', value: 'web' },
        { id: 10, name: 'Mobile App Marketing', value: 'mobile' },
        { id: 11, name: 'ORM Services', value: 'orm' },
        { id: 12, name: 'Marketing Analytics', value: 'analytics' },
        { id: 13, name: 'Brand Strategy', value: 'brand' },
        { id: 14, name: 'Public Relations', value: 'pr' },
        { id: 15, name: 'Event Marketing', value: 'event' },
        { id: 16, name: 'Graphic Design', value: 'graphic' },
        { id: 17, name: 'E-commerce Solutions', value: 'ecommerce' },
        { id: 18, name: 'Marketing Automation', value: 'automation' },
        { id: 19, name: 'CRM Solutions', value: 'crm' },
        { id: 20, name: 'Voice Search (VSO)', value: 'voice' },
    ];

    // 3. FULL FAQ DATA
    const faqData = [
        // --- SEO ---
        {
            id: 'seo-1', category: 'seo',
            question: "What is SEO and why is it important for my business?",
            answer: "Search Engine Optimization (SEO) is the process of optimizing your website to rank higher in search engine results. It is crucial for driving organic traffic, increasing brand visibility, and attracting potential customers who are actively searching for your products or services."
        },
        {
            id: 'seo-2', category: 'seo',
            question: "How long does it take to see results from SEO?",
            answer: "The time it takes to see SEO results can vary, but typically, you can start seeing improvements in rankings within 3 to 6 months depending on competition."
        },
        {
            id: 'seo-3', category: 'seo',
            question: "What SEO services does GotechDigi offer?",
            answer: "At GotechDigi, we offer a comprehensive range of SEO services, including keyword research, on-page optimization, technical SEO, link building, local SEO, content optimization, and SEO audits."
        },
        {
            id: 'seo-4', category: 'seo',
            question: "Do I need to hire an SEO expert or can I do it myself?",
            answer: "While basic SEO can be managed personally, hiring an expert ensures you leverage advanced strategies, tools, and experience to get faster and sustainable results."
        },

        // --- PPC ---
        {
            id: 'ppc-1', category: 'ppc',
            question: "What is PPC advertising and how does it work?",
            answer: "PPC (Pay-Per-Click) is a model where advertisers pay a fee each time one of their ads is clicked. It allows you to buy visits to your site rather than earning them organically."
        },
        {
            id: 'ppc-2', category: 'ppc',
            question: "What is the difference between SEO and PPC?",
            answer: "SEO focuses on earning traffic through organic (unpaid) search results and takes time. PPC involves paying for ad placement for immediate visibility and traffic."
        },
        {
            id: 'ppc-3', category: 'ppc',
            question: "How soon can I see results from PPC?",
            answer: "Unlike SEO, PPC results are almost immediate. Once the campaign is set up and approved, your ads can start appearing and driving traffic within hours."
        },

        // --- SMM (Social Media Marketing) ---
        {
            id: 'smm-1', category: 'smm',
            question: "What platforms should my business be on?",
            answer: "It depends on your target audience. B2B businesses often thrive on LinkedIn, while B2C brands see great engagement on Instagram, Facebook, and TikTok. We analyze your audience to recommend the best mix."
        },
        {
            id: 'smm-2', category: 'smm',
            question: "How does GotechDigi measure social media success?",
            answer: "We track metrics such as engagement rate (likes, comments, shares), reach, impressions, click-through rate (CTR), and conversions to ensure your campaigns are delivering ROI."
        },
        {
            id: 'smm-3', category: 'smm',
            question: "Do you create content for social media?",
            answer: "Yes, our team creates high-quality visuals, videos, and copy tailored to your brand voice and the specific requirements of each platform."
        },

        // --- Content Marketing ---
        {
            id: 'content-1', category: 'content',
            question: "What is content marketing, and why is it important?",
            answer: "Content marketing involves creating and sharing valuable content to attract and retain a target audience. It is essential for building trust, improving brand visibility, and driving conversions."
        },
        {
            id: 'content-2', category: 'content',
            question: "What types of content does GotechDigi offer?",
            answer: "GotechDigi offers blog posts, website copy, videos, infographics, social media posts, whitepapers, and more, tailored to each client's needs."
        },
        {
            id: 'content-3', category: 'content',
            question: "Can content marketing improve SEO rankings?",
            answer: "Yes, content marketing enhances SEO by providing fresh, keyword-optimized content that increases website authority and visibility on search engines."
        },

        // --- Email Marketing ---
        {
            id: 'email-1', category: 'email',
            question: "What is the average ROI for email marketing campaigns?",
            answer: "The average ROI is approximately $42 for every $1 spent, making it one of the most cost-effective marketing strategies."
        },
        {
            id: 'email-2', category: 'email',
            question: "Can GotechDigi handle large email lists?",
            answer: "Yes, GotechDigi has the tools and expertise to manage large email lists effectively, ensuring high deliverability and segmentation."
        },
        {
            id: 'email-3', category: 'email',
            question: "How does GotechDigi ensure email compliance?",
            answer: "We strictly follow GDPR, CAN-SPAM, and other email regulations to ensure your campaigns are legally compliant and build trust with your audience."
        },

        // --- Affiliate Marketing ---
        {
            id: 'affiliate-1', category: 'affiliate',
            question: "What is affiliate marketing?",
            answer: "Affiliate marketing is a performance-based strategy where affiliates promote your products or services and earn commissions based on successful conversions, such as sales or leads."
        },
        {
            id: 'affiliate-2', category: 'affiliate',
            question: "How do affiliates get paid?",
            answer: "Affiliates are typically paid through commission-based models, which can include pay-per-click (PPC), pay-per-lead (PPL), or pay-per-sale (PPS) depending on the program structure."
        },
        {
            id: 'affiliate-3', category: 'affiliate',
            question: "How do I track the performance of my affiliate program?",
            answer: "We use advanced tracking software that monitors clicks, conversions, and commissions in real-time, providing you with detailed performance reports."
        },

        // --- Influencer Marketing ---
        {
            id: 'influencer-1', category: 'influencer',
            question: "How does GotechDigi choose influencers?",
            answer: "GotechDigi identifies influencers based on their audience demographics, engagement rates, content relevance, and alignment with your brand's values and goals."
        },
        {
            id: 'influencer-2', category: 'influencer',
            question: "What platforms do GotechDigi work with?",
            answer: "We work across major platforms including Instagram, YouTube, TikTok, LinkedIn, and Twitter depending on where your target audience is most active."
        },
        {
            id: 'influencer-3', category: 'influencer',
            question: "Do you offer custom influencer marketing strategies?",
            answer: "Yes, we design tailored strategies based on your specific goals, whether it is for brand awareness, product launches, or driving direct sales."
        },

        // --- CRO (Conversion Rate Optimization) ---
        {
            id: 'cro-1', category: 'cro',
            question: "What is Conversion Rate Optimization (CRO)?",
            answer: "CRO is the process of increasing the percentage of website visitors who take a desired action, such as filling out a form or making a purchase."
        },
        {
            id: 'cro-2', category: 'cro',
            question: "How does GotechDigi identify conversion barriers?",
            answer: "We use tools like heatmaps, session recordings, and user testing to analyze user behavior and identify where visitors are dropping off."
        },
        {
            id: 'cro-3', category: 'cro',
            question: "Is A/B testing part of your CRO services?",
            answer: "Yes, we conduct rigorous A/B testing on headlines, buttons, images, and layouts to determine which variations yield the best results."
        },

        // --- Web Development ---
        {
            id: 'web-1', category: 'web',
            question: "What is custom website design?",
            answer: "Custom website design refers to creating a website tailored to your business's specific needs and goals, focusing on visual appeal and user alignment."
        },
        {
            id: 'web-2', category: 'web',
            question: "Is SEO included in website development?",
            answer: "Yes, GotechDigi ensures that all websites are built with SEO best practices, including optimized code, fast load times, and mobile responsiveness."
        },
        {
            id: 'web-3', category: 'web',
            question: "Can I manage my website without technical knowledge?",
            answer: "Yes, we use CMS platforms like WordPress that allow you to easily manage and update your content without needing coding skills."
        },

        // --- Mobile App Marketing ---
        {
            id: 'mobile-1', category: 'mobile',
            question: "What is App Store Optimization (ASO)?",
            answer: "ASO enhances an app's visibility in app stores by optimizing titles, descriptions, keywords, and visuals, leading to increased organic downloads."
        },
        {
            id: 'mobile-2', category: 'mobile',
            question: "What role do pre-launch campaigns play?",
            answer: "Pre-launch campaigns help build anticipation by creating teaser content and collecting pre-registrations before the app's official release."
        },
        {
            id: 'mobile-3', category: 'mobile',
            question: "How does GotechDigi measure success?",
            answer: "Success is measured through analytics such as user acquisition rates, retention rates, daily active users (DAU), and return on ad spend (ROAS)."
        },

        // --- ORM (Online Reputation Management) ---
        {
            id: 'orm-1', category: 'orm',
            question: "What is Online Reputation Management?",
            answer: "ORM involves monitoring and influencing your brand's reputation online. It includes managing reviews, addressing negative feedback, and promoting positive content."
        },
        {
            id: 'orm-2', category: 'orm',
            question: "Can you remove negative reviews?",
            answer: "While we cannot arbitrarily delete legitimate reviews, we can help flag violations of platform policies and suppress negative content by promoting positive assets."
        },
        {
            id: 'orm-3', category: 'orm',
            question: "How do you monitor my brand's reputation?",
            answer: "We use advanced social listening and monitoring tools to track brand mentions, reviews, and sentiment across the web in real-time."
        },

        // --- Marketing Analytics ---
        {
            id: 'analytics-1', category: 'analytics',
            question: "What is Marketing Analytics & Reporting?",
            answer: "It involves tracking, analyzing, and interpreting data from marketing campaigns to measure their effectiveness and optimize future strategies."
        },
        {
            id: 'analytics-2', category: 'analytics',
            question: "How frequently will I receive reports?",
            answer: "GotechDigi offers customizable reporting schedules, including weekly, monthly, or campaign-specific reports based on your preferences."
        },
        {
            id: 'analytics-3', category: 'analytics',
            question: "Can Marketing Analytics help with budget allocation?",
            answer: "Yes, by analyzing the ROI of various channels, analytics guide businesses in reallocating budgets to the most effective campaigns."
        },

        // --- Brand Strategy ---
        {
            id: 'brand-1', category: 'brand',
            question: "What industries does GotechDigi cater to for brand strategy?",
            answer: "We serve a wide range of industries including healthcare, real estate, e-commerce, tech, and retail."
        },
        {
            id: 'brand-2', category: 'brand',
            question: "Do you provide logo design as part of brand strategy?",
            answer: "Yes, logo design and visual identity creation are integral parts of our branding services."
        },
        {
            id: 'brand-3', category: 'brand',
            question: "Can GotechDigi handle international branding projects?",
            answer: "Absolutely, we have experience in managing both local and global branding strategies to ensure cultural relevance."
        },

        // --- Public Relations (PR) ---
        {
            id: 'pr-1', category: 'pr',
            question: "How does PR differ from advertising?",
            answer: "PR focuses on earned media and building relationships to gain organic coverage, whereas advertising involves paying for guaranteed placement."
        },
        {
            id: 'pr-2', category: 'pr',
            question: "How does GotechDigi handle crisis communication?",
            answer: "We prepare crisis management plans, monitor digital platforms, and respond swiftly with clear messaging to mitigate reputation damage."
        },
        {
            id: 'pr-3', category: 'pr',
            question: "What is the role of analytics in PR?",
            answer: "We track media mentions, audience reach, and sentiment analysis to measure the impact and success of PR campaigns."
        },

        // --- Event Marketing ---
        {
            id: 'event-1', category: 'event',
            question: "What types of events are included in event marketing?",
            answer: "We manage trade shows, webinars, product launches, corporate events, and hybrid gatherings."
        },
        {
            id: 'event-2', category: 'event',
            question: "Can GotechDigi manage virtual events?",
            answer: "Yes, we specialize in planning and promoting webinars, live streams, and full-scale virtual conferences."
        },
        {
            id: 'event-3', category: 'event',
            question: "How early should I plan my event?",
            answer: "It is advisable to start planning at least 3-6 months before the event to ensure optimal attendance and seamless execution."
        },

        // --- Graphic Design ---
        {
            id: 'graphic-1', category: 'graphic',
            question: "What graphic design services do you offer?",
            answer: "We provide logo design, brochures, social media graphics, business cards, infographics, packaging design, and website visuals."
        },
        {
            id: 'graphic-2', category: 'graphic',
            question: "Do you provide editable source files?",
            answer: "Yes, upon project completion, we provide all necessary source files (AI, PSD, EPS) along with print-ready formats."
        },
        {
            id: 'graphic-3', category: 'graphic',
            question: "How many revisions do I get?",
            answer: "We typically offer a set number of revisions (e.g., 2-3 rounds) to ensure the design meets your satisfaction without indefinite delays."
        },

        // --- E-commerce Solutions ---
        {
            id: 'ecommerce-1', category: 'ecommerce',
            question: "What platforms does GotechDigi specialize in?",
            answer: "We specialize in platforms like Shopify, Magento, WooCommerce, and custom-built e-commerce solutions."
        },
        {
            id: 'ecommerce-2', category: 'ecommerce',
            question: "Can you integrate third-party tools into my store?",
            answer: "Yes, we can integrate payment gateways, shipping providers, CRM systems, and analytics tools into your online store."
        },
        {
            id: 'ecommerce-3', category: 'ecommerce',
            question: "How do you ensure website security?",
            answer: "We implement SSL certificates, secure payment gateways, and regular security audits to protect your store and customer data."
        },

        // --- Marketing Automation ---
        {
            id: 'automation-1', category: 'automation',
            question: "What is marketing automation?",
            answer: "Marketing automation uses software to streamline, automate, and measure marketing tasks like emails, social media, and ad campaigns."
        },
        {
            id: 'automation-2', category: 'automation',
            question: "What tools does GotechDigi use?",
            answer: "We use industry-leading tools like HubSpot, Marketo, ActiveCampaign, and Salesforce Marketing Cloud."
        },
        {
            id: 'automation-3', category: 'automation',
            question: "Can small businesses afford marketing automation?",
            answer: "Yes, we offer scalable solutions that are tailored to the budget and specific needs of small to medium-sized businesses."
        },

        // --- CRM Solutions ---
        {
            id: 'crm-1', category: 'crm',
            question: "What CRM platforms do you support?",
            answer: "We support major CRM platforms including Salesforce, HubSpot, Zoho CRM, and Microsoft Dynamics 365."
        },
        {
            id: 'crm-2', category: 'crm',
            question: "Can you migrate my data from an old CRM?",
            answer: "Yes, we provide secure data migration services to transfer your contacts, leads, and history to your new CRM system without data loss."
        },
        {
            id: 'crm-3', category: 'crm',
            question: "How does CRM improve sales?",
            answer: "A CRM organizes customer data, tracks interactions, and automates follow-ups, ensuring your sales team never misses a lead and closes deals faster."
        },

        // --- Voice Search Optimization ---
        {
            id: 'voice-1', category: 'voice',
            question: "Why is Voice Search Optimization important?",
            answer: "Voice search is growing rapidly. Optimizing for it ensures your business appears in voice results from Siri, Alexa, and Google Assistant, capturing mobile traffic."
        },
        {
            id: 'voice-2', category: 'voice',
            question: "How does Voice Search differ from traditional search?",
            answer: "Voice searches are more conversational, often longer (long-tail keywords), and frequently have local intent (e.g., 'near me')."
        },
        {
            id: 'voice-3', category: 'voice',
            question: "Is Voice Search Optimization a one-time effort?",
            answer: "No, like traditional SEO, it requires ongoing updates to adapt to changing algorithms and user behavior patterns."
        }
    ];

    // 4. FILTER LOGIC
    const filteredData = faqData.filter(item => item.category === activeTab);

    return (
        <>
            {/* --- NAVBAR FILTER SECTION --- */}
            <nav className='pt-120'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='d-flex align-items-center'
                                style={{
                                    gap: '15px',
                                    padding: '20px 0',
                                    borderBottom: '2px solid #f0f0f0',
                                    overflowX: 'auto',
                                    overflowY: 'hidden',
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#fd8d0d #f0f0f0',
                                    WebkitOverflowScrolling: 'touch'
                                }}>

                                {/* Loop through Tab Data */}
                                {tabData.map((tab) => (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.value)}
                                        className='px-3 py-2'
                                        style={{
                                            cursor: 'pointer',
                                            fontWeight: activeTab === tab.value ? '700' : '600',
                                            fontSize: '14px',
                                            textTransform: 'uppercase',
                                            color: activeTab === tab.value ? '#fd8d0d' : '#333',
                                            backgroundColor: activeTab === tab.value ? '#fff5e6' : 'transparent',
                                            borderRadius: '6px',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap',
                                            border: activeTab === tab.value ? '2px solid #fd8d0d' : '2px solid transparent',
                                            flexShrink: 0
                                        }}
                                    >
                                        {tab.name}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* ----------------------------- */}

            <div className="chy-faq-page-area bg-default pt-50 pb-120" data-background="assets/img/bg/body-bg-1.png">

                <div className="container chy-container-1">
                    <div className="row">

                        {/* left-content */}
                        <div className="col-lg-5">
                            <div className="chy-faq-page-content">

                                {/* section-title */}
                                <div className="section-title-wrap ">
                                    <h5 className="chy-subtitle-1">popular questions</h5>
                                    <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">Frequently Asked Questions</h2>
                                    <p className="chy-section-para-1">
                                        Find clear answers to common questions about our services, process, pricing, and support to help you make informed decisions.
                                    </p>
                                </div>

                                <div className="btn-wrap">
                                    <Link className="chy-pr-btn-1" >
                                        <span className="text">
                                            other question?
                                        </span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faRightLong} />
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* right-faq */}
                        <div className="col-lg-7">
                            <div className="chy-faq-page-accordion">
                                <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    data-aos-once="true">

                                    {/* Map Loop Starts Here (Using filteredData) */}
                                    {filteredData.map((item, index) => (
                                        <Accordion.Item eventKey={index.toString()} className="mb-15" key={item.id}>
                                            <Accordion.Header>
                                                <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                                <span className="title chy-heading-1" >{item.question}</span>
                                                <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="disc chy-para-1">
                                                    {item.answer}
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                    {/* Map Loop Ends Here */}

                                </Accordion>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq