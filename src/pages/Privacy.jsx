import BackToTop from "../components/back-to-top/BackToTop";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import FooterTwo from "../elements/footer/FooterTwo";
import HeaderFive from "../elements/headers/HeaderFive";
// addition imports
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react'
import Preloader from '../components/preloader/Preloader'

const Privacy = () => {
    useEffect(() => {

        // title setup 
        document.title = `Ai Tech Digi - Privacy & Policy`

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
                    <BreadCrumb title="Privacy & Policy" />
                    <div className="container pt-100 pb-100">
                        <h1 className="text-warning">Privacy Policy</h1>

                        <p>
                            At <strong>GotechDigi</strong>, we are committed to protecting your privacy.
                            This Privacy Policy outlines how we collect, use, and safeguard your
                            personal information when you use our website and services.
                        </p>

                        <h4>1. Information We Collect</h4>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li>
                                <strong>Personal Information:</strong> Name, email address, phone number,
                                and business details when you inquire about our services.
                            </li>
                            <li>
                                <strong>Technical Information:</strong> IP address, browser type, and
                                usage data when you visit our website.
                            </li>
                            <li>
                                <strong>Cookies & Tracking Technologies:</strong> To enhance user
                                experience and track website analytics.
                            </li>
                        </ul>

                        <h4>2. How We Use Your Information</h4>
                        <ul>
                            <li>Providing and improving our digital marketing services.</li>
                            <li>Responding to inquiries and customer support requests.</li>
                            <li>
                                Sending newsletters, promotions, and marketing updates (you can opt-out
                                anytime).
                            </li>
                            <li>Enhancing website security and user experience.</li>
                        </ul>

                        <h4>3. Sharing Your Information</h4>
                        <p>
                            We do not sell or trade your personal information. However, we may share it
                            with:
                        </p>
                        <ul>
                            <li>Trusted third-party service providers assisting in delivering our services.</li>
                            <li>Legal authorities if required by law.</li>
                        </ul>

                        <h4>4. Data Protection & Security</h4>
                        <p>
                            We implement security measures to protect your data from unauthorized
                            access, alteration, or disclosure.
                        </p>

                        <h4>5. Cookies & Tracking Technologies</h4>
                        <p>
                            We use cookies to analyze website traffic and personalize your experience.
                            You can disable cookies in your browser settings.
                        </p>

                        <h4>6. Third-Party Links</h4>
                        <p>
                            Our website may contain links to third-party websites. We are not
                            responsible for their privacy practices.
                        </p>

                        <h4>7. Your Rights & Choices</h4>
                        <ul>
                            <li>Request access to your personal data.</li>
                            <li>Request correction or deletion of your data.</li>
                            <li>Opt-out of marketing communications.</li>
                        </ul>

                        <h4>8. Updates to This Policy</h4>
                        <p>
                            We may update this Privacy Policy periodically. Changes will be posted on
                            this page with the updated date.
                        </p>

                        <h4>9. Contact Us</h4>
                        <p>
                            For questions regarding this Privacy Policy, contact us at:
                        </p>
                        <p>
                            📧 Email: <a href="mailto:vivek13tanwar93@gmail.com">vivek13tanwar93@gmail.com</a><br />
                            📞 Phone: <a href="tel:7503266571">7503266571</a><br />
                            📍 Address: Office no. 72, Harikishan Plaza, CB-201, Ring Rd,
                            Block CB, Naraina Village, Naraina, New Delhi, Delhi 110028
                        </p>

                        <p>
                            By using our website and services, you agree to the terms outlined in this
                            Privacy Policy.
                        </p>
                    </div>
                    <FooterTwo />
                    <BackToTop />
                </div>
            }
        </>
    )
}

export default Privacy;