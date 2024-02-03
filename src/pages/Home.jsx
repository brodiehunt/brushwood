import Services from "../components/home/services/services";
import TopCompanies from "../components/home/topCompanies/topCompanies";
import Banner from "../components/shared/banner/Banner";
import Typewriter from "../components/home/Typewriter";
import bannerImg from "../assets/shared/banner1.webp";
import WhyUs from "../components/home/whyUs/whyUsSection";
import ProjectSirius from "../components/home/featuredProject/ProjectSirus";
import TestimonialSlider from "../components/home/testimonialSlider/testimonialSlider";
const Home = () => {
  return (
    <div>
      Hello Home
      <Services />
      <TopCompanies />
      <Banner bannerImg={bannerImg}>
        <Typewriter />
      </Banner>
      <WhyUs />
      <ProjectSirius />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
