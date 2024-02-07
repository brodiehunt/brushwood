import Services from "../components/home/services/services";
import TopCompanies from "../components/home/topCompanies/TopCompanies";
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
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";

const Home = () => {
  return (
    <motion.div variants={pageAnimate} initial="initial" animate="animate">
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
    </motion.div>
  );
};

export default Home;
