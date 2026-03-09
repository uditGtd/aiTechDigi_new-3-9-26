import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // 1. Link Import kiya

// Icons Imports
import { 
  MdSearch, MdAdsClick, MdShare, MdArticle, MdEmail, MdGroups, 
  MdCampaign, MdTrendingUp, MdDevices, MdPhonelinkSetup, MdSecurity, 
  MdAnalytics, MdOutlineLightbulb, MdPublic, MdEvent, MdBrush, 
  MdShoppingCart, MdAutoGraph, MdSupportAgent, MdKeyboardVoice 
} from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  // 2. Data mein 'path' property add ki gayi hai
  const servicesData = [
    { 
      path: "/service-seo-details",
      icon: <MdSearch />, 
      title: "Search Engine Optimization (SEO)", 
      desc: "Improve website visibility, drive organic traffic, increase rankings, keyword optimization, on-page, off-page techniques." 
    },
    { 
      path: "/service-ppc-details",
      icon: <MdAdsClick />, 
      title: "Pay-Per-Click (PPC) Advertising", 
      desc: "Paid ads, targeted campaigns, cost-effective, Google Ads, instant traffic, measurable results, keyword bidding." 
    },
    { 
      path: "/service-smm-details",
      icon: <MdShare />, 
      title: "Social Media Marketing (SMM)", 
      desc: "Boost brand awareness, engage audience, social platforms, content strategy, paid promotions, influencer partnerships, community growth." 
    },
    { 
      path: "/service-cm-details",
      icon: <MdArticle />, 
      title: "Content Marketing", 
      desc: "Create valuable content, attract audience, blog posts, videos, infographics, storytelling, SEO optimization, build trust." 
    },
    { 
      path: "/service-em-details",
      icon: <MdEmail />, 
      title: "Email Marketing", 
      desc: "Personalized emails, customer engagement, lead nurturing, newsletters, conversions, automation, segmentation, campaign tracking, retention." 
    },
    { 
      path: "/service-am-details",
      icon: <MdGroups />, 
      title: "Affiliate Marketing", 
      desc: "Partner-driven sales, commissions, referrals, product promotion, affiliate networks, performance-based, influencer collaboration, brand reach." 
    },
    { 
      path: "/service-im-details",
      icon: <MdCampaign />, 
      title: "Influencer Marketing", 
      desc: "Collaborate with influencers, brand promotion, reach new audience, sponsored content, authenticity, engagement, targeted campaigns." 
    },
    { 
      path: "/service-cro-details",
      icon: <MdTrendingUp />, 
      title: "Conversion Rate Optimization (CRO)", 
      desc: "Improve website performance, increase conversions, A/B testing, user behavior analysis, enhance user experience, higher ROI." 
    },
    { 
      path: "/service-wdd-details",
      icon: <MdDevices />, 
      title: "Website Development & Design", 
      desc: "Custom websites, user-friendly design, responsive, mobile optimization, fast loading, e-commerce solutions, modern layouts." 
    },
    { 
      path: "/service-mam-details",
      icon: <MdPhonelinkSetup />, 
      title: "Mobile App Marketing", 
      desc: "Increase app downloads, app store optimization, push notifications, user retention, mobile advertising, engagement metrics, app reviews." 
    },
    { 
      path: "/service-orm-details",
      icon: <MdSecurity />, 
      title: "Online Reputation Management (ORM)", 
      desc: "Monitor online reviews, brand protection, manage feedback, positive content, crisis management, build trust, reputation repair." 
    },
    { 
      path: "/service-mar-details",
      icon: <MdAnalytics />, 
      title: "Marketing Analytics & Reporting", 
      desc: "Data-driven insights, campaign performance, ROI tracking, audience behavior, KPI analysis, actionable reports, decision-making." 
    },
    { 
      path: "/service-bsd-details",
      icon: <MdOutlineLightbulb />, 
      title: "Brand Strategy Development", 
      desc: "Helping businesses define their brand identity, voice, and messaging to build strong connections with their target audience." 
    },
    { 
      path: "/service-pr-details",
      icon: <MdPublic />, 
      title: "Public Relations (PR)", 
      desc: "Managing a company's public image, handling media relations, and conducting press releases to maintain a positive reputation." 
    },
    { 
      path: "/service-eventm-details",
      icon: <MdEvent />, 
      title: "Event Marketing", 
      desc: "Organizing and promoting events such as product launches, webinars, conferences, and trade shows to boost brand visibility." 
    },
    { 
      path: "/service-gds-details",
      icon: <MdBrush />, 
      title: "Graphic Design Services", 
      desc: "Creating visually appealing designs for marketing materials like logos, brochures, banners, and advertisements to reinforce brand aesthetics." 
    },
    { 
      path: "/service-ecom-details",
      icon: <MdShoppingCart />, 
      title: "E-commerce Solutions", 
      desc: "Offering services to build, manage, and optimize online stores, including product listing, shopping cart integration, and payment gateway setup." 
    },
    { 
      path: "/service-ma-details",
      icon: <MdAutoGraph />, 
      title: "Marketing Automation", 
      desc: "Streamlining marketing efforts through automated processes such as lead nurturing, customer segmentation, and email automation to increase efficiency." 
    },
    { 
      path: "/service-crm-details",
      icon: <MdSupportAgent />, 
      title: "CRM Solutions", 
      desc: "Implementing and managing CRM systems to improve customer interaction, retention, and sales conversions." 
    },
    { 
      path: "/service-vso-details",
      icon: <MdKeyboardVoice />, 
      title: "Voice Search Optimization", 
      desc: "Optimizing websites and content to ensure visibility and ranking on voice search platforms like Siri, Google Assistant, and Alexa." 
    }
  ];

  return (
    <div className="container-fluid py-5 main-bg">
      <div className="container">
        <div className="text-center mb-5">
            <h6 className="theme-text fw-bold text-uppercase ls-2">services</h6>
            <h2 className="fw-bolder display-6 section-heading">Ai Tech Gigi Services </h2>
        </div>
        
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
              
              <div className="card h-100 modern-card border-0">
                <div className="card-body p-4 d-flex flex-column">
                  
                  <div className="icon-wrapper mb-4">
                    {service.icon}
                  </div>
                  
                  <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                  <p className="card-text text-muted flex-grow-1">{service.desc}</p>
                  
                  {/* 3. 'a' tag ko replace kiya 'Link' se */}
                  <Link to={service.path} className="btn-text-link mt-3 text-decoration-none fw-bold">
                    Know More <FaArrowRight className="ms-2 arrow-icon" />
                  </Link>
                
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* --- Colors & Variables --- */
        :root {
          --theme-orange: #ff6b35;
          --theme-yellow: #ffc107;
        }

        .main-bg { background-color: #fdfdfd; }
        .ls-2 { letter-spacing: 2px; }
        .section-heading { color: #222; }
        .theme-text { color: #ff6b35; }

        /* --- Modern Card Styling --- */
        .modern-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px -10px rgba(255, 107, 53, 0.1); 
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden; 
          position: relative;
          z-index: 1;
        }

        /* --- Top Border Animation (Left to Right) --- */
        .modern-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%; 
            height: 5px; 
            background: linear-gradient(90deg, #ff6b35, #ffc107); 
            transition: width 0.4s ease-in-out; 
            z-index: 2;
        }

        .modern-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(255, 107, 53, 0.25);
        }

        .modern-card:hover::before {
            width: 100%; 
        }

        /* --- Icon & Text Styling --- */
        .icon-wrapper {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b35 0%, #ffc107 100%);
          color: white;
          font-size: 28px;
          box-shadow: 0 8px 20px -5px rgba(255, 107, 53, 0.4);
        }

        .card-title { color: #2c3e50; font-size: 1.2rem; }
        .card-text { font-size: 0.95rem; line-height: 1.6; }

        .btn-text-link {
            color: #ff6b35;
            display: inline-flex;
            align-items: center;
            transition: color 0.3s ease;
            align-self: flex-start;
        }

        .arrow-icon {
            font-size: 0.9rem;
            transition: transform 0.3s ease;
        }

        .btn-text-link:hover { color: #e65100; }
        .btn-text-link:hover .arrow-icon { transform: translateX(5px); }

        @media (max-width: 768px) {
            .modern-card { text-align: center; }
            .icon-wrapper { margin: 0 auto 20px auto; }
            .btn-text-link { align-self: center; }
            .card-body { padding: 30px !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;