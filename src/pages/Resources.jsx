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
        <title>Brushwood Engineering Group | Resources</title>
        <meta
          name="description"
          content="Brushwood Engineering Group is a leading engineering firm that specializes in providing innovative solutions. We are committed to delivering high-quality engineering services that meet the unique needs of our clients."
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
