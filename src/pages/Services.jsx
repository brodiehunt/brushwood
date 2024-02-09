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
        <title>Engineering Services | Brushwood Engineering Group</title>
        <meta
          name="description"
          content="Our experienced team offers services in structural engineering, temporary structures, facade engineering and design, civil engineering, and event engineering."
        />
        <link
          rel="canonical"
          href="https://www.brushwoodgroup.com.au/services"
        />
        {/* Facebook tags */}
        <meta
          property="og:title"
          content="Engineering Services | Brushwood Engineering Group"
        />
        <meta
          property="og:description"
          content="Our experienced team offers services in structural engineering, temporary structures, facade engineering and design, civil engineering, and event engineering."
        />
        <meta
          property="og:url"
          content="https://www.brushwoodgroup.com.au/services"
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
          content="Engineering Services | Brushwood Engineering Group"
        />
        <meta
          name="twitter:description"
          content="Our experienced team offers services in structural engineering, temporary structures, facade engineering and design, civil engineering, and event engineering."
        />
        <meta
          name="twitter:image"
          content="https://brushwood.netlify.app/logo.svg"
        />
        <meta
          name="twitter:url"
          content="https://www.brushwoodgroup.com.au/services"
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
