import eGovernance from "../../../../assets/domainExpertise/e-governance.png";
import education from "../../../../assets/domainExpertise/education.png";
import healthcare from "../../../../assets/domainExpertise/healthcare.png";
import payment from "../../../../assets/domainExpertise/payment.png";
import resourceManagement from "../../../../assets/domainExpertise/resource-management.png";

export const OUR_DOMAIN_EXPERTISE: Array<{
  id: number;
  title: string;
  description: string;
  icon: string;
}> = [
  {
    id: 1,
    title: "Education",
    description: "1500 + Institutes using application to manage operations",
    icon: education,
  },
  {
    id: 2,
    title: "Payment",
    description:
      "Custom checkout solution capable of handling 10+ million payment transactions monthly",
    icon: payment,
  },
  {
    id: 3,
    title: "Healthcare",
    description:
      "Supports 1,000's of service user with 1+ million data transaction daily",
    icon: healthcare,
  },
  {
    id: 4,
    title: "Resource Management",
    description:
      "Build product suite for waste movements, bulk haulage, people and property management",
    icon: resourceManagement,
  },
  {
    id: 5,
    title: "e-Governance",
    description:
      "Build Citizen friendly smart city solutions for state government and municipal corporations",
    icon: eGovernance,
  },
];
