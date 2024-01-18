import { Box, Stack } from "@mui/material";
import Slider from "../../../../../../components/Slider";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";
import COLORS from "../../../../../../styles/colors";

type TProjectImagesSliderProps = {
  state: any;
};

const ProjectImagesSlider: React.FC<TProjectImagesSliderProps> = ({
  state,
}) => {
  const { isOnMobile, isOnTablet } = useDeviceSize();
  return (
    <>
      {state?.projectScreenshots?.length <= 1 ? (
        <Box
          px={{ xs: 4, sm: 4, md: "10%", lg: "10%", xl: "10%" }}
          py={8}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          bgcolor={COLORS.WHITE}
        >
          <img
            src={state?.projectScreenshots[0]}
            alt={`project-screenshot-1`}
            height={isOnMobile || isOnTablet ? "100%" : 340}
            width={isOnMobile ? 280 : isOnTablet ? 500 : "100%"}
          />
        </Box>
      ) : (
        <Box
          px={{ xs: 4, sm: 4, md: "10%", lg: "10%", xl: "10%" }}
          py={8}
          bgcolor={COLORS.WHITE}
        >
          <Stack px={"20%"} py={4} justifyContent="center">
            <Slider slidesToShow={1}>
              {state?.projectScreenshots?.map((item: any, index: number) => (
                <img
                  src={item}
                  alt={`project-screenshot-${index + 1}`}
                  // height={isOnMobile || isOnTablet ? "100%" : 330}
                />
              ))}
            </Slider>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default ProjectImagesSlider;
