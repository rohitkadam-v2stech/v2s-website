import { Divider, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import COLORS from "../../styles/colors";
import { messages } from "./config/messages";

type TOverviewCardProps = {
  image: string;
  title: string;
  description: string;
  onReadMoreClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  imageHeight?: string | number;
};

const OverviewCard: React.FC<TOverviewCardProps> = ({
  image,
  title,
  description,
  onReadMoreClick,
  imageHeight = "100%",
}) => (
  <>
    <Stack height="100%" justifyContent="space-between">
      <Stack>
        <img src={image} alt="blogs" width="100%" height={imageHeight} />

        <Typography
          mt={4}
          fontSize={20}
          fontWeight={700}
          color={COLORS.DARK_BLUE}
        >
          {title}
        </Typography>

        <Typography
          mt={2}
          fontSize={14}
          fontWeight={400}
          color={COLORS.GREY_TEXT}
          textAlign="justify"
        >
          {description}
        </Typography>
      </Stack>

      <Stack spacing={1} mt={4}>
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          onClick={onReadMoreClick}
        >
          <Typography color={COLORS.DARK_BLUE} sx={{ cursor: "pointer" }}>
            {messages.readMore}
          </Typography>

          <EastIcon fontSize="small" sx={{ color: COLORS.DARK_BLUE }} />
        </Stack>
      </Stack>
    </Stack>

    <Divider
      sx={{
        mt: 1,
        border: 0,
        borderTop: `2px dashed ${COLORS.DARK_BLUE}`,
      }}
    />
  </>
);

export default OverviewCard;
