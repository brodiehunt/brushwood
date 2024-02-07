import Header from "../components/home/header/Header.jsx";
import Services from "../components/home/services/services";
import DarkModeIntersection from "../components/home/darkmodeintersection/DarkModeIntersection.jsx";
import TopCompanies from "../components/home/topCompanies/TopCompanies";
import Banner from "../components/shared/banner/Banner";
import Typewriter from "../components/home/Typewriter";
import bannerImg from "../assets/shared/banner1.webp";
import WhyUs from "../components/home/whyUs/whyUsSection";
import ProjectSirius from "../components/home/featuredProject/ProjectSirus";
import TestimonialSlider from "../components/home/testimonialSlider/testimonialSlider";
import ProjectsSection from "../components/home/projects/ProjectsSection";
import FaqSection from "../components/shared/faq/FaqSection";
import { useOutletContext } from "react-router-dom";

import { homepageAccordionData } from "../components/data/accordionData.jsx";
import { homeSlider } from "../components/data/logoBannerSlider.js";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";

const Home = () => {
  const { darkmode, setDarkmode } = useOutletContext();
  return (
    <motion.div variants={pageAnimate} initial="initial" animate="animate">
      <Header />
      <Services setDarkmode={setDarkmode} darkmode={darkmode} />
      <DarkModeIntersection setDarkmode={setDarkmode} darkmode={darkmode} />
      <Banner bannerImg={bannerImg}>
        <Typewriter />
      </Banner>
      <TopCompanies sliderData={homeSlider} title="Trusted by Top Companies" />
      <WhyUs />
      <ProjectSirius />
      <TestimonialSlider />
      <ProjectsSection />
      <FaqSection questionData={homepageAccordionData} />
    </motion.div>
  );
};

export default Home;
