import { ArrowRightAlt } from "@mui/icons-material";
import { Paper, Stack, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";

type TJobDescriptionCardProps = {
  jobTitle: string;
  experience: string;
  position: string;
  noOfPosition: string;
  industry: string;
  roleCategory: string;
  location: string;
  postedOn: string;
};

const JobDescriptionCard: React.FC<TJobDescriptionCardProps> = ({
  jobTitle,
  ...props
}) => {
  return (
    <Paper sx={{ borderRadius: "10px" }} elevation={0}>
      {/* <Box
        bgcolor={}
        sx={{ p: 2, borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
      > */}
      <Typography
        color="white"
        fontSize="24px"
        borderRadius="10px"
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          backgroundColor: COLORS.DARK_BLUE,
          color: "white",
          padding: "20px",
        }}
      >
        {jobTitle}
      </Typography>
      {/* </Box> */}
      <Stack
        bgcolor={COLORS.WHITE}
        spacing="14px"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          padding: "20px",
        }}
      >
        {Object.keys(props).map((item) => (
          <Typography fontSize="18px" fontWeight="400">
            {`${messages[item as keyof typeof props]} ${
              props[item as keyof typeof props]
            }`}
          </Typography>
        ))}

        <Stack direction="row" justifyContent="end" alignItems="center">
          <Typography
            fontSize={16}
            fontWeight={700}
            color={COLORS.DARK_BLUE}
            sx={{ cursor: "pointer" }}
          >
            {messages.readMore}
          </Typography>

          <ArrowRightAlt
            sx={{ pt: 0.6, color: COLORS.DARK_BLUE, cursor: "pointer" }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default JobDescriptionCard;
