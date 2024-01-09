import { Box, Paper, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";

const OurDomainExpertise = () => {
  const OUR_DOMAIN_EXPERTISE: Array<{
    id: number;
    title: string;
    description: string;
  }> = [
    {
      id: 1,
      title: "Education",
      description: "1500 + Institutes using application to manage operations",
    },
    {
      id: 2,
      title: "Payment",
      description:
        "Custom checkout solution capable of handling 10+ million payment transactions monthly",
    },
    {
      id: 3,
      title: "Healthcare",
      description:
        "Supports 1,000's of service user with 1+ million data transaction daily",
    },
    {
      id: 4,
      title: "Resource Management",
      description:
        "Build product suite for waste movements, bulk haulage, people and property management",
    },
    {
      id: 5,
      title: "e-Governance",
      description:
        "Build Citizen friendly smart city solutions for state goverment and municipal corporations",
    },
  ];

  return (
    <Box mt={12.5}>
      <Typography
        textAlign="center"
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
      >
        Our Domain Expertise
      </Typography>
      <Stack direction="row" justifyContent="space-between" spacing={4} m={20}>
        {OUR_DOMAIN_EXPERTISE.map(({ id, title, description }) => (
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
            <Typography
              textAlign="left"
              mt={2}
              fontSize="22px"
              fontWeight="700"
              lineHeight="23px"
              color={COLORS.DARK_BLUE}
            >
              {title}
            </Typography>
            <Typography
              textAlign="left"
              mt="20px"
              fontSize="17px"
              fontWeight="600"
              lineHeight="24px"
              color={COLORS.DARK_BLUE}
            >
              {description}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default OurDomainExpertise;
