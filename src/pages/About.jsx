import PageHeader from "../components/shared/pageHeader/PageHeader";
import { aboutHeader } from "../components/data/pageHeaderData";
import Banner from "../components/shared/banner/Banner";
import BannerContent from "../components/shared/banner/BannerContent";
import bannerImg from "../assets/shared/banner2.webp";
import ProfessionalAffilitations from "../components/about/professionalAffiliations/ProfessionalAffiliations";
const About = () => {
  return (
    <div>
      <PageHeader headerData={aboutHeader} />
      <ProfessionalAffilitations />
      <Banner bannerImg={bannerImg}>
        <BannerContent
          title="Start Your Engineering Journey with Brushwood"
          statement="Connect with us today and bring your engineering vision to life with our expert team."
        />
      </Banner>
    </div>
  );
};

export default About;
