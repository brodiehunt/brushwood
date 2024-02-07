import ResourcesHeader from "../components/resources/header/ResourcesHeader";
import ResourceTemplate from "../components/resources/ResourceTemplate";
import Banner from "../components/shared/banner/Banner";
import BannerContent from "../components/shared/banner/BannerContent";
import bannerImg from "../assets/shared/banner2.webp";
const Resources = () => {
  return (
    <div>
      <ResourcesHeader />
      <ResourceTemplate />
      <Banner bannerImg={bannerImg}>
        <BannerContent
          title="Start Your Engineering Journey with Brushwood"
          statement="Connect with us today and bring your engineering vision to life with our expert team."
        />
      </Banner>
    </div>
  );
};

export default Resources;
