import { Box } from "@mui/material";
import SliderWithHeading from "../../../../components/SliderWithHeading";
import { OUR_ASSOCIATION_IMAGES_LIST } from "../../../../config/constants";

const OurAssociation: React.FC = () => (
  <Box px="6%" py={8} mb={16}>
    <SliderWithHeading
      heading="Our Association"
      data={OUR_ASSOCIATION_IMAGES_LIST}
    />
  </Box>
);

export default OurAssociation;
