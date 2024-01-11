import OurAssociation from "../AboutUs/components/OurAssociation";
import ExploreByStage from "./components/ExploreByStage";
import FastFacts from "./components/FastFacts";
import HomeCarousel from "./components/HomeCarousel";
import OurClients from "./components/OurClients";
import OurDomainExpertise from "./components/OurDomainExpertise";
import OurInitiatives from "./components/OurInitiatives";
import OurOfferings from "./components/OurOfferings";
import OurSpecialty from "./components/OurSpecialty";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <FastFacts />
      <OurOfferings />
      <OurDomainExpertise />
      {/* <OurSpecialty /> */}
      <ExploreByStage />
      <OurClients />
      <Testimonials />
      <OurInitiatives />
      <OurAssociation />
    </>
  );
};

export default Home;
