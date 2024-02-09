import Banner from "../components/shared/banner/Banner";
import BannerContent from "../components/shared/banner/BannerContent";
import bannerImg from "../assets/shared/banner4.webp";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsContainer from "../components/projects/ProjectsContainer";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Brushwood Engineering Group | Projects</title>
        <meta
          name="description"
          content="Explore the various projects we have completed at Brushwood Engineering Group. We are committed to delivering high-quality engineering services that meet the unique needs of our clients."
        />
      </Helmet>
      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <ProjectsHeader />
        <ProjectsContainer />
        <Banner bannerImg={bannerImg}>
          <BannerContent
            title="Start Your Engineering Journey with Brushwood"
            statement="Connect with us today and bring your engineering vision to life with our expert team."
          />
        </Banner>
      </motion.div>
    </>
  );
};

export default Projects;
