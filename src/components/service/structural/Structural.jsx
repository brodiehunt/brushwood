import styles from "./structural.module.css";
import serviceIcon from "../../../assets/home/servicesIcons/serviceIcon.svg";
import pittStreetMetro from "../../../assets/projects/pit_street_metro.jpeg";
import structural2 from "../../../assets/services/structural/structural_2.webp";
import bannerImg from "../../../assets/shared/banner1.webp";
import Banner from "../../../components/shared/banner/Banner";
import BannerContent from "../../../components/shared/banner/BannerContent";
import structural_3 from "../../../assets/services/structural/structural_3.webp";
import { motion } from "framer-motion";
import { pageAnimate } from "../../../util/animate";
const Structural = () => {
  return (
    <motion.div variants={pageAnimate} initial="initial" animate="animate">
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Structural Engineering</h1>
          <div className={styles.headerSpan}>
            {/* <img className={styles.headerIcon} src={serviceIcon} alt="" /> */}
            Quality & Performance
          </div>
        </header>
        <p className={styles.description}>
          At Brushwood Engineering Group, we offer comprehensive structural
          engineering services that ensure your construction project is safe,
          durable, and code-compliant. Our team of experienced and registered
          structural engineers is committed to delivering innovative and
          cost-effective solutions tailored to your specific needs. We are
          dedicated to providing exceptional service and high-quality results
          for all of our clients, from small residential projects to large
          commercial and industrial developments. Our commitment to safety,
          sustainability, and innovation sets us apart from other structural
          engineering firms.
        </p>
        <div className={styles.introImgContainer}>
          <img
            className={styles.introImg}
            src={pittStreetMetro}
            alt="pitt street metro design drawing"
          />
        </div>
        <h2 className={styles.subtitle}>Our services include</h2>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <b className={styles.bulletPoint}>Structural analysis and design</b>
            <p className={styles.bulletDescription}>
              We use advanced software and tools to analyse the structural
              integrity of your building, bridge, or other structure, and design
              a safe and efficient system that meets all applicable codes and
              standards.
            </p>
          </li>
          <li className={styles.listItem}>
            <b className={styles.bulletPoint}>Construction support</b>
            <p className={styles.bulletDescription}>
              We work closely with architects, contractors, and other
              stakeholders to ensure that the structural design is integrated
              seamlessly into the construction process and meets all project
              requirements.
            </p>
          </li>
          <li className={styles.listItem}>
            <b className={styles.bulletPoint}>
              Remedial Works & Dilapidation Reports
            </b>
            <p className={styles.bulletDescription}>
              Our firm offers expert remedial works and dilapidation reports as
              part of our comprehensive building inspection services. Our
              experienced team of engineers conduct thorough assessments to
              identify any defects or damage, provide cost-effective and
              sustainable repair solutions, and deliver detailed reports that
              meet regulatory requirements.
            </p>
          </li>
          <li className={styles.listItem}>
            <b className={styles.bulletPoint}>Forensic engineering</b>
            <p className={styles.bulletDescription}>
              Our team can conduct investigations to identify and provide expert
              witness testimony in cases involving structural failures,
              accidents, or other disputes.
            </p>
          </li>
        </ul>
        <div className={styles.gridImgContainer}>
          <div className={styles.secondaryImgContainer}>
            <img className={styles.secondaryImg} src={structural2} alt="" />
          </div>
          <div className={styles.secondaryImgContainer}>
            <img className={styles.secondaryImg2} src={structural_3} alt="" />
          </div>
        </div>
      </div>
      <Banner bannerImg={bannerImg}>
        <BannerContent
          title="Start Your Engineering Journey with Brushwood"
          statement="Connect with us today and bring your engineering vision to life with our expert team."
        />
      </Banner>
    </motion.div>
  );
};

export default Structural;
