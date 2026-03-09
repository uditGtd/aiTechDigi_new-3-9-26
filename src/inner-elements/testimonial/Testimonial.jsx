import React from 'react'
import image1 from '../../assets/img/testimonial/tp-img-1.png'
import image2 from '../../assets/img/testimonial/tp-img-2.png'
import image3 from '../../assets/img/testimonial/tp-img-3.png'
import image4 from '../../assets/img/testimonial/tp-img-4.png'
import image5 from '../../assets/img/testimonial/tp-img-5.png'
import image6 from '../../assets/img/testimonial/tp-img-6.png'

function Testimonial() {
  return (
    <div className="chy-testimonial-page-area bg-default pt-120 pb-90" data-background="assets/img/bg/body-bg-3.png">
        <div className="container chy-container-1">

            {/* section-title */}
            <div className="section-title-wrap text-center mb-50">
                <h5 className="chy-subtitle-1" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true">Our Testimonials</h5>
                <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">Our Clients Say About <br/> Our Services</h2>
            </div>

            <div className="row">

                {/* single-item */}
                <div className="col-lg-6">
                    <div className="chy-testimonial-page-item">
                        <p className="chy-para-1 comment">“Cras eget mauris in nisl tempus lob. Nunc in nisi sapien. Suspendisse fin ibus dolor et pharetra porta. Sed qua elit, lacinia vitae mi quis, ullamcorpe imper diet dolor. Ut imperdiet turpis nulla” </p>
                        <div className="icon">
                            <i className="fi fi-rr-quote-right"></i>
                        </div>
                        <div className="name-wrap">
                            <h4 className="chy-heading-1 name">Kristin Watson</h4>
                            <span className="chy-para-1 bio">CEO OF ZLITEMES</span>
                        </div>
                        <div className="person-img img-cover">
                            <img src={image1} alt="" />
                        </div>
                    </div>
                </div>

                {/* single-item */}
                <div className="col-lg-6">
                    <div className="chy-testimonial-page-item">
                        <p className="chy-para-1 comment">“Cras eget mauris in nisl tempus lob. Nunc in nisi sapien. Suspendisse fin ibus dolor et pharetra porta. Sed qua elit, lacinia vitae mi quis, ullamcorpe imper diet dolor. Ut imperdiet turpis nulla” </p>
                        <div className="icon">
                            <i className="fi fi-rr-quote-right"></i>
                        </div>
                        <div className="name-wrap">
                            <h4 className="chy-heading-1 name">Esther Howard</h4>
                            <span className="chy-para-1 bio">CEO OF ZLITEMES</span>
                        </div>
                        <div className="person-img img-cover">
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </div>

                {/* single-item */}
                <div className="col-lg-6">
                    <div className="chy-testimonial-page-item">
                        <p className="chy-para-1 comment">“Cras eget mauris in nisl tempus lob. Nunc in nisi sapien. Suspendisse fin ibus dolor et pharetra porta. Sed qua elit, lacinia vitae mi quis, ullamcorpe imper diet dolor. Ut imperdiet turpis nulla” </p>
                        <div className="icon">
                            <i className="fi fi-rr-quote-right"></i>
                        </div>
                        <div className="name-wrap">
                            <h4 className="chy-heading-1 name">Bessie Cooper</h4>
                            <span className="chy-para-1 bio">CEO OF ZLITEMES</span>
                        </div>
                        <div className="person-img img-cover">
                            <img src={image3} alt="" />
                        </div>
                    </div>
                </div>

                {/* single-item */}
                <div className="col-lg-6">
                    <div className="chy-testimonial-page-item">
                        <p className="chy-para-1 comment">“Cras eget mauris in nisl tempus lob. Nunc in nisi sapien. Suspendisse fin ibus dolor et pharetra porta. Sed qua elit, lacinia vitae mi quis, ullamcorpe imper diet dolor. Ut imperdiet turpis nulla” </p>
                        <div className="icon">
                            <i className="fi fi-rr-quote-right"></i>
                        </div>
                        <div className="name-wrap">
                            <h4 className="chy-heading-1 name">Jenny Wilson</h4>
                            <span className="chy-para-1 bio">CEO OF ZLITEMES</span>
                        </div>
                        <div className="person-img img-cover">
                            <img src={image4} alt="" />
                        </div>
                    </div>
                </div>

                {/* single-item */}
                <div className="col-lg-6">
                    <div className="chy-testimonial-page-item">
                        <p className="chy-para-1 comment">“Cras eget mauris in nisl tempus lob. Nunc in nisi sapien. Suspendisse fin ibus dolor et pharetra porta. Sed qua elit, lacinia vitae mi quis, ullamcorpe imper diet dolor. Ut imperdiet turpis nulla” </p>
                        <div className="icon">
                            <i className="fi fi-rr-quote-right"></i>
                        </div>
                        <div className="name-wrap">
                            <h4 className="chy-heading-1 name">Dianne Russell</h4>
                            <span className="chy-para-1 bio">CEO OF ZLITEMES</span>
                        </div>
                        <div className="person-img img-cover">
                            <img src={image5} alt="" />
                        </div>
                    </div>
                </div>

                {/* single-item */}
                <div className="col-lg-6">
                    <div className="chy-testimonial-page-item">
                        <p className="chy-para-1 comment">“Cras eget mauris in nisl tempus lob. Nunc in nisi sapien. Suspendisse fin ibus dolor et pharetra porta. Sed qua elit, lacinia vitae mi quis, ullamcorpe imper diet dolor. Ut imperdiet turpis nulla” </p>
                        <div className="icon">
                            <i className="fi fi-rr-quote-right"></i>
                        </div>
                        <div className="name-wrap">
                            <h4 className="chy-heading-1 name">Ralph Edwards</h4>
                            <span className="chy-para-1 bio">CEO OF ZLITEMES</span>
                        </div>
                        <div className="person-img img-cover">
                            <img src={image6} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonial