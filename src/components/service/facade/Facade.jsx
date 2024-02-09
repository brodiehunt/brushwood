import styles from "./facade.module.css";
import bannerImg from "../../../assets/shared/banner1.webp";
import Banner from "../../../components/shared/banner/Banner";
import BannerContent from "../../../components/shared/banner/BannerContent";
import sirius from "../../../assets/home/featured_project_serius.webp";
import wickplace from "../../../assets/projects/wicks_place_apartments.webp";
import { motion } from "framer-motion";
import { pageAnimate } from "../../../util/animate";
import { Helmet } from "react-helmet-async";

const Facade = () => {
  return (
    <>
      <Helmet>
        <title>Brushwood Engineering Group | Facade Engineering & Design</title>
        <meta
          name="description"
          content="Brushwood Engineering Group is a leading engineering firm that specializes in providing innovative facade engineering and design solutions. We are committed to delivering high-quality engineering services that meet the unique needs of our clients."
        />
      </Helmet>
      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <div className={styles.pageContainer}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Facade Engineering & Design</h1>
            <div className={styles.headerSpan}>Quality & Performance</div>
          </header>
          <div className={styles.firstContent}>
            <div className={styles.gridParagraphs}>
              <p className={styles.paragraph}>
                We understand that a building's facade is not just a protective
                shell; it is a statement of design, sustainability, and
                technological advancement. Our team of dedicated facade
                engineers brings a wealth of experience and expertise to every
                project, ensuring that each facade is not only visually striking
                but also engineered to perform at the highest standards.
              </p>
              <p className={styles.paragraph}>
                What sets us apart is our commitment to pushing the boundaries
                of facade design. We leverage cutting-edge technologies and
                materials to create bespoke solutions that meet the unique
                challenges posed by each architectural vision. Our engineers
                collaborate closely with architects, builders, and developers to
                transform concepts into reality, ensuring that the facade not
                only enhances the building's aesthetics but also contributes to
                its overall performance and efficiency.
              </p>
            </div>
            <div className={styles.introImgContainer}>
              <img className={styles.img} src={sirius} alt="sirius building" />
            </div>
          </div>

          <div className={styles.servicesContainer}>
            <h2 className={styles.subtitle}>Our Services</h2>
            <p className={styles.servicesDescription}>
              Our services encompass a comprehensive range of facade engineering
              solutions, including:
            </p>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>Conceptual Design</li>
              <li className={styles.serviceItem}>Structural Analysis</li>
              <li className={styles.serviceItem}>Material Selection</li>
              <li className={styles.serviceItem}>Section J Reports</li>
              <li className={styles.serviceItem}>Performance Solutions</li>
              <li className={styles.serviceItem}>Shop Drawings</li>
            </ul>
          </div>

          <p className={styles.paragraph}>
            Whether you are embarking on a new construction project or seeking
            to revitalize an existing structure, our team is poised to deliver
            solutions that elevate the visual appeal and functionality of your
            building. Discover the difference that exceptional facade
            engineering can make. Partner with Brushwood Engineering Group and
            embark on a journey where form meets function, and architectural
            visions become reality. Your building's facade is more than an
            exterior - it's a testament to craftsmanship, creativity, and our
            unwavering commitment to excellence.
          </p>
          <div className={styles.secondaryImgContainer}>
            <img
              className={styles.img}
              src={wickplace}
              alt="wicks place apartments"
            />
          </div>
        </div>
        <Banner bannerImg={bannerImg}>
          <BannerContent
            title="Start Your Engineering Journey with Brushwood"
            statement="Connect with us today and bring your engineering vision to life with our expert team."
          />
        </Banner>
      </motion.div>
    </>
  );
};

export default Facade;
