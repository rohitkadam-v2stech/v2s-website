import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import News from "./components/News";
import OurApproach from "./components/OurApproach";
import OurAssociation from "./components/OurAssociation";
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
      <Blogs />
      <News />
      <OurAssociation />
    </div>
  );
};

export default AboutUs;
