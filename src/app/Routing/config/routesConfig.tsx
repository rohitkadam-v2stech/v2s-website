import { RouteProps } from "react-router-dom";
import { APPLICATION_URLS } from "./appsConfig";
import { lazy } from "react";

const Home = lazy(() => import("../../modules/Home"));
const AboutUs = lazy(() => import("../../modules/AboutUs"));
const CaseStudies = lazy(() => import("../../modules/CaseStudies"));
const ContactUs = lazy(() => import("../../modules/ContactUs"));
const Career = lazy(() => import("../../modules/Career"));

const ROUTES_CONFIG: RouteProps[] = [
  {
    path: APPLICATION_URLS.HOME,
    element: <Home />,
  },
  {
    path: APPLICATION_URLS.ABOUT_US,
    element: <AboutUs />,
  },
  {
    path: APPLICATION_URLS.CASE_STUDIES,
    element: <CaseStudies />,
  },
  {
    path: APPLICATION_URLS.CONTACT_US,
    element: <ContactUs />,
  },
  {
    path: APPLICATION_URLS.CAREER,
    element: <Career />,
  },
];

export { ROUTES_CONFIG };
