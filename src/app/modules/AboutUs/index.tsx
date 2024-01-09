import Header from "./components/Header";
import Highlights from "./components/Highlights";
import OurApproach from "./components/OurApproach";
import OurTeam from "./components/OurTeam";
import OurVision from "./components/OurValues";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <OurVision />
      <OurApproach />
      <Highlights />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
