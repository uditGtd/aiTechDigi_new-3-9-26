import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import ProjectTwoSection from '../inner-elements/project/ProjectTwo'
import TeamSliderOne from '../elements/team-slider/TeamSliderOne'
import ClientOne from '../elements/client/ClientOne'
import bgImage from '../assets/img/bg/body-bg-1.png'
import FooterOne from '../elements/footer/FooterOne'
import BackToTop from '../components/back-to-top/BackToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import FooterTwo from '../elements/footer/FooterTwo'



function ProjectTwo() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Ai Tech Digi - Projects`

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
          <BreadCrumb title="Projects" />
          <ProjectTwoSection />
          <div className="body-bg-1 bg-default" style={{backgroundImage:`url(${bgImage})`}}>
            {/* <TeamSliderOne /> */}
            {/* <ClientOne /> */}
            <FooterTwo />
            <BackToTop />
          </div>
        </div>
        }
    </>
  )
}

export default ProjectTwo