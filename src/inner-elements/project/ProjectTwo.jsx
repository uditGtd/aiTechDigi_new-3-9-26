import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-3.png'

// Images ki jagah Videos import kiye hain (assets/img/videos/Project_X.mp4)
import video1 from '../../assets/img/video/gotech_vd-1.mp4'
import video2 from '../../assets/img/video/gotech_vd-2.mp4'
import video3 from '../../assets/img/video/gotech_vd-3.mp4'
import video4 from '../../assets/img/video/gotech_vd-4.mp4'
import video5 from '../../assets/img/video/gotech_vd-5.mp4'
import video6 from '../../assets/img/video/gotech_vd-6.mp4'

import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ProjectTwo() {

    // Project Data (Sirf 6 videos hain isliye array me 6 items rakhe hain)
    const data = [
        {
            id: "01",
            name: "ITI Mess Solution",
            video: video1
        },
        {
            id: "02",
            name: "Blue Very",
            video: video2
        },
        {
            id: "03",
            name: "Hearingaids Solution",
            video: video3
        },
        {
            id: "04",
            name: "Sparsh Pearl",
            video: video4
        },
        {
            id: "05",
            name: "Padmakshi",
            video: video5
        },
        {
            id: "06",
            name: "Millo Kitchens & Bath ",
            video: video6
        },
    ]

  return (
    <div className="body-bg-1 bg-default" style={{ backgroundImage:`url(${bgImage})`}} >

        <div className="project-page-2-area pt-120 pb-90">
            <div className="container chy-container-1">

                {/* section-title */}
                <div className="section-title-wrap mb-50 text-center">
                    <h5 className="chy-subtitle-1 wow fadeInDown">Portfolio</h5>
                    <h2 className="chy-title-1  chy-split-in-right chy-split-text">Our Success Projects </h2>
                </div>

                <div className="row">

                    {/* project data map  */}
                    {data.map((item)=> <div key={item.id} className="col-lg-4">
                        <div className="project-page-2-item mb-30">
                            <div className="project-page-item">
                                
                                {/* Image Tag hata kar Video Tag lagaya hai */}
                                <div className="main-img img-cover">
                                    <video 
                                        src={item.video} 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <div className="btn-position">
                                    <Link to="#" className="pp-btn" >
                                        <FiArrowUpRight />
                                    </Link>
                                </div>
                                <div className="content-wrap">
                                    <span className="chy-heading-1 subtitle">marketing</span>
                                    <h3 className="chy-heading-1 title">
                                        <Link to="#">{item.name}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectTwo