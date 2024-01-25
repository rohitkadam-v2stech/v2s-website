import NorthIcon from "@mui/icons-material/North";

import { StyledScrollToTopButton } from "../../styles/style";
import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <StyledScrollToTopButton
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          size="small"
        >
          <NorthIcon />
        </StyledScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
