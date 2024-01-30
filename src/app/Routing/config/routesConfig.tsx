import { lazy } from "react";
import { type RouteProps } from "react-router-dom";

import { APPLICATION_URLS } from "./appsConfig";

const Home = lazy(() => import("../../modules/Home"));
const AboutUs = lazy(() => import("../../modules/AboutUs"));
const CaseStudies = lazy(() => import("../../modules/CaseStudies"));
const ContactUs = lazy(() => import("../../modules/ContactUs"));
const Career = lazy(() => import("../../modules/Career"));
const CareerDetails = lazy(
  () => import("../../modules/Career/components/JobDescriptionDetails")
);
const PageNotFound = lazy(() => import("../../modules/PageNotFound"));
const PrivacyPolicy = lazy(() => import("../../modules/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("../../modules/CookiePolicy"));
const TermsConditions = lazy(() => import("../../modules/TermsConditions"));
const RefundPolicy = lazy(() => import("../../modules/RefundPolicy"));
const News = lazy(() => import("../../modules/News"));
const NewsDetails = lazy(
  () => import("../../modules/News/components/NewsDetails")
);

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
  {
    path: APPLICATION_URLS.CAREER_DETAILS,
    element: <CareerDetails />,
  },
  {
    path: APPLICATION_URLS.PRIVACY_POLICY,
    element: <PrivacyPolicy />,
  },
  {
    path: APPLICATION_URLS.COOKIE_POLICY,
    element: <CookiePolicy />,
  },
  {
    path: APPLICATION_URLS.REFUND_POLICY,
    element: <RefundPolicy />,
  },
  {
    path: APPLICATION_URLS.TERMS_AND_CONDITIONS,
    element: <TermsConditions />,
  },
  {
    path: APPLICATION_URLS.PAGE_NOT_FOUND,
    element: <PageNotFound />,
  },
  {
    path: APPLICATION_URLS.NEWS,
    element: <News />,
  },
  {
    path: APPLICATION_URLS.NEWS_DETAILS,
    element: <NewsDetails />,
  },
];

export { ROUTES_CONFIG };
