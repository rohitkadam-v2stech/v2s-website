import { Paper, Stack, Typography } from "@mui/material";
import COLORS from "../../../../../../styles/colors";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";

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
  const { isOnMobile } = useDeviceSize();

  return (
    <Stack
      spacing={5}
      sx={{ color: COLORS.DARK_BLUE, mx: isOnMobile ? 2 : 10 }}
    >
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
