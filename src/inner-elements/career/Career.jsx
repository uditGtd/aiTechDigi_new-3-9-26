import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-2.png'
import iconImg from '../../assets/img/icon/career-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom'

function Career() {

  // --- DATA OBJECT CREATED HERE ---
//   const data = [
//     {
//         id: 1,
//         title: "Product Designer",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     },
//     {
//         id: 2,
//         title: "Digital marketer",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     },
//     {
//         id: 3,
//         title: "Product Designer",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     },
//     {
//         id: 4,
//         title: "Business manager",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     },
//     {
//         id: 5,
//         title: "ui/ux Designer",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     },
//     {
//         id: 6,
//         title: "web developer",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     },
//     {
//         id: 7,
//         title: "Seo supporter",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     },
//     {
//         id: 8,
//         title: "wordpress developer",
//         type: "full time",
//         location: "san francissco",
//         date: "30 march 2024",
//         salary: "$2000.00",
//         desc: "Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna."
//     }
//   ];
const data = [
    {
        id: 1,
        title: "Fullstack Developer",
        type: "Full Time",
        location: "WFO",
        date: "Urgent Hiring",
        salary: "$1200 - $2500",
        desc: "We are looking for an experienced MERN stack developer who can build scalable web applications using React.js, Node.js, and MongoDB with clean code practices."
    },
    {
        id: 2,
        title: "Wordpress Developer",
        type: "Part Time / Full Time",
        location: "WFO",
        date: "Open",
        salary: "$800 - $1500",
        desc: "We need a specialist in custom theme development, plugin integration, Elementor proficiency, and site optimization to manage and build client websites."
    },
    {
        id: 3,
        title: "Marketing / Sales",
        type: "Full Time",
        location: "WFO",
        date: "Urgent Hiring",
        salary: "Commission + Salary",
        desc: "We want a dynamic individual who can generate leads, manage client relationships, and drive sales growth through strategic digital marketing campaigns."
    },
    {
        id: 4,
        title: "Customer Support",
        type: "Full Time",
        location: "WFO",
        date: "Open",
        salary: "$500 - $1000",
        desc: "We are seeking a patient and communicative support executive to handle client queries, troubleshoot technical issues, and ensure customer satisfaction."
    },
    {
        id: 5,
        title: "Shopify Developer",
        type: "Project Base",
        location: "WFO",
        date: "Open",
        salary: "$1000 - $2000",
        desc: "We require an expert in Shopify store setup, Liquid programming, app integration, and custom theme modifications to build high-converting e-commerce stores."
    },
    {
        id: 6,
        title: "UI/UX Designer",
        type: "Part Time / Full Time",
        location: "WFO",
        date: "Open",
        salary: "$800 - $1800",
        desc: "We are looking for a creative designer proficient in Figma and Adobe XD to create user-friendly interfaces, wireframes, and prototypes for web and mobile apps."
    },
    {
        id: 7,
        title: "Mobile App Developer",
        type: "Full Time",
        location: "WFO",
        date: "Urgent Hiring",
        salary: "$1500 - $3000",
        desc: "We need a skilled developer proficient in React Native or Flutter to build cross-platform mobile applications with smooth performance and native-like feel."
    }
  ];

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.chyScl').forEach((el, index) => { 
        let chyScl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 70%",
            toggleActions: "play none none reverse",
            markers: false
        }
        })
        
        chyScl
        .set(el, {transformOrigin: 'center center'})
        .fromTo(el, { scale: .8 }, { scale: 1, duration: .5, immediateRender: false})
    })
  });

  return (
    <div className="body-bg-2 bg-default pt-120 pb-120" style={{backgroundImage: `url(${bgImage})`}}>
            
        <div className="career-page-area">
            <div className="container chy-container-1">
                {/* section-title */}
                <div className="section-title-wrap mb-50 text-center">
                    <h5 className="chy-subtitle-1 wow fadeInDown">Work with us</h5>
                    <h2 className="chy-title-1  chy-split-in-right chy-split-text">Open Positions</h2>
                </div>

                <div className="career-page-item-wrap">

                    {/* --- MAPPING DATA TO CARD --- */}
                    {data.map((item) => (
                        <div key={item.id} className="career-page-item chyScl">
                            <div className="icon-wrap">
                                <img src={iconImg} alt="" />
                                <span className="chy-heading-1 full-time">{item.type}</span>
                            </div>
                            <h4 className="chy-heading-1 title">{item.title}</h4>
                            <div className="meta">
                                <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> {item.location}</span>
                                <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> {item.date}</span>
                            </div>
                            <p className="chy-para-1 disc">{item.desc}</p>

                            <div className="btn-wrap">
                                <Link to="/career-details" className="chy-pr-btn-1 ">
                                    <span className="text">
                                        job apply
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faRightLong} />
                                    </span>
                                </Link>
                                {/* <h4 className="chy-heading-1 price">{item.salary}</h4> */}
                            </div>
                        </div>
                    ))}
                    {/* --- END MAPPING --- */}

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Career