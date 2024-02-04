import PageHeader from "../components/shared/pageHeader/PageHeader";
import { servicesHeader } from "../components/data/pageHeaderData";
const Services = () => {
  return (
    <div>
      <PageHeader headerData={servicesHeader} />
    </div>
  );
};

export default Services;
