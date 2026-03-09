import { createBrowserRouter } from "react-router-dom";
import HomeTwo from "../pages/HomeTwo";
import HomeThree from "../pages/HomeThree";
import HomeOne from "../pages/HomeOne";
import HomeFour from "../pages/HomeFour";
import ServicesOne from "../pages/ServicesOne";
import ServicesTwo from "../pages/ServicesTwo";
import ServicesThree from "../pages/ServicesThree";
import ServiceDetailsSEO from "../pages/ServiceDetailsSEO";
import AboutOne from "../pages/AboutOne";
import AboutTwo from "../pages/AboutTwo";
import AboutThree from "../pages/AboutThree";
import TeamOne from "../pages/TeamOne";
import TeamTwo from "../pages/TeamTwo";
import TeamDetails from "../pages/TeamDetails";
import ProjectOne from "../pages/ProjectOne";
import ProjectTwo from "../pages/ProjectTwo";
import ProjectDetails from "../pages/ProjectDetails";
import BlogOne from "../pages/BlogOne";
import BlogTwo from "../pages/BlogTwo";
import BlogDetails from "../pages/BlogDetails";
import Career from "../pages/Career";
import CareerDetails from "../pages/Career-Details";
import JobApply from "../pages/JobApply";
import Faq from "../pages/Faq";
import Testimonial from "../pages/Testimonial";
import OurClients from "../pages/OurClients";
import Pricing from "../pages/Pricing";
import Process from "../pages/Process";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import TermsAndCondition from "../pages/TermsAndConditions";
import Privacy from "../pages/Privacy";
import { Cancellation } from "../pages/Cancellation";
import ServiceDetailsPPC from "../pages/ServiceDetailsPPC";
import ServiceDetailsSMM from "../pages/ServiceDetailsSMM";
import ServiceDetailsCM from "../pages/ServiceDetailsCM";
import ServiceDetailsEM from "../pages/ServiceDetailsEM";
import ServiceDetailsAM from "../pages/ServiceDetailsAM";
import ServiceDetailsIM from "../pages/ServiceDetailsIM";
import ServiceDetailsCRO from "../pages/ServiceDetailsCRO";
import ServiceDetailsWDD from "../pages/ServiceDetailsWDD";
import ServiceDetailsMAM from "../pages/ServiceDetailsMAM";
import ServiceDetailsORM from "../pages/ServiceDetailsORM";
import ServiceDetailsMAR from "../pages/ServiceDetailsMAR";
import ServiceDetailsBSD from "../pages/ServiceDetailsBSD";
import ServiceDetailsPR from "../pages/ServiceDetailsPR";
import ServiceDetailsEventM from "../pages/ServiceDetailsEventM";
import ServiceDetailsGDS from "../pages/ServiceDetailsGDS";
import ServiceDetailsECOM from "../pages/ServiceDetailsECOM";
import ServiceDetailsMA from "../pages/ServiceDetailsMA";
import ServiceDetailsCRM from "../pages/ServiceDetailsCRM";
import ServiceDetailsVSO from "../pages/ServiceDetailsVSO";

const router = createBrowserRouter([

    {
        path: "/",
        element: <HomeTwo/>,
    },
    {
        path: "/home-03",
        element: <HomeThree/>,
    },
    {
        path: "/home-04",
        element: <HomeFour/>,
    },
    {
        path: "/services-01",
        element: <ServicesOne/>
    },
    {
        path: "/services",
        element: <ServicesTwo/>
    },
    {
        path: "/services-03",
        element: <ServicesThree/>
    },
    {
        path: "/service-seo-details",
        element: <ServiceDetailsSEO/>
    },
    {
        path: "/service-ppc-details",
        element: <ServiceDetailsPPC/>
    },
    {
        path: "/service-smm-details",
        element: <ServiceDetailsSMM/>
    },
    {
        path: "/service-cm-details",
        element: <ServiceDetailsCM/>
    },
    {
        path: "/service-em-details",
        element: <ServiceDetailsEM/>
    },
    {
        path: "/service-am-details",
        element: <ServiceDetailsAM/>
    },
    {
        path: "/service-im-details",
        element: <ServiceDetailsIM/>
    },
    {
        path: "/service-cro-details",
        element: <ServiceDetailsCRO/>
    },
    {
        path: "/service-wdd-details",
        element: <ServiceDetailsWDD/>
    },
    {
        path: "/service-mam-details",
        element: <ServiceDetailsMAM/>
    },
    {
        path: "/service-orm-details",
        element: <ServiceDetailsORM/>
    },
    {
        path: "/service-mar-details",
        element: <ServiceDetailsMAR/>
    },
    {
        path: "/service-bsd-details",
        element: <ServiceDetailsBSD/>
    },
    {
        path: "/service-pr-details",
        element: <ServiceDetailsPR/>
    },
    {
        path: "/service-eventm-details",
        element: <ServiceDetailsEventM/>
    },
    {
        path: "/service-gds-details",
        element: <ServiceDetailsGDS/>
    },
    {
        path: "/service-ecom-details",
        element: <ServiceDetailsECOM/>
    },
    {
        path: "/service-ma-details",
        element: <ServiceDetailsMA/>
    },
    {
        path: "/service-crm-details",
        element: <ServiceDetailsCRM/>
    },
    {
        path: "/service-vso-details",
        element: <ServiceDetailsVSO/>
    },
    {
        path: "/about-01",
        element: <AboutOne/>
    },
    {
        path: "/about",
        element: <AboutTwo/>
    },
    {
        path: "/about-03",
        element: <AboutThree/>
    },
    {
        path: "/team-01",
        element: <TeamOne/>
    },
    {
        path: "/team",
        element: <TeamTwo/>
    },
    {
        path: "/team-details",
        element: <TeamDetails/>
    },
    {
        path: "/project-01",
        element: <ProjectOne/>
    },
    {
        path: "/project",
        element: <ProjectTwo/>
    },
    {
        path: "/project-details",
        element: <ProjectDetails/>
    },
    {
        path: "/blog-01",
        element: <BlogOne/>
    },
    {
        path: "/blog",
        element: <BlogTwo/>
    },
    {
        path: "/blog-details",
        element: <BlogDetails/>
    },
    {
        path: "/career",
        element: <Career/>
    },
    {
        path: "/career-details",
        element: <CareerDetails/>
    },
    {
        path: "/job-apply",
        element: <JobApply/>
    },
    {
        path: "/faqs",
        element: <Faq/>
    },
    {
        path: "/testimonial",
        element: <Testimonial/>
    },
    {
        path: "/our-clients",
        element: <OurClients/>
    },
    {
        path: "/pricing",
        element: <Pricing/>
    },
    {
        path: "/process",
        element: <Process/>
    },
    {
        path: "/contact",
        element: <ContactUs/>
    },
    {
        path: "/terms-conditions",
        element: <TermsAndCondition/>
    },
    {
        path: "/privacy-policy",
        element: <Privacy/>
    },
    {
        path: "/cancellation-refunds",
        element: <Cancellation/>
    },
])

export default router;