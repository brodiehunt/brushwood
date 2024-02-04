import Services from "../components/home/services/services";
import TopCompanies from "../components/home/topCompanies/topCompanies";
import Banner from "../components/shared/banner/Banner";
import Typewriter from "../components/home/Typewriter";
import bannerImg from "../assets/shared/banner1.webp";
import WhyUs from "../components/home/whyUs/whyUsSection";
import ProjectSirius from "../components/home/featuredProject/ProjectSirus";
import TestimonialSlider from "../components/home/testimonialSlider/testimonialSlider";
import ProjectsSection from "../components/home/projects/ProjectsSection";
import FaqSection from "../components/shared/faq/FaqSection";

import { homepageAccordionData } from "../components/data/accordionData.jsx";
import { homeSlider } from "../components/data/logoBannerSlider.js";

const Home = () => {
  return (
    <div>
      Hello Home
      <Services />
      <TopCompanies sliderData={homeSlider} title="Trusted by Top Companies" />
      <Banner bannerImg={bannerImg}>
        <Typewriter />
      </Banner>
      <WhyUs />
      <ProjectSirius />
      <TestimonialSlider />
      <ProjectsSection />
      <FaqSection questionData={homepageAccordionData} />
    </div>
  );
};

export default Home;
