import { Divider, styled } from "@mui/material";
import COLORS from "../../styles/colors";

const DashedDivider = styled(Divider)({
  border: 0,
  borderTop: `2px dashed ${COLORS.LIGHT_BLUE}`, // Change color as needed
});

export default DashedDivider;
