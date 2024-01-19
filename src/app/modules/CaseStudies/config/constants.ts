import DomainLogo1 from "../../../assets/caseStudiesDetails/Domain1.png";
import CareImg1 from "../../../assets/caseStudiesDetails/Care1.png";
import QfixImg1 from "../../../assets/caseStudiesDetails/Qfix1.png";
import QfixImg2 from "../../../assets/caseStudiesDetails/Qfix2.png";
import QfixImg3 from "../../../assets/caseStudiesDetails/Qfix3.png";
import QfixImg4 from "../../../assets/caseStudiesDetails/Qfix4.png";
import FissaraLogo from "../../../assets/caseStudiesDetails/FissaraLogo.png";
import FissaraImg1 from "../../../assets/caseStudiesDetails/Fissara1.png";
import PinelabsImg1 from "../../../assets/caseStudiesDetails/Pinelabs1.png";
import PinelabsImg2 from "../../../assets/caseStudiesDetails/Pinelabs2.png";
import PathlockImg1 from "../../../assets/caseStudiesDetails/Pathlock1.png";
import PathlockImg2 from "../../../assets/caseStudiesDetails/Pathlock2.png";
import RipplehireImg from "../../../assets/caseStudiesDetails/Ripplehire.png";

export const COUNTRIES_LIST = [
  {
    id: "1",
    label: "All countries",
  },
  {
    id: "2",
    label: "India",
  },
  {
    id: "3",
    label: "United States",
  },
  {
    id: "4",
    label: "United Kingdom",
  },
];

export const CASE_STUDIES_LIST = [
  {
    id: 1,
    caseName: "Carebeans",
    domain: { name: "Healthcare", logo: DomainLogo1 },
    country: "UK",
    title: "Developing one of the top 5 service providers in care industry",
    subtitle:
      "This product recognized as top 5 service providers in care industry",
    description:
      "Our client in UK, provides innovative digital care management software for the social care sector, including care homes, supported living, domiciliary care, staff rota, scheduling and care planning",
    image: "https://v2stech.com/wp-content/uploads/2023/11/Care_02-1.png",
    flag: "https://v2stech.com/wp-content/uploads/2023/11/UK.png",
    startYear: 2017,
    endYear: null,
    isProjectOngoing: true,
    minTeamSize: 10,
    maxTeamSize: 20,
    valueProposition: [
      {
        title: "Time Impact",
        details: [
          "Rapid MVP Launch - in 3 months",
          "Rapid feature implementations for marketing / care shows",
        ],
      },
      {
        title: "Opportunity Impact",
        details: [
          "NHS Certifified and already in UK Top 5 care software providers.",
          "Open global distribution possibilities",
        ],
      },
      {
        title: "Productivity Impact",
        details: [
          "1 week turnaround for new features - more show & tell for prospects.",
          "400 care homes onboarded with no team additions.",
          "client onboarding - Less than a week.",
        ],
      },
      {
        title: "Financial Impact",
        details: [
          "Accelerated new funding for the venture.",
          "Savings - 20%-30% infra cost reduction.",
        ],
      },
      {
        title: "Oppurtunity Impact",
        details: [
          "10 X revenue growth within 12 months?",
          "Rapid growth - in 6 years. from 30 to 400 carehomes. from 1000 to 10000 carers. from 5000 to 100000 transaction per day",
        ],
      },
    ],
    aboutClient:
      "Our client in UK, provides innovative digital care management software for the social care sector, including care homes, supported living, domiciliary care, staff rota, scheduling and care planning",
    projectRevenue: 6000000,
    projectDuration: 2,
    problemStatement: {
      main: "Client wanted to bring the SaaS application vision to life in elderly care area. He was looking for a technology partner to shoulder the entire responsibility of software development so that client can focus on their business vision",
      subProblemStatements: [],
    },
    solution: [
      "Develop multi-tenant SaaS platform to support onboarding of multiple care homes",
      "Online mobile application delivered to support carer working in remote areas without network connection",
      "Voice based command interaction implemented using devices like Alexa to make interaction more convenient.",
      "Care Planning System for care homes is CQC compliant and in line with KLOE’s, NICE guidelines, GDPR, safeguarding and all UK based regulatory bodies",
      "Security for the system and data is robust and is compliant with DDOS and is monitored 24/7.",
      "Single component based solution provided to support all types of care homes.",
    ],
    ongoingValueBasedRelationship: [
      "Entire technical ownership other then first line support is manage by us from our offshore development center",
      "Representing our client in meeting with third party such as API provider, Investors, hosting providers, care homes etc.",
    ],
    projectScreenshots: [CareImg1],
  },
  {
    id: 2,
    caseName: "Qfix",
    domain: { name: "Education", logo: DomainLogo1 },
    country: "India",
    title:
      "Improved platform with 12 major and 50 minor releases in 3 years. Every release was on-time and within budget.",
    subtitle:
      "This product recognized as top 5 service providers in care industry",
    description:
      "Our client in India is Fintech startup founded in 2015 offers cloud-based end-to-end platform delivering online integrated payments and billing services to multiple sectors.",
    image:
      "https://v2stech.com/wp-content/uploads/2023/05/cs-6-qfix-768x427.png",
    // image: QfixLogo,
    flag: "https://v2stech.com/wp-content/uploads/2023/11/India.png",
    startYear: 2017,
    endYear: 2020,
    isProjectOngoing: false,
    minTeamSize: 10,
    maxTeamSize: 20,
    valueProposition: [
      {
        title: "Time Impact",
        details: [
          "Rapid MVP Launch - in 3 months",
          "Rapid feature implementations for marketing / care shows",
        ],
      },
      {
        title: "Opportunity Impact",
        details: [
          "NHS Certifified and already in UK Top 5 care software providers.",
          "Open global distribution possibilities",
        ],
      },
      {
        title: "Productivity Impact",
        details: [
          "1 week turnaround for new features - more show & tell for prospects.",
          "400 care homes onboarded with no team additions.",
          "client onboarding - Less than a week.",
        ],
      },
      {
        title: "Financial Impact",
        details: [
          "Accelerated new funding for the venture.",
          "Savings - 20%-30% infra cost reduction.",
        ],
      },
    ],
    aboutClient:
      "Our client in India is Fintech startup founded in 2015 offers cloud-based end-to-end platform delivering online integrated payments and billing services to multiple sectors. More than 5,000 merchants are presently on the Qfix platform including educational institutions, governments, and clubs. The company solves for billing and invoices issues and has created robust workflow management solutions for these merchants. HDFC Bank is their lead distribution partner.",
    projectRevenue: 400000,
    projectDuration: 3,
    problemStatement: {
      main: null,
      subProblemStatements: [
        "Due to Demonetization event demand for online transaction has increased manifold, there was need to push for quicker release.",
        "The customer wanted to build quick prototype to test in market with end users and investors.",
      ],
    },
    solution: [
      "Modular architecture helped to handle multi-tenant environment with sustainable, replicable process for new feature development.",
      "V2STech SME for security interacted with relevant agencies and got this platform certified (e.g. Security testing expert, PCI-DSS agency etc.) well in time.",
      "Expertise in Payment processing services helped clients with complex payment features such as merchant-based integration with multiple payment gateways providers, split/partial payments, refunds, reconciliation of funds, Point of Sale (POS) based payment collection etc.",
      "As our extensive knowledge on application security and data security was built into the platform from the start, achieving PCI DSS compliance certification was easy, and application changes were reduced to minimal after audit. Saved 20% development effort for the client.",
      "Re-engineered digitized template-driven process increased 20-25% efficiency for onboarding new Institutes.",
    ],
    ongoingValueBasedRelationship: [
      "Integrating upcoming merchant with Qfix payment platform. Please read more details (link to pinelab case study)",
    ],
    projectScreenshots: [QfixImg1, QfixImg2, QfixImg3, QfixImg4],
  },
  {
    id: 3,
    caseName: "Fissara",
    domain: { name: "Resource Management", logo: DomainLogo1 },
    country: "UK",
    title:
      "Transforming SaaS platform to multitenant architecture & build multiple products",
    subtitle:
      "This product recognized as top 5 service providers in care industry",
    description:
      "Our client in the UK is a specialist in mobilisation started in 2013. Fissara products mobilise people, processes and solutions providing easy to use end-to-end software systems to whom V2STech has been providing software development services since 2016.",
    // image: "https://v2stech.com/wp-content/uploads/2023/11/CS_Fissara.png",
    image: FissaraLogo,
    flag: "https://v2stech.com/wp-content/uploads/2023/11/UK.png",
    startYear: 2016,
    endYear: null,
    isProjectOngoing: true,
    minTeamSize: 10,
    maxTeamSize: 20,
    valueProposition: [
      {
        title: "Time Impact",
        details: [
          "Rapid MVP Launch - in 3 months",
          "Rapid feature implementations for marketing / care shows",
        ],
      },
      {
        title: "Opportunity Impact",
        details: [
          "NHS Certifified and already in UK Top 5 care software providers.",
          "Open global distribution possibilities",
        ],
      },
      {
        title: "Productivity Impact",
        details: [
          "1 week turnaround for new features - more show & tell for prospects.",
          "400 care homes onboarded with no team additions.",
          "client onboarding - Less than a week.",
        ],
      },
      {
        title: "Financial Impact",
        details: [
          "Accelerated new funding for the venture.",
          "Savings - 20%-30% infra cost reduction.",
        ],
      },
      {
        title: "Oppurtunity Impact",
        details: [
          "10 X revenue growth within 12 months?",
          "Rapid growth - in 6 years. from 30 to 400 carehomes. from 1000 to 10000 carers. from 5000 to 100000 transaction per day",
        ],
      },
    ],
    aboutClient:
      "Our client in the UK is a specialist in mobilisation started in 2013. Fissara products mobilise people, processes and solutions providing easy to use end-to-end software systems to whom V2STech has been providing software development services since 2016.",
    projectRevenue: 1000000,
    projectDuration: 7,
    problemStatement: {
      main: "Client was looking for reliable SaaS development partner who can bring technology expertise to support and speed up feature development in existing product",
      subProblemStatements: [],
    },
    solution: [
      "Transform platform from single tenant to multitenant architecture",
      "Simultaneously Build multiple products",
      "Build next gen scheduling engine (Roster) to manage workforce task allocation.",
    ],
    ongoingValueBasedRelationship: [
      "Our team is acting as Domain / product expert",
      "Participating in technical design for new requirement",
      "Generating knowledge base",
      "Product enhancement",
    ],
    projectScreenshots: [FissaraImg1],
  },
  {
    id: 4,
    caseName: "Pathlock",
    domain: { name: "Access Orchestration", logo: DomainLogo1 },
    country: "USA",
    title:
      "Asynchronous business process execution handles high volume through user centred design",
    subtitle:
      "This product recognized as top 5 service providers in care industry",
    description:
      "Our client in USA, helps 100+ fortune 500 organisation automate the enforcement of controls of access, process, or cybersecurity checks, for any business application to whom V2STech provide technology consulting on UI enhancement as per design system guideline, product enhancements and business process automation.",
    image: "https://v2stech.com/wp-content/uploads/2023/11/CS_US.png",
    flag: "https://v2stech.com/wp-content/uploads/2023/11/US.png",
    startYear: 2017,
    endYear: null,
    isProjectOngoing: true,
    minTeamSize: 10,
    maxTeamSize: 20,
    valueProposition: [
      {
        title: "Time Impact",
        details: [
          "Rapid MVP Launch - in 3 months",
          "Rapid feature implementations for marketing / care shows",
        ],
      },
      {
        title: "Opportunity Impact",
        details: [
          "NHS Certifified and already in UK Top 5 care software providers.",
          "Open global distribution possibilities",
        ],
      },
      {
        title: "Productivity Impact",
        details: [
          "1 week turnaround for new features - more show & tell for prospects.",
          "400 care homes onboarded with no team additions.",
          "client onboarding - Less than a week.",
        ],
      },
      {
        title: "Financial Impact",
        details: [
          "Accelerated new funding for the venture.",
          "Savings - 20%-30% infra cost reduction.",
        ],
      },
      {
        title: "Oppurtunity Impact",
        details: [
          "10 X revenue growth within 12 months?",
          "Rapid growth - in 6 years. from 30 to 400 carehomes. from 1000 to 10000 carers. from 5000 to 100000 transaction per day",
        ],
      },
    ],
    aboutClient:
      "Our client in USA, helps 100+ fortune 500 organisation automate the enforcement of controls of access, process, or cybersecurity checks, for any business application to whom V2STech provide technology consulting on UI enhancement as per design system guideline, product enhancements and business process automation.",
    projectRevenue: 1000000,
    projectDuration: 7,
    problemStatement: {
      main: "As a part of digital transformation of their platform and solutions bouquet",
      subProblemStatement: [
        "Client wanted to create an entirely new product experience for its enterprise customers using new technology stack. Client decided to hire expert team from outside of organisation to deliver this solution.",
        "Client also wanted to upgrade existing business process management solution to support high volume of users and data for their prestigious customer.",
      ],
    },
    solution: [
      "V2STech has quickly setup development team which manage to deliver frontend MVP on new technology stack using customer preferred design framework that help customer to showcase to the stakeholder and build a fullfledge solution in quick time without involvement of their core team.",
      "V2STech provided API centric solution for the customer to integrate core product with business process management engine. This solution was able to process API request in parallel to achieve high output.",
    ],
    ongoingValueBasedRelationship: [
      "Team is working on connector implementation requirement for 50+ business app like slack, workday etc",
    ],
    projectScreenshots: [PathlockImg1, PathlockImg2],
  },
  {
    id: 5,
    caseName: "Pinelabs",
    domain: { name: "Fintech", logo: DomainLogo1 },
    country: "India",
    title:
      "Integration of a merchant portal into payments platform to facilitate tax collection",
    subtitle:
      "This product recognized as top 5 service providers in care industry",
    description:
      "Our client founded in 1998 is an Indian company that provides financing and retail transaction technology. It is a unicorn startup, with a valuation of over US$5 billion to whom V2STech is providing a merchant integration solution.",
    image:
      "https://v2stech.com/wp-content/uploads/2023/01/marketing-brand-awareness-saas.jpg",
    flag: "https://v2stech.com/wp-content/uploads/2023/11/India.png",
    startYear: 2021,
    endYear: null,
    isProjectOngoing: true,
    minTeamSize: 5,
    maxTeamSize: 10,
    valueProposition: [
      {
        title: "Time Impact",
        details: [
          "Rapid MVP Launch - in 3 months",
          "Rapid feature implementations for marketing / care shows",
        ],
      },
      {
        title: "Opportunity Impact",
        details: [
          "NHS Certifified and already in UK Top 5 care software providers.",
          "Open global distribution possibilities",
        ],
      },
      {
        title: "Productivity Impact",
        details: [
          "1 week turnaround for new features - more show & tell for prospects.",
          "400 care homes onboarded with no team additions.",
          "client onboarding - Less than a week.",
        ],
      },
      {
        title: "Financial Impact",
        details: [
          "Accelerated new funding for the venture.",
          "Savings - 20%-30% infra cost reduction.",
        ],
      },
      {
        title: "Oppurtunity Impact",
        details: [
          "10 X revenue growth within 12 months?",
          "Rapid growth - in 6 years. from 30 to 400 carehomes. from 1000 to 10000 carers. from 5000 to 100000 transaction per day",
        ],
      },
    ],
    aboutClient:
      "Our client founded in 1998 is an Indian company that provides financing and retail transaction technology. It is a unicorn startup, with a valuation of over US$5 billion to whom V2STech is providing a merchant integration solution.",
    projectRevenue: 1000000,
    projectDuration: 7,
    problemStatement: {
      main: "Client wanted integration of a merchant payment collection system into their proprietary payment processing platform.",
      subProblemStatement: [],
    },
    solution: [
      "We designed and built the middleware solution to streamline integrations with multiple merchants, which significantly reduced integration time.",
      "The application framework is designed to be secure enough to handle data protection in transit using encryption algorithms.",
      "This solution can be scaled to accommodate high user volumes. It was built on microservices architecture combined with DevOps practices.",
      "Framework built is configuration driven to encourage the use of the No Code/Low Code paradigm.",
    ],
    ongoingValueBasedRelationship: [
      "Integrating upcoming merchant with middleware",
      "Proposing architecture changes in core payment platform to support integration.",
      "Continuous improvement in middleware to handle upcoming external merchant requirement.",
      "Acquiring core payment platform knowledge which helps to identify gaps in requirements during merchant integration.",
    ],
    projectScreenshots: [PinelabsImg1, PinelabsImg2],
  },
  {
    caseName: "RippleHire",
    id: 6,
    domain: { name: "Recruitment", logo: DomainLogo1 },
    country: "India",
    title: "Product modernization for a cutting edge recruitment SaaS",
    subtitle:
      "This product recognized as top 5 service providers in care industry",
    description:
      "Our client is a 12 year old Indian company with over US$ 5 million turnover, recognized by NASSCOM as a Nasscom Emerge50 winner for its futuristic HR technology for recruitment that offers a cloud-based hiring platform, trusted by top global and Indian brands. to whom V2STech is providing software development services from 2022.",
    image:
      "https://v2stech.com/wp-content/uploads/2023/11/hr-form-builder1-768x506.png",
    flag: "https://v2stech.com/wp-content/uploads/2023/11/India.png",
    startYear: 2020,
    endYear: 2021,
    isProjectOngoing: false,
    minTeamSize: 3,
    maxTeamSize: 10,
    valueProposition: [
      {
        title: "Time Impact",
        details: [
          "Rapid MVP Launch - in 3 months",
          "Rapid feature implementations for marketing / care shows",
        ],
      },
      {
        title: "Opportunity Impact",
        details: [
          "NHS Certifified and already in UK Top 5 care software providers.",
          "Open global distribution possibilities",
        ],
      },
      {
        title: "Productivity Impact",
        details: [
          "1 week turnaround for new features - more show & tell for prospects.",
          "400 care homes onboarded with no team additions.",
          "client onboarding - Less than a week.",
        ],
      },
      {
        title: "Financial Impact",
        details: [
          "Accelerated new funding for the venture.",
          "Savings - 20%-30% infra cost reduction.",
        ],
      },
      {
        title: "Opportunity Impact",
        details: [
          "10 X revenue growth within 12 months?",
          "Rapid growth - in 6 years. from 30 to 400 carehomes. from 1000 to 10000 carers. from 5000 to 100000 transaction per day",
        ],
      },
    ],
    aboutClient:
      "Our client is a 12 year old Indian company with over US$ 5 million turnover, recognized by NASSCOM as a Nasscom Emerge50 winner for its futuristic HR technology for recruitment that offers a cloud-based hiring platform, trusted by top global and Indian brands. to whom V2STech is providing software development services from 2022.",
    projectRevenue: 1000000,
    projectDuration: 7,
    problemStatement: {
      main: "The usCOUNTRIES_LISTer interface for new customer onboarding was missing and the developer was doing the same using the SQL script in the database. Due to which their core technical team were occupied in manually onboarding of new customers. This was impacting the rollout of new features and potential business growth",
      subProblemStatement: [],
    },
    solution: [
      "We have designed and implemented a framework through which Data can be managed using the admin interface.",
      "Design Client specific Framework : Framework is designed in such a way that creating of updation of form fields can be done easily and at a single point.",
      "Form Builder : Developed dynamic Form builder module to design form using simple drag and drop feature. We have introduced an accelerator to reduce the development efforts by approx 70%.",
      "Dedicated team : we have set up a dedicated team to take care of multiple projects. Team is making sure to create and merge code in the client code base to reduce client development team efforts.",
      "UI/UX team: This team is helping to create new applications which adhere to client brand guidelines.",
    ],
    ongoingValueBasedRelationship: [
      "Multiple parallel project execution based on demand",
      "Scaling team up and down based on task requirement",
      "Continuous involvement of technology and domain specialists is reducing overhead of documentation, communication and rework.",
    ],
    projectScreenshots: [RipplehireImg],
  },
];
