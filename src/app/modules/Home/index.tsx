import FastFacts from "./components/FastFacts";
import MainSlider from "./components/MainSlider";
import OurDomainExpertise from "./components/OurDomainExpertise";
import OurOfferings from "./components/OurOfferings";
import OurSpecialty from "./components/OurSpecialty";

const Home = () => {
  return (
    <>
      <MainSlider />
      <FastFacts />
      <OurOfferings />
      <OurDomainExpertise />
      <OurSpecialty />
    </>
  );
};

export default Home;
