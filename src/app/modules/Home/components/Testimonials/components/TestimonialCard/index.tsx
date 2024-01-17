import { Paper, Stack, Typography } from "@mui/material";

import COLORS from "../../../../../../styles/colors";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";

type TTestimonialCardProps = {
  author_image: string | null;
  author: string;
  company: string;
  position: string;
  review: string;
};

const TestimonialCard: React.FC<TTestimonialCardProps> = ({
  company,
  author_image,
  position,
  author,
  review,
}) => {
  const { isOnMobile } = useDeviceSize();

  // ) : (
  //   <Paper
  //     elevation={0}
  //     sx={{
  //       borderRadius: 8,
  //       height: { xs: "150px", sm: "150px", md: "300px", lg: "300px" },
  //     }}
  //   >
  //     <PersonIcon color="inherit" />
  //   </Paper>
  // )}
  return (
    <Stack
      spacing={5}
      sx={{ color: COLORS.DARK_BLUE, mx: isOnMobile ? 2 : 10, my: "auto" }}
      // bgcolor="red"
    >
      {author_image && (
        <Paper
          elevation={0}
          component="img"
          src={author_image}
          sx={{
            borderRadius: "25px",
            height: { xs: "300px", sm: "300px", md: "300px", lg: "300px" },
            // width: { xs: "250px", sm: "250px", md: "200px", lg: "200px" },
          }}
        />
      )}

      <Typography fontSize="16px" fontWeight="400">
        {review}
      </Typography>
      <Stack spacing={0.2}>
        <Typography fontSize="14px" fontWeight="600">
          {author}
        </Typography>
        <Typography fontSize="15px" fontWeight="400">
          {company}
        </Typography>
        <Typography fontSize="15px" fontWeight="400">
          {position}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TestimonialCard;
