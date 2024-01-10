import { Paper, Stack, Typography } from "@mui/material";
import COLORS from "../../../../../../styles/colors";

type TTestimonialCardProps = {
  imgPath: string;
  username: string;
  companyName: string;
  positionName: string;
  content: string;
};

const TestimonialCard: React.FC<TTestimonialCardProps> = ({
  companyName,
  imgPath,
  positionName,
  username,
  content,
}) => {
  return (
    <Stack spacing={5} width={400} sx={{ color: COLORS.DARK_BLUE }}>
      <Paper component="img" src={imgPath} sx={{ borderRadius: 8 }} />
      <Typography>{content}</Typography>
      <Stack spacing={0.2}>
        <Typography fontWeight="bold">{username}</Typography>
        <Typography>{companyName}</Typography>
        <Typography>{positionName}</Typography>
      </Stack>
    </Stack>
  );
};

export default TestimonialCard;
