import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-3.png';
import logo1 from '../../assets/img/client/cp-logo-1.png'
import logo2 from '../../assets/img/client/cp-logo-2.png'
import logo3 from '../../assets/img/client/cp-logo-3.png'
import logo4 from '../../assets/img/client/cp-logo-4.png'
import logo5 from '../../assets/img/client/cp-logo-5.png'
import logo6 from '../../assets/img/client/cp-logo-6.png'
import logo7 from '../../assets/img/client/cp-logo-7.png'
import logo8 from '../../assets/img/client/cp-logo-8.png'
import logo9 from '../../assets/img/client/cp-logo-9.png'
import logo10 from '../../assets/img/client/cp-logo-10.png'
import logo11 from '../../assets/img/client/cp-logo-11.png'
import logo12 from '../../assets/img/client/cp-logo-12.png'
import logo13 from '../../assets/img/client/cp-logo-13.png'
import logo14 from '../../assets/img/client/cp-logo-14.png'
import logo15 from '../../assets/img/client/cp-logo-15.png'
import logo16 from '../../assets/img/client/cp-logo-16.png'
import logo17 from '../../assets/img/client/cp-logo-17.png'
import logo18 from '../../assets/img/client/cp-logo-18.png'
import logo19 from '../../assets/img/client/cp-logo-19.png'
import logo20 from '../../assets/img/client/cp-logo-20.png'

function OurClients() {

    // data 
    const data = [
        {
            id: "01",
            img: logo1
        },
        {
            id: "02",
            img: logo2
        },
        {
            id: "03",
            img: logo3
        },
        {
            id: "04",
            img: logo4
        },
        {
            id: "05",
            img: logo5
        },
        {
            id: "06",
            img: logo6
        },
        {
            id: "07",
            img: logo7
        },
        {
            id: "08",
            img: logo8
        },
        {
            id: "09",
            img: logo9
        },
        {
            id: "10",
            img: logo10
        },
        {
            id: "11",
            img: logo11
        },
        {
            id: "12",
            img: logo12
        },
        {
            id: "13",
            img: logo13
        },
        {
            id: "14",
            img: logo14
        },
        {
            id: "15",
            img: logo15
        },
        {
            id: "16",
            img: logo16
        },
        {
            id: "17",
            img: logo17
        },
        {
            id: "18",
            img: logo18
        },
        {
            id: "19",
            img: logo19
        },
        {
            id: "20",
            img: logo20
        },
    ]

  return (
    <div className="chy-clients-page-area bg-default pt-120 pb-90" style={{backgroundImage:`url(${bgImage})`}}>
        <div className="container chy-container-1">

            <div className="section-title-wrap text-center mb-50">
                <h5 className="chy-subtitle-1 wow fadeInLeft">Our Clients</h5>
                <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">Trusted by 5,000+ Companies</h2>
            </div>

            <div className="chy-clients-page-wrap">
                {/* data map */}
                {data.map((item)=> <div key={item.id} className="chy-clients-item">
                    <img src={item.img} alt="" />
                </div>
                )}
            </div>

        </div>
    </div>
  )
}

export default OurClients