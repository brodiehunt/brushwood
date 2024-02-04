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

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
