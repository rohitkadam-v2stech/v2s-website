import { APPLICATION_URLS } from "../../Routing/config/appsConfig";
import { messages } from "./messages";

export const FOOTER_LINKS = [
  {
    name: messages.privacyPolicy,
    pathname: APPLICATION_URLS.PRIVACY_POLICY,
  },
  {
    name: messages.termsAndConditions,
    pathname: APPLICATION_URLS.TERMS_AND_CONDITIONS,
  },
  {
    name: messages.cookiePolicy,
    pathname: APPLICATION_URLS.COOKIE_POLICY,
  },
  {
    name: messages.refundPolicy,
    pathname: APPLICATION_URLS.REFUND_POLICY,
  },
];
