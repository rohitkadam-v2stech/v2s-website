const APPLICATIONS = {
  HOME: `HOME`,
  ABOUT_US: `ABOUT_US`,
  CASE_STUDIES: "CASE_STUDIES",
  CAREER: "CAREER",
  CONTACT_US: "CONTACT_US",
  PAGE_NOT_FOUND: "PAGE_NOT_FOUND",
} as const;

type TApplications = (typeof APPLICATIONS)[keyof typeof APPLICATIONS];

const APPLICATION_URLS: Partial<Record<TApplications, string>> = {
  [APPLICATIONS.HOME]: `/`,
  [APPLICATIONS.ABOUT_US]: `/about-us`,
  [APPLICATIONS.CASE_STUDIES]: `/case-studies`,
  [APPLICATIONS.CAREER]: "/career",
  [APPLICATIONS.CONTACT_US]: "/contact-us",
  [APPLICATIONS.PAGE_NOT_FOUND]: "*",
};

export { APPLICATIONS, APPLICATION_URLS };
