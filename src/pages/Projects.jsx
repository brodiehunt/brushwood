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
        <title>Projects | Brushwood Engineering Group</title>
        <meta
          name="description"
          content="From enduring structural designs to innovative temporary works and comprehensive civil engineering, we deliver tailored solutions that bring visionary projects to life"
        />
        <link
          rel="canonical"
          href="https://www.brushwoodgroup.com.au/projects"
        />
        {/* Facebook tags */}
        <meta
          property="og:title"
          content="Projects | Brushwood Engineering Group"
        />
        <meta
          property="og:description"
          content="From enduring structural designs to innovative temporary works and comprehensive civil engineering, we deliver tailored solutions that bring visionary projects to life"
        />
        <meta
          property="og:url"
          content="https://www.brushwoodgroup.com.au/projects"
        />
        <meta
          property="og:image"
          content="https://brushwood.netlify.app/logo.svg"
        />
        <meta property="og:type" content="website" />
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects | Brushwood Engineering Group"
        />
        <meta
          name="twitter:description"
          content="From enduring structural designs to innovative temporary works and comprehensive civil engineering, we deliver tailored solutions that bring visionary projects to life"
        />
        <meta
          name="twitter:image"
          content="https://brushwood.netlify.app/logo.svg"
        />
        <meta
          name="twitter:url"
          content="https://www.brushwoodgroup.com.au/projects"
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
