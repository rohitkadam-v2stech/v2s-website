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
            borderRadius: 8,
            height: { xs: "250px", sm: "250px", md: "200px", lg: "200px" },
            // width: { xs: "250px", sm: "250px", md: "200px", lg: "200px" },
          }}
        />
      )}

      <Typography>{review}</Typography>
      <Stack spacing={0.2}>
        <Typography fontWeight="bold">{author}</Typography>
        <Typography>{company}</Typography>
        <Typography>{position}</Typography>
      </Stack>
    </Stack>
  );
};

export default TestimonialCard;
