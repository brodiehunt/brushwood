import ResourcesHeader from "../components/resources/header/ResourcesHeader";
import ResourceTemplate from "../components/resources/ResourceTemplate";
import Banner from "../components/shared/banner/Banner";
import BannerContent from "../components/shared/banner/BannerContent";
import bannerImg from "../assets/shared/banner2.webp";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";
import { Helmet } from "react-helmet-async";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Resources | Brushwood Engineering Group</title>
        <meta
          name="description"
          content="Dive into Brushwood Engineering Group's comprehensive library, a curated collection designed for professionals. Whether you're estimating bearing pressures, determining ballast weights, or referencing the capacities of bolts, screws, and steel cables, our tools and tables provide reliable, accessible information to support & provide critical insights during the initial stages of your projects."
        />
        <link
          rel="canonical"
          href="https://www.brushwoodgroup.com.au/resources"
        />
        {/* Facebook tags */}
        <meta
          property="og:title"
          content="Engineering Resources | Brushwood Engineering Group"
        />
        <meta
          property="og:description"
          content="Dive into Brushwood Engineering Group's comprehensive library, a curated collection designed for professionals. Whether you're estimating bearing pressures, determining ballast weights, or referencing the capacities of bolts, screws, and steel cables, our tools and tables provide reliable, accessible information to support & provide critical insights during the initial stages of your projects."
        />
        <meta
          property="og:url"
          content="https://www.brushwoodgroup.com.au/resources"
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
          content="Engineering Resources | Brushwood Engineering Group"
        />
        <meta
          name="twitter:description"
          content="Dive into Brushwood Engineering Group's comprehensive library, a curated collection designed for professionals. Whether you're estimating bearing pressures, determining ballast weights, or referencing the capacities of bolts, screws, and steel cables, our tools and tables provide reliable, accessible information to support & provide critical insights during the initial stages of your projects."
        />
        <meta
          name="twitter:image"
          content="https://brushwood.netlify.app/logo.svg"
        />
        <meta
          name="twitter:url"
          content="https://www.brushwoodgroup.com.au/resources"
        />
      </Helmet>

      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <ResourcesHeader />
        <ResourceTemplate />
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

export default Resources;
