import PageHeader from "../components/shared/pageHeader/PageHeader";
import { servicesHeader } from "../components/data/pageHeaderData";
import { servicesPageAccordion } from "../components/data/accordionData";
import FaqSection from "../components/shared/faq/FaqSection";
import ServicesSection from "../components/services/mainServices/ServicesSection";
const Services = () => {
  return (
    <div>
      <PageHeader headerData={servicesHeader} />
      <ServicesSection />
      <FaqSection questionData={servicesPageAccordion} />
    </div>
  );
};

export default Services;
