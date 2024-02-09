import PageHeader from "../components/shared/pageHeader/PageHeader";
import { servicesHeader } from "../components/data/pageHeaderData";
import { servicesPageAccordion } from "../components/data/accordionData";
import FaqSection from "../components/shared/faq/FaqSection";
import ServicesSection from "../components/services/mainServices/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";
import SecondaryServices from "../components/services/secondaryServices/SecondaryServices";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Brushwood Engineering Group | Services</title>
        <meta
          name="description"
          content="Brushwood Engineering Group is a leading engineering firm that specializes in providing innovative solutions. We are committed to delivering high-quality engineering services that meet the unique needs of our clients."
        />
      </Helmet>
      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <PageHeader headerData={servicesHeader} />
        <ServicesSection />
        <SecondaryServices />
        <FaqSection questionData={servicesPageAccordion} />
      </motion.div>
    </>
  );
};

export default Services;
