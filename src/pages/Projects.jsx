import Banner from "../components/shared/banner/Banner";
import BannerContent from "../components/shared/banner/BannerContent";
import bannerImg from "../assets/shared/banner4.webp";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsContainer from "../components/projects/ProjectsContainer";

const Projects = () => {
  return (
    <div>
      <ProjectsHeader />
      <ProjectsContainer />
      <Banner bannerImg={bannerImg}>
        <BannerContent
          title="Start Your Engineering Journey with Brushwood"
          statement="Connect with us today and bring your engineering vision to life with our expert team."
        />
      </Banner>
    </div>
  );
};

export default Projects;
