import { ArrowRightAlt } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import { useNavigate } from "react-router-dom";
import { APPLICATION_URLS } from "../../../../Routing/config/appsConfig";

type TJobDescriptionCardProps = {
  id: string;
  jobTitle: string;
  experience: string;
  position: string;
  noOfPosition: string;
  industry: string;
  roleCategory: string;
  location: string;
  postedOn: string;
  details: Record<string, unknown>;
};

const JobDescriptionCard: React.FC<TJobDescriptionCardProps> = ({
  id,
  jobTitle,
  details,
  ...props
}) => {
  const updatedCurrentOpenings = { ...props };
  const navigate = useNavigate();

  return (
    <Stack height="100%">
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

      <Stack
        bgcolor={COLORS.WHITE}
        spacing="14px"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          padding: "20px",
        }}
        height="100%"
        justifyContent="space-between"
      >
        {Object.keys(updatedCurrentOpenings)?.map((item) => (
          <Typography fontSize="18px" fontWeight="400">
            {`${messages[item as keyof typeof props]} ${
              props[item as keyof typeof props]
            }`}
          </Typography>
        ))}

        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          onClick={() => navigate(`${APPLICATION_URLS.CAREER}/${id}`)}
        >
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
    </Stack>
  );
};

export default JobDescriptionCard;
