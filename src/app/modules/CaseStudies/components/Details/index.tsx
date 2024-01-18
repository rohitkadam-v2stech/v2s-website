import { useLocation } from "react-router-dom";

import AboutClients from "./components/AboutClients";
import ProblemStatement from "./components/ProblemStatement";
import ValueProposition from "./components/ValueProposition";
import Header from "./components/Header";
import ProjectImagesSlider from "./components/ProjectImagesSlider";

const CaseStudiesDetails: React.FC = () => {
  const { state } = useLocation();

  return (
    <>
      <Header state={state} />

      <ValueProposition state={state} />

      {state?.projectScreenshots && <ProjectImagesSlider state={state} />}

      {/* {state?.projectScreenshots?.length <= 1 ? (
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
            <Slider slidesToShow={isOnMobile ? 1 : 1}>
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
      )} */}

      <AboutClients data={state} />
      <ProblemStatement data={state} />
    </>
  );
};

export default CaseStudiesDetails;
