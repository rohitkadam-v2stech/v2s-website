import NorthIcon from "@mui/icons-material/North";

import { StyledScrollToTopButton } from "../../styles/style";

const ScrollToTopButton: React.FC = () => (
  <>
    <StyledScrollToTopButton
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      size="small"
    >
      <NorthIcon />
    </StyledScrollToTopButton>
  </>
);

export default ScrollToTopButton;
