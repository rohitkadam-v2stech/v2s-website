import { Box, Stack } from "@mui/material";
import Slider from "../../../../../../components/Slider";

type TProjectImagesSliderProps = {
  state: any;
};

const ProjectImagesSlider: React.FC<TProjectImagesSliderProps> = ({
  state,
}) => (
  <>
    {state?.projectScreenshots?.length <= 1 ? (
      <Box
        px="6%"
        py={8}
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <img
          src={state?.projectScreenshots[0]}
          alt={`project-screenshot-1`}
          height={340}
        />
      </Box>
    ) : (
      <Box px="6%" py={8}>
        <Stack px={"20%"} py={4} justifyContent="center">
          <Slider slidesToShow={1}>
            {state?.projectScreenshots?.map((item: any, index: number) => (
              <img
                src={item}
                alt={`project-screenshot-${index + 1}`}
                // height={400}
              />
            ))}
          </Slider>
        </Stack>
      </Box>
    )}
  </>
);

export default ProjectImagesSlider;
