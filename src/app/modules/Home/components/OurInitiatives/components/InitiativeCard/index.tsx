import {
  Box,
  BoxProps,
  Divider,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import COLORS from "../../../../../../styles/colors";
import { messages } from "../../config/messages";

type TInitiativeCardProps = {
  image: string;
  title: string;
  description: string;
  onReadMoreClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  containerProps?: StackProps;
  imageContainerProps?: BoxProps;
};

const InitiativeCard: React.FC<TInitiativeCardProps> = ({
  image,
  title,
  description,
  onReadMoreClick,
  containerProps,
  imageContainerProps,
}) => (
  <>
    <Stack justifyContent="space-between" {...containerProps}>
      <Stack
        justifyContent="space-between"
        height="100%"
        // width={620}
        // bgcolor="red"
      >
        <Box>
          <Box
            component="img"
            src={image}
            alt="blogs"
            width="100%"
            // width={620}
            height={320}
            {...imageContainerProps}
          />

          <Typography
            fontSize="22px"
            fontWeight="700"
            mx={2}
            color={COLORS.DARK_BLUE}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          mx={2}
          fontSize={16}
          fontWeight={400}
          color={COLORS.GREY_TEXT}
          textAlign="justify"
        >
          {description}
        </Typography>

        <Stack
          px={2}
          direction="row"
          spacing={0.5}
          alignItems="center"
          onClick={onReadMoreClick}
        >
          <Typography
            fontSize="16px"
            color={COLORS.DARK_BLUE}
            sx={{ cursor: "pointer" }}
          >
            {messages.readMore}
          </Typography>

          <EastIcon fontSize="small" sx={{ color: COLORS.DARK_BLUE }} />
        </Stack>
      </Stack>
      <Divider
        sx={{
          mt: 1,
          border: 0,
          borderTop: `2px dashed ${COLORS.DARK_BLUE}`,
        }}
      />
    </Stack>
  </>
);

export default InitiativeCard;
