import PageHeader from "../components/shared/pageHeader/PageHeader";
import { aboutHeader } from "../components/data/pageHeaderData";
import Banner from "../components/shared/banner/Banner";
import BannerContent from "../components/shared/banner/BannerContent";
import bannerImg from "../assets/shared/banner2.webp";
import ProfessionalAffilitations from "../components/about/professionalAffiliations/ProfessionalAffiliations";
import OurProcess from "../components/about/ourProcess/OurProcess";
import OurValues from "../components/about/ourValues/OurValues";
import TopCompanies from "../components/home/topCompanies/TopCompanies";
import { aboutSlider } from "../components/data/logoBannerSlider";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";

import { Helmet } from "react-helmet-async";

const About = ({ key }) => {
  console.log(key);
  return (
    <>
      <Helmet>
        <title>Brushwood Engineering Group | About us</title>
        <meta
          name="description"
          content="At Brushwood Engineering Group, we are passionate about making a positive impact on the world using our wide range of engineering services. Our team of experienced engineers and designers is dedicated to helping our clients improve efficiency and deliver on business objectives"
        />
        <link rel="canonical" href="https://www.brushwoodgroup.com.au/about" />
      </Helmet>
      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <PageHeader headerData={aboutHeader} />
        <OurProcess />
        <ProfessionalAffilitations />
        <OurValues />
        <TopCompanies
          sliderData={aboutSlider}
          title="Trusted by industry-leading brands"
        />
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

export default About;
