import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function JobApply() {
  return (
    <div className="body-bg-1 bg-default" data-background="assets/img/bg/body-bg-1.png" >

        <div className="jobs-apply-area pt-120 pb-120">
            <div className="container chy-container-1">

                <div className="section-title-wrap text-center mb-50">
                    <h5 className="chy-subtitle-1 wow fadeInDown">Job Apply</h5>
                    <h2 className="chy-title-1 chy-split-in-right chy-split-text">Apply For This Job</h2>
                    <p className="chy-section-para-1 wow fadeInLeft" >Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel, imperdiet ut mauris. Ut ultricies arcu risus, malesuada</p>
                </div>

                <div className="contact-form-wrap wow fadeInUp">
                    <form className="contact-form"  action="#">
                        <input type="text" placeholder="first name" />
                        <input type="text" placeholder="last name" />
                        <input type="number" placeholder="phone number" />
                        <input type="text" placeholder="location (city)" />
                        <input type="email" placeholder="email address" />
                        <input type="text" placeholder="position" />
                        <input type="text" placeholder="portfolio / website link" />
                        <input type="text" placeholder="your expected" />
                        <div className="upload-file pt-10 pb-10">
                            <label htmlFor="cv" className="chy-heading-1 title">upload cv</label>
                            <input type="file" name="" id="cv" className="upload-file-btn" />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="cover letter"></textarea>
        
                        <div className="btn-wrap">
                            <button className="chy-pr-btn-1 " type="submit">
                                <span className="text">
                                    apply now
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </button>
                        </div>
        
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default JobApply