import React from 'react'

import bgImage from '../../assets/img/breadcrumb/breadcrumb-img-1.jpg'
import { Link } from 'react-router-dom'

function BreadCrumb({title}) {
  return (
    <div className="breadcrumb-area bg-default  has-breadcrumb-overlay" style={{backgroundImage:`url(${bgImage})`}}>
        <div className="container h1-container">
            <div className="row">
                <div className="col-xxl-12">
                    <div className="breadcrumb-wrap text-center">
                        <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text" >{title}</h2>
                        <div className="breadcrumb-list"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-once="true">
                            <Link to="/">Home</Link>
                            <i className="fi fi-br-arrows-alt-h"></i>
                            <span>{title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb