import PageHeader from "../components/shared/pageHeader/PageHeader";
import { aboutHeader } from "../components/data/pageHeaderData";
const About = () => {
  return (
    <div>
      <PageHeader headerData={aboutHeader} />
    </div>
  );
};

export default About;
