import React from 'react'
import errorImg from '../../assets/img/error/error.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='pt-100 pb-100'>
      <div className='container chy-container-1'>
          <div className='row justify-content-center'>
              <div className='col-lg-8 text-center'>
                  <div className="image">
                    <img src={errorImg} alt="" />
                  </div>
                  <h2 className="error-title">Oops! Page Not found.</h2>
                  <div className="error-one_button btn-wrap mt-50">
                      <Link to='/' className="chy-pr-btn-1 theme-btn"> <span className="text"> Go Back to Home </span> <span className="icon"> <FontAwesomeIcon icon={faLongArrowAltRight} /> </span>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Error