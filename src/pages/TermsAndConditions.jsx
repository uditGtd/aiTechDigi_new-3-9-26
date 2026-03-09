import BackToTop from "../components/back-to-top/BackToTop";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import FooterTwo from "../elements/footer/FooterTwo";
import HeaderFive from "../elements/headers/HeaderFive";
// addition imports
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react'
import Preloader from '../components/preloader/Preloader'

const TermsAndCondition = () => {
    useEffect(() => {

        // title setup 
        document.title = `Ai Tech Digi - Terms and Conditions`

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
                    <BreadCrumb title="Terms & Conditions" />
                    {/* <h1>Privacy</h1> */}
                    <div className="container pt-100 pb-100">
                        <h1 className="text-warning">Terms and Conditions</h1>

                        <p>
                            Welcome to <strong>GotechDigi</strong>! These Terms and Conditions govern
                            your use of our digital marketing services. By accessing or using our
                            services, you agree to comply with and be bound by these terms.
                        </p>

                        <h4>1. Definitions</h4>
                        <ul>
                            <li><strong>Company:</strong> “GotechDigi”</li>
                            <li>
                                <strong>Client:</strong> Any individual or business that purchases or
                                uses our services.
                            </li>
                            <li>
                                <strong>Services:</strong> Digital marketing services, including but not
                                limited to SEO, social media marketing, content creation, and paid
                                advertising.
                            </li>
                        </ul>

                        <h4>2. Scope of Services</h4>
                        <p>
                            We provide digital marketing services as per the agreed-upon strategy.
                            Any changes or additional work beyond the initial agreement may require
                            additional costs and timelines.
                        </p>

                        <h4>3. Client Responsibilities</h4>
                        <ul>
                            <li>Provide accurate information and necessary access to digital assets.</li>
                            <li>Respond to queries and provide approvals in a timely manner.</li>
                            <li>
                                Ensure compliance with applicable laws and regulations related to the
                                project.
                            </li>
                        </ul>

                        <h4>4. Payment Terms</h4>
                        <ul>
                            <li>Payments must be made as per the agreed-upon contract.</li>
                            <li>
                                Late payments may result in service suspension or additional fees.
                            </li>
                            <li>No refunds are issued once the work has commenced.</li>
                        </ul>

                        <h4>5. Intellectual Property</h4>
                        <p>
                            All content, designs, and strategies developed by GotechDigi remain our
                            intellectual property until full payment is received.
                        </p>
                        <p>
                            The client is granted rights to use the delivered materials once the
                            project is completed and paid for.
                        </p>

                        <h4>6. Confidentiality</h4>
                        <p>
                            Both parties agree to maintain the confidentiality of any proprietary
                            information shared during the course of the project.
                        </p>

                        <h4>7. Liability Limitations</h4>
                        <ul>
                            <li>We strive to provide effective marketing strategies, but we do not guarantee specific results.</li>
                            <li>
                                We are not liable for any direct or indirect damages arising from our
                                services.
                            </li>
                        </ul>

                        <h4>8. Termination</h4>
                        <ul>
                            <li>Either party may terminate the agreement with a 30-day written notice.</li>
                            <li>Any outstanding payments must be cleared before termination.</li>
                        </ul>

                        <h4>9. Governing Law</h4>
                        <p>
                            These Terms and Conditions are governed by the laws of India. Any disputes
                            shall be resolved through arbitration or legal proceedings in the
                            applicable jurisdiction.
                        </p>

                        <h4>10. Amendments</h4>
                        <p>
                            GotechDigi reserves the right to update these Terms and Conditions at any
                            time. Clients will be notified of significant changes.
                        </p>

                        <h4>Contact Us</h4>
                        <p>
                            For questions regarding these Terms and Conditions, contact us at:
                        </p>
                        <p>
                            📧 Email: <a href="mailto:vivek13tanwar93@gmail.com">vivek13tanwar93@gmail.com</a><br />
                            📞 Phone: <a href="tel:7503266571">7503266571</a><br />
                            📍 Address: Office no. 72, Harikishan Plaza, CB-201, Ring Rd,
                            Block CB, Naraina Village, Naraina, New Delhi, Delhi 110028
                        </p>

                        <p>
                            By using our website and services, you agree to the terms outlined in
                            these Terms and Conditions.
                        </p>
                    </div>
                    <FooterTwo />
                    <BackToTop />
                </div>
            }
        </>
    )
}

export default TermsAndCondition;