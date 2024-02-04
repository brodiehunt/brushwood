import PageHeader from "../components/shared/pageHeader/PageHeader";
import { servicesHeader } from "../components/data/pageHeaderData";
import { servicesPageAccordion } from "../components/data/accordionData";
import FaqSection from "../components/shared/faq/FaqSection";

const Services = () => {
  return (
    <div>
      <PageHeader headerData={servicesHeader} />
      <FaqSection questionData={servicesPageAccordion} />
    </div>
  );
};

export default Services;
