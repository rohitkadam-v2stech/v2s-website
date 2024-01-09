import { APPLICATION_URLS } from "../../../Routing/config/appsConfig";

export const NAVBAR_ROUTES = [
  {
    label: "Home",
    path: APPLICATION_URLS.HOME,
  },
  {
    label: "About Us",
    path: APPLICATION_URLS.ABOUT_US,
  },
  {
    label: "Case Studies",
    path: APPLICATION_URLS.CASE_STUDIES,
  },
  {
    label: "Career",
    path: APPLICATION_URLS.CAREER,
  },
  {
    label: "Contact Us",
    path: APPLICATION_URLS.CONTACT_US,
  },
] as const;
