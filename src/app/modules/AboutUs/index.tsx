import COLORS from "../../styles/colors";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import News from "./components/News";
import OurApproach from "./components/OurApproach";
import OurAssociation from "./components/OurAssociation";
import OurGrowthStory from "./components/OurGrowthStory";
import OurTeam from "./components/OurTeam";
import OurVision from "./components/OurValues";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <OurVision />
      <OurApproach />
      <OurGrowthStory />
      <Highlights />
      <OurTeam />
      <Blogs />
      <News />
      <OurAssociation bgColor={COLORS.BACKGROUND_GREY} />
    </div>
  );
};

export default AboutUs;
