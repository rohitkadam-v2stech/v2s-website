import { CASE_STUDIES_LIST } from "../../../config/constants";

export const V2S_TECH_YOUTUBE_VIDEO_EMBED_ID = "Uw7S7DoW-Ms";

export const CASE_ROUTES = {
  CAREBEANS: "carebeans-digital-care-management-software",
  QFIX: "qfix-online-integrated-payment-and-billing-service",
  FISSARA: "fissara-mobile-workforce-management-software",
  PATHLOCK: "pathlock-platform-for-company-auditing",
  PINELABS: "pinelabs-financing-transactions-management-software",
  RIPPLEHIRE: "ripplehire-talent-acquisition-cloud-platform",
};

export const CASE_LIST: any = {
  [CASE_ROUTES.CAREBEANS]: {
    path: CASE_ROUTES.CAREBEANS,
    data: CASE_STUDIES_LIST[0],
  },
  [CASE_ROUTES.QFIX]: {
    path: CASE_ROUTES.QFIX,
    data: CASE_STUDIES_LIST[1],
  },
  [CASE_ROUTES.FISSARA]: {
    path: CASE_ROUTES.FISSARA,
    data: CASE_STUDIES_LIST[2],
  },
  [CASE_ROUTES.PATHLOCK]: {
    path: CASE_ROUTES.PATHLOCK,
    data: CASE_STUDIES_LIST[3],
  },
  [CASE_ROUTES.PINELABS]: {
    path: CASE_ROUTES.PINELABS,
    data: CASE_STUDIES_LIST[4],
  },
  [CASE_ROUTES.RIPPLEHIRE]: {
    path: CASE_ROUTES.RIPPLEHIRE,
    data: CASE_STUDIES_LIST[5],
  },
};
