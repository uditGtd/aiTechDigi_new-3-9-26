import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import bgImage from '../../assets/img/bg/body-bg-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faFacebook, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faClock, faEnvelope, faMapMarkerAlt, faPhone, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ContactUs() {

    const form = useRef()
    const [toast, setToast] = useState({ show: false, type: '', message: '' })

    const showToast = (type, message) => {
        setToast({ show: true, type, message })
        setTimeout(() => setToast({ show: false, type: '', message: '' }), 5000)
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            // 'YOUR_SERVICE_ID'
            'service_5f8fcpw',
            // 'YOUR_TEMPLATE_ID'
            'template_in27zyv',
            form.current,
            {
                // publicKey: 'YOUR_PUBLIC_KEY'
                publicKey: 'LFO-GMUCWakEKTrb3',
            }
        ).then(
            () => {
                showToast('success', 'Message sent successfully!')
                form.current.reset()
            },
            (error) => {
                console.log('FAILED...', error.text)
                showToast('error', 'Failed to send message. Please try again.')
            }
        )
    }

    const toastStyles = {
        overlay: {
            position: 'fixed',
            top: '30px',
            right: '30px',
            zIndex: 99999,
            animation: toast.show ? 'toastSlideIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards' : 'toastSlideOut 0.35s ease forwards',
        },
        box: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            background: toast.type === 'success'
                ? 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)'
                : 'linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)',
            border: `1px solid ${toast.type === 'success' ? 'rgba(99,215,138,0.35)' : 'rgba(255,90,90,0.35)'}`,
            borderRadius: '14px',
            padding: '18px 22px 14px',
            minWidth: '300px',
            maxWidth: '370px',
            boxShadow: toast.type === 'success'
                ? '0 8px 40px rgba(99,215,138,0.15), 0 2px 12px rgba(0,0,0,0.5)'
                : '0 8px 40px rgba(255,90,90,0.15), 0 2px 12px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden',
        },
        iconWrap: {
            flexShrink: 0,
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: toast.type === 'success'
                ? 'rgba(99,215,138,0.15)'
                : 'rgba(255,90,90,0.15)',
            border: `1.5px solid ${toast.type === 'success' ? 'rgba(99,215,138,0.5)' : 'rgba(255,90,90,0.5)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'iconPop 0.5s 0.2s cubic-bezier(0.175,0.885,0.32,1.275) both',
        },
        icon: {
            fontSize: '18px',
            color: toast.type === 'success' ? '#63d78a' : '#ff5a5a',
        },
        textWrap: {
            flex: 1,
            paddingTop: '2px',
        },
        label: {
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: toast.type === 'success' ? '#63d78a' : '#ff5a5a',
            marginBottom: '4px',
            display: 'block',
        },
        message: {
            fontSize: '15px',
            fontWeight: '500',
            color: '#e6edf3',
            lineHeight: '1.4',
            margin: 0,
        },
        close: {
            position: 'absolute',
            top: '10px',
            right: '12px',
            background: 'none',
            border: 'none',
            color: '#8b949e',
            cursor: 'pointer',
            fontSize: '16px',
            lineHeight: 1,
            padding: '2px 4px',
        },
        progressBar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '3px',
            borderRadius: '0 0 14px 14px',
            background: toast.type === 'success'
                ? 'linear-gradient(90deg, #63d78a, #3ec87a)'
                : 'linear-gradient(90deg, #ff5a5a, #e03030)',
            animation: 'toastProgress 5s linear forwards',
        },
    }

    return (
        <>
        <style>{`
            @keyframes toastSlideIn {
                from { transform: translateX(120%); opacity: 0; }
                to   { transform: translateX(0);    opacity: 1; }
            }
            @keyframes toastSlideOut {
                from { transform: translateX(0);    opacity: 1; }
                to   { transform: translateX(120%); opacity: 0; }
            }
            @keyframes toastProgress {
                from { width: 100%; }
                to   { width: 0%;   }
            }
            @keyframes iconPop {
                0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
                60%  { transform: scale(1.2) rotate(5deg); opacity: 1; }
                100% { transform: scale(1) rotate(0deg);  opacity: 1; }
            }
        `}</style>

        {toast.show && (
            <div style={toastStyles.overlay}>
                <div style={toastStyles.box}>
                    <div style={toastStyles.iconWrap}>
                        <span style={toastStyles.icon}>
                            {toast.type === 'success' ? '✓' : '✕'}
                        </span>
                    </div>
                    <div style={toastStyles.textWrap}>
                        <span style={toastStyles.label}>
                            {toast.type === 'success' ? 'Success' : 'Error'}
                        </span>
                        <p style={toastStyles.message}>{toast.message}</p>
                    </div>
                    <button
                        style={toastStyles.close}
                        onClick={() => setToast({ show: false, type: '', message: '' })}
                        aria-label="close notification"
                    >×</button>
                    <div style={toastStyles.progressBar}></div>
                </div>
            </div>
        )}

        <div className="contact-page-area bg-default pt-120 pb-120" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container chy-container-1">


                {/* section-title */}
                <div className="section-title-wrap mb-50 text-center">
                    <h5 className="chy-subtitle-1 wow fadeInDown">contact us</h5>
                    <h2 className="chy-title-1  chy-split-in-right chy-split-text">Please Get in Touch</h2>
                </div>

                <div className="row">
                    <div className="col-lg-7">
                        <div className="contact-form-2-wrap">
                            <h6 className="title chy-heading-1">contact us</h6>

                            {/* FORM UPDATED */}
                            <form ref={form} onSubmit={sendEmail} className="contact-form-2">

                                <div className="item 1">
                                    <label htmlFor="name">Name<span>*</span></label>
                                    <input type="text" name="user_name" placeholder="name" required />
                                </div>

                                <div className="item2">
                                    <label htmlFor="name">phone number<span>*</span></label>
                                    <input type="text" name="user_phone" placeholder="phone number" required/>
                                </div>

                                <div className="item3">
                                    <label htmlFor="name">email address<span>*</span></label>
                                    <input type="email" name="user_email" placeholder="email address" required/>
                                </div>

                                <div className="item4">
                                    <label htmlFor="name">service type<span>*</span></label>
                                    <input type="text" name="service_type" placeholder="service type" required/>
                                </div>


                                <div className="item5">
                                    <label htmlFor="name">message<span>*</span></label>
                                    <textarea name="message" id="" cols="30" rows="10" placeholder="Type your message" required></textarea>
                                </div>

                                <div className="btn-wrap item6">
                                    <button type="submit" aria-label="contact form" className="chy-pr-btn-1">
                                        <span className="text">
                                            send message
                                        </span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faRightLong} />
                                        </span>
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>

                    {/* right-content */}
                    <div className="col-lg-5">
                        <div className="contact-page-content">
                            <div className="contact-page-map mb-40">
                                <iframe
                                    src="https://maps.google.com/maps?q=CB-201%20Office%20Number%2072%2C%20Ring%20Road%20Naraina%2C%20New%20Delhi-110028&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="600"
                                    height="450"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="border-left">
                                <div className="contact-page-contact-list mb-50">
                                    <div className="item">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div className="content-wrap">
                                            <h4 className="chy-heading-1 title">address:</h4>
                                            <p className="chy-para-1 text">CB-201 Office Number 72, Ring Road Naraina, New Delhi-110028</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className="content-wrap">
                                            <h4 className="chy-heading-1 title">Phone Number:</h4>
                                            <span className="chy-para-1 text">
                                                <a href='tel:+91 7503266571'>+91 7503266571</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="content-wrap">
                                            <h4 className="chy-heading-1 title">email:</h4>
                                            <a href='mailto:themexriver@support.com' className="chy-para-1 text">gotechdigi@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faClock} />
                                        </div>
                                        <div className="content-wrap">
                                            <h4 className="chy-heading-1 title">Business Hours:</h4>
                                            <ul className="chy-para-1 text">
                                                <li>
                                                    Monday — Friday 10:30am – 6pm
                                                </li>
                                                <li>
                                                    Saturday — 10am – 3pm
                                                </li>
                                                <li>
                                                    Sunday — Closed
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul className="contact-page-social-link">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" aria-label="social" href="https://www.facebook.com/gotechdigi/">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" aria-label="social" href="https://in.linkedin.com/company/gotechdigi">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" aria-label="social" href='https://www.instagram.com/accounts/login/?next=%2Fgotechdigi&source=omni_redirect'>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" aria-label="social" href="https://www.youtube.com/@gotech_digi">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ContactUs