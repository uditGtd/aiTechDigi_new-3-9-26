import BackToTop from "../components/back-to-top/BackToTop"
import BreadCrumb from "../components/breadcrumb/BreadCrumb"
import FooterTwo from "../elements/footer/FooterTwo"
import HeaderFive from "../elements/headers/HeaderFive"
// addition imports
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react'
import Preloader from '../components/preloader/Preloader'


export const Cancellation = () => {
        useEffect(() => {
    
            // title setup 
            document.title = `Ai Tech Digi - Cancellation and Refunds`
    
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
                    <BreadCrumb title="Cancellation and Refunds" />
                    <div className="container pt-100 pb-100">
                        <h1 className="text-warning">Cancellation and Refunds</h1><hr />
                        <br /><br />
                        <h4>1. Cancellation Policy</h4>
                        <p>
                            At <strong>GotechDigi</strong>, we strive to provide high-quality digital
                            marketing services tailored to your business needs. However, if you wish
                            to cancel a service, please review the following terms:
                        </p>

                        <ul>
                            <li>
                                <strong>Service Cancellation:</strong> Clients can request a
                                cancellation by contacting our support team at least <strong>7 days</strong>
                                {' '}before the project start date.
                            </li>
                            <li>
                                <strong>Subscription Services:</strong> If you have subscribed to a
                                recurring service, cancellation requests must be made at least{' '}
                                <strong>5 days</strong> before the next billing cycle.
                            </li>
                            <li>
                                <strong>No Cancellation After Work Begins:</strong> Once a project has
                                commenced, cancellations are not permitted.
                            </li>
                        </ul>

                        <h4>2. Refund Policy</h4>
                        <p>
                            GotechDigi follows a transparent refund policy based on the nature of the
                            services provided:
                        </p>

                        <ul>
                            <li>
                                <strong>Full Refund:</strong> If the cancellation request is made before
                                the project starts, a full refund will be processed within{' '}
                                <strong>7–10 business days</strong>.
                            </li>
                            <li>
                                <strong>Partial Refund:</strong> If the project is in progress but not
                                completed, a partial refund may be considered based on the work
                                completed.
                            </li>
                            <li>
                                <strong>No Refund:</strong> No refunds will be issued for completed
                                work, digital products, or services that have been delivered as agreed.
                            </li>
                        </ul>

                        <h4>3. Exceptions</h4>
                        <p>Refunds may not be applicable in the following cases:</p>
                        <ul>
                            <li>
                                If the client fails to provide the necessary information required for
                                project execution.
                            </li>
                            <li>
                                If the delay or non-performance is due to client-side issues or
                                third-party dependencies.
                            </li>
                            <li>
                                If the client changes project requirements after the work has started.
                            </li>
                        </ul>

                        <h4>4. Dispute Resolution</h4>
                        <p>
                            If you have any concerns regarding our cancellation and refund process,
                            please contact us at:
                        </p>
                        <p>
                            📞 Phone: <a href="tel:7503266571">7503266571</a>
                        </p>

                        <p>
                            By using GotechDigi’s services, you agree to abide by this policy. We
                            reserve the right to modify this policy at any time without prior notice.
                        </p>
                    </div>
                    <FooterTwo />
                    <BackToTop />
                </div>
            }
        </>
    )
}