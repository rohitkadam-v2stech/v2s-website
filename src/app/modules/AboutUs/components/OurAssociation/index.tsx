import { Box, Grid, Link, Stack, Typography } from "@mui/material";

import { OUR_ASSOCIATION_IMAGES_LIST } from "../../../../config/constants";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import useDeviceSize from "../../../../hooks/useDeviceSize";

type TOurAssociationProps = {
  bgColor?: string;
};

const OurAssociation: React.FC<TOurAssociationProps> = ({ bgColor }) => {
  const { isOnMobile } = useDeviceSize();
  return (
    <Box
      px={isOnMobile ? 2 : "15%"}
      py={8}
      mb={16}
      bgcolor={bgColor ? bgColor : COLORS.DEFAULT_GREY}
    >
      <Typography
        fontSize="30px"
        fontWeight="600"
        color={COLORS.DARK_BLUE}
        textAlign="center"
        mb={6}
      >
        {messages.ourAssociations}
      </Typography>

      <Grid container>
        {OUR_ASSOCIATION_IMAGES_LIST.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Stack justifyContent="center" alignItems="center" height="100%">
              <Link target="_blank" href={item?.path}>
                <img
                  src={item?.image}
                  alt="associations"
                  width={200}
                  // style={{ maxHeight: 100 }}
                  style={{ height: 137, width: 239 }}
                />
              </Link>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurAssociation;
