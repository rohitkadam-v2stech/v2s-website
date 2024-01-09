import ExploreByStage from "./components/ExploreByStage";
import FastFacts from "./components/FastFacts";
import MainSlider from "./components/MainSlider";
import OurClients from "./components/OurClients";
import OurDomainExpertise from "./components/OurDomainExpertise";
import OurOfferings from "./components/OurOfferings";
import OurSpecialty from "./components/OurSpecialty";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <MainSlider />
      <FastFacts />
      <OurOfferings />
      <OurDomainExpertise />
      <OurSpecialty />
      <ExploreByStage />
      <OurClients />
      <Testimonials />
    </>
  );
};

export default Home;
