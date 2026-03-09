import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-3.png'
import image1 from '../../assets/img/process/process-img-1.jpg'
import image2 from '../../assets/img/process/process-img-2.jpg'
import image3 from '../../assets/img/process/process-img-3.jpg'
import image4 from '../../assets/img/process/process-img-4.jpg'
import image5 from '../../assets/img/process/process_1.jpg'
import image6 from '../../assets/img/process/process_2.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Process() {

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
                .set(el, { transformOrigin: 'center center' })
                .fromTo(el, { scale: .8 }, { scale: 1, duration: .5, immediateRender: false })
        })
    });

    return (
        <div className="body-bg-1 bg-default" style={{ backgroundImage: `url(${bgImage})` }}>

            <div className="our-process-page-area pt-120 pb-120">
                <div className="container chy-container-1">

                    {/* section-title 1*/}
                    <div className="section-title-wrap mb-50 text-center">
                        <h5 className="chy-subtitle-1 wow fadeInDown">Our </h5>
                        <h2 className="chy-title-1  chy-split-in-right chy-split-text">Work Process</h2>
                    </div>

                    {/* single-item 2*/}
                    <div className="our-process-page-item mb-85 chyScl" >
                        <div className="img-wrap">
                            <img src={image1} alt="" />
                        </div>
                        <div className="content-wrap">
                            <h4 className="title chy-heading-1">Business Analysis & Requirement Understanding</h4>
                            <p className="text chy-para-1">
                                We start by understanding your business goals, target audience, and market requirements to build a strong foundation for effective digital marketing strategies.                        </p>
                        </div>
                    </div>

                    {/* single-item 3*/}
                    <div className="our-process-page-item style-2 mb-85 chyScl">
                        <div className="content-wrap">
                            <h4 className="title chy-heading-1">Research & Strategy Planning</h4>
                            <p className="text chy-para-1">
                                Our team conducts in-depth market research, competitor analysis, and keyword research to create a customized, data-driven digital marketing plan.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <img src={image2} alt="" />
                        </div>
                    </div>

                    {/* single-item 4*/}
                    <div className="our-process-page-item mb-85 chyScl">
                        <div className="img-wrap">
                            <img src={image3} alt="" />
                        </div>
                        <div className="content-wrap">
                            <h4 className="title chy-heading-1">Strategy Implementation & Execution</h4>
                            <p className="text chy-para-1">
                                We implement the planned strategy using proven methods like SEO, social media marketing, PPC advertising, and content marketing to drive targeted traffic.
                            </p>
                        </div>
                    </div>

                    {/* single-item 5*/}
                    <div className="our-process-page-item mb-85 style-2 chyScl">
                        <div className="content-wrap">
                            <h4 className="title chy-heading-1">Performance Tracking & Optimization</h4>
                            <p className="text chy-para-1">
                                Campaign performance is continuously monitored using analytics and insights to optimize results, improve conversions, and maximize ROI.                            </p>
                        </div>
                        <div className="img-wrap">
                            <img src={image4} alt="" />
                        </div>
                    </div>

                    {/* single-item 4*/}
                    <div className="our-process-page-item mb-85 chyScl">
                        <div className="img-wrap">
                            <img src={image5} alt="" />
                        </div>
                        <div className="content-wrap">
                            <h4 className="title chy-heading-1">Transparent Reporting & Communication</h4>
                            <p className="text chy-para-1">
                                We provide regular performance reports with clear insights, ensuring transparency and keeping you informed at every stage of the process.
                            </p>
                        </div>
                    </div>

                    {/* single-item 5*/}
                    <div className="our-process-page-item mb-85 style-2 chyScl">
                        <div className="content-wrap">
                            <h4 className="title chy-heading-1">Continuous Growth & Improvement</h4>
                            <p className="text chy-para-1">
                                Based on data and results, we refine strategies to ensure long-term growth, improved brand visibility, and sustainable business success.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <img src={image6} alt="" />
                        </div>
                    </div>

                    {/* ye do or add krne h
                    5. Transparent Reporting & Communication

                    We provide regular performance reports with clear insights, ensuring transparency and keeping you informed at every stage of the process.

                    6. Continuous Growth & Improvement

                    Based on data and results, we refine strategies to ensure long-term growth, improved brand visibility, and sustainable business success. */}

                </div>
            </div>

        </div>
    )
}

export default Process