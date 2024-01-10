import { Box, Paper, Stack, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import eGovernance from "../../../../assets/domainExpertise/e-governance.png";
import education from "../../../../assets/domainExpertise/education.png";
import healthcare from "../../../../assets/domainExpertise/healthcare.png";
import payment from "../../../../assets/domainExpertise/payment.png";
import resourceManagement from "../../../../assets/domainExpertise/resource-management.png";

const OurDomainExpertise = () => {
  const OUR_DOMAIN_EXPERTISE: Array<{
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
        "Build Citizen friendly smart city solutions for state goverment and municipal corporations",
      icon: eGovernance,
    },
  ];

  return (
    <Box mb={12.5}>
      <Typography
        textAlign="center"
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
        my={12.5}
      >
        {messages.ourDomainExpertise}
      </Typography>
      <Stack direction="row" justifyContent="space-between" spacing={4} mx={20}>
        {OUR_DOMAIN_EXPERTISE.map(({ id, title, description, icon }) => (
          <Paper
            key={id}
            style={{ width: 400, height: 450 }}
            elevation={4}
            sx={{
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
              pt: "50px",
              pl: "15px",
            }}
          >
            <Box
              bgcolor={COLORS.PRIMARY_BLUE}
              sx={{
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
                paddingInline: "13px",
                boxShadow:
                  "4px 1px 11px 0px rgba(44.19999999999999, 44.19999999999999, 44.19999999999999, 0.5) inset",
              }}
            >
              <Typography
                textAlign="center"
                sx={{
                  fontSize: "50px",
                  fontWeight: "700",
                  color: COLORS.WHITE,
                }}
              >
                {id}
              </Typography>
            </Box>
            <Stack
              mt={2}
              spacing={2}
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              height="70%"
            >
              <Typography
                textAlign="left"
                // mt={2}
                fontSize="22px"
                fontWeight="700"
                lineHeight="23px"
                color={COLORS.DARK_BLUE} // bgcolor="red"
              >
                {title}
              </Typography>
              <Typography
                // textAlign="left"
                // mt="20px"
                fontSize="17px"
                fontWeight="600"
                lineHeight="24px"
                color={COLORS.DARK_BLUE}
              >
                {description}
              </Typography>
              <img
                alt=""
                src={icon}
                width={60}
                height={50}
                style={{ margin: "0px auto", paddingRight: "8px" }}
              />
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default OurDomainExpertise;
