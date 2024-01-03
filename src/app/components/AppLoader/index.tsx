import { CircularProgress } from "@mui/material";

import { StyledAppLoaderWrapper } from "../../style";

const AppLoader = () => {
  return (
    <StyledAppLoaderWrapper>
      <CircularProgress />
    </StyledAppLoaderWrapper>
  );
};

export default AppLoader;
