import styles from "./civil.module.css";
import bannerImg from "../../../assets/shared/banner1.webp";
import Banner from "../../../components/shared/banner/Banner";
import BannerContent from "../../../components/shared/banner/BannerContent";
import macarthur from "../../../assets/projects/macarthur_square_road.webp";
import { motion } from "framer-motion";
import { pageAnimate } from "../../../util/animate";
import { Helmet } from "react-helmet-async";

const Civil = () => {
  return (
    <>
      <Helmet>
        <title>Brushwood Engineering Group | Civil Engineering Services</title>
        <meta
          name="description"
          content="Brushwood Engineering Group is a leading engineering firm that specializes in providing innovative solutions. We are committed to delivering high-quality engineering services that meet the unique needs of our clients."
        />
      </Helmet>
      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <div className={styles.pageContainer}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Civil Engineering</h1>
            <div className={styles.headerSpan}>Reliability & Commitment</div>
          </header>
          <p className={styles.paragraph}>
            We understand that robust infrastructure and sustainable mining
            practices are the backbone of economic growth. With a dynamic team
            of skilled civil engineers, we embark on projects that shape the
            future of communities, ensuring durability, efficiency, and
            environmental responsibility.
          </p>
          <p className={styles.paragraph}>
            Our commitment to excellence is reflected in our diverse portfolio,
            featuring iconic infrastructure projects and mining facilities that
            stand as testaments to precision engineering. From expansive highway
            systems and bridges that connect regions to state-of-the-art mining
            facilities driving resource extraction, we deliver solutions that
            transcend expectations.
          </p>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src={macarthur}
              alt="macarthur square road"
            />
          </div>
          <p className={styles.paragraph}>
            Collaboration is at the heart of our approach. We work closely with
            governmental bodies, private enterprises, and stakeholders to tailor
            our services to the unique challenges of each project. From initial
            feasibility studies to detailed design and construction oversight,
            our team is dedicated to ensuring that every facet of the project
            aligns with the highest standards of safety, functionality, and
            sustainability.
          </p>
          <p className={styles.paragraph}>
            In the mining sector, we go beyond extraction - we engineer
            comprehensive solutions that prioritize safety, efficiency, and
            environmental stewardship. Our expertise extends to mine planning,
            infrastructure development, and environmental impact assessments,
            contributing to the responsible and sustainable growth of the mining
            industry.
          </p>
          <p className={styles.paragraph}>
            As advocates for technological innovation, we integrate the latest
            advancements in civil engineering into our projects. Whether it's
            utilizing state-of-the-art materials, employing cutting-edge design
            methodologies, or implementing smart infrastructure solutions, we
            stay at the forefront of industry trends to deliver projects that
            stand the test of time.
          </p>
          <p className={styles.paragraph}>
            Partner with us, and let's embark on a journey to shape the future
            through exceptional civil engineering - where major infrastructure
            meets responsible mining, and every project is a testament to our
            unwavering commitment to excellence.
          </p>
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

export default Civil;
