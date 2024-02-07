import PageHeader from "../components/shared/pageHeader/PageHeader";
import { servicesHeader } from "../components/data/pageHeaderData";
import { servicesPageAccordion } from "../components/data/accordionData";
import FaqSection from "../components/shared/faq/FaqSection";
import ServicesSection from "../components/services/mainServices/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";
import SecondaryServices from "../components/services/secondaryServices/SecondaryServices";
const Services = () => {
  return (
    <motion.div variants={pageAnimate} initial="initial" animate="animate">
      <PageHeader headerData={servicesHeader} />
      <ServicesSection />
      <SecondaryServices />
      <FaqSection questionData={servicesPageAccordion} />
    </motion.div>
  );
};

export default Services;
