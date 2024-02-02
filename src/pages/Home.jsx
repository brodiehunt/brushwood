import Services from "../components/home/services/services";
import TopCompanies from "../components/home/topCompanies/topCompanies";
import Banner from "../components/shared/banner/Banner";
import Typewriter from "../components/home/Typewriter";
import bannerImg from "../assets/shared/banner1.webp";
import WhyUs from "../components/home/whyUs/whyUsSection";
const Home = () => {
  return (
    <div>
      Hello Home
      <Services />
      <TopCompanies />
      <Banner bannerImg={bannerImg}>
        <Typewriter />
      </Banner>
      <WhyUs />
    </div>
  );
};

export default Home;
