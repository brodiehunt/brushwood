import styles from "../structural/structural.module.css";

import dior from "../../../assets/projects/dior.webp";
import temporary1 from "../../../assets/services/temporary/temporary_1.webp";
import bannerImg from "../../../assets/shared/banner1.webp";
import Banner from "../../../components/shared/banner/Banner";
import BannerContent from "../../../components/shared/banner/BannerContent";
import temporary2 from "../../../assets/services/temporary/temporary_2.webp";
import { motion } from "framer-motion";
import { pageAnimate } from "../../../util/animate";
import { Helmet } from "react-helmet-async";
const Temporary = () => {
  return (
    <>
      <Helmet>
        <title>
          Temporary Structures & Event Engineering | Brushwood Engineering Group
        </title>
        <meta
          name="description"
          content="We specialise in providing high-quality temporary structures and event engineering solutions for a wide range of applications. Risk management for a temporary activation is paramount in ensuring sustainable designs for public interaction. We are committed to providing exceptional service and high-quality results for all of our clients, from small private events to large-scale international exhibitions. Our dedication to innovation, sustainability, and safety sets us apart from other temporary structures and event engineering firms. Our team of experienced and registered engineers is committed to delivering innovative and cost-effective solutions tailored to your specific needs."
        />
        <link
          rel="canonical"
          href="https://www.brushwoodgroup.com.au/services/temporary-structures"
        />
        {/* Facebook tags */}
        <meta
          property="og:title"
          content="Temporary Structures & Event Engineering | Brushwood Engineering Group"
        />
        <meta
          name="og:description"
          content="We specialise in providing high-quality temporary structures and event engineering solutions for a wide range of applications. Risk management for a temporary activation is paramount in ensuring sustainable designs for public interaction. We are committed to providing exceptional service and high-quality results for all of our clients, from small private events to large-scale international exhibitions. Our dedication to innovation, sustainability, and safety sets us apart from other temporary structures and event engineering firms. Our team of experienced and registered engineers is committed to delivering innovative and cost-effective solutions tailored to your specific needs."
        />
        <meta
          property="og:url"
          content="https://www.brushwoodgroup.com.au/services/temporary-structures"
        />
        <meta
          property="og:image"
          content="https://brushwood.netlify.app/logo.svg"
        />
        <meta property="og:type" content="website" />
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Temporary Structures & Event Engineering | Brushwood Engineering Group"
        />
        <meta
          name="twitter:description"
          content="We specialise in providing high-quality temporary structures and event engineering solutions for a wide range of applications. Risk management for a temporary activation is paramount in ensuring sustainable designs for public interaction. We are committed to providing exceptional service and high-quality results for all of our clients, from small private events to large-scale international exhibitions. Our dedication to innovation, sustainability, and safety sets us apart from other temporary structures and event engineering firms. Our team of experienced and registered engineers is committed to delivering innovative and cost-effective solutions tailored to your specific needs."
        />
        <meta
          name="twitter:image"
          content="https://brushwood.netlify.app/logo.svg"
        />
        <meta
          name="twitter:url"
          content="https://www.brushwoodgroup.com.au/services/temporary-structures"
        />
      </Helmet>
      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <div className={styles.pageContainer}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              Temporary Structures & Event Engineering
            </h1>
            <div className={styles.headerSpan}>Flexibility & Delivery</div>
          </header>
          <p className={styles.description}>
            We specialise in providing high-quality temporary structures and
            event engineering solutions for a wide range of applications. Risk
            management for a temporary activation is paramount in ensuring
            sustainable designs for public interaction. We are committed to
            providing exceptional service and high-quality results for all of
            our clients, from small private events to large-scale international
            exhibitions. Our dedication to innovation, sustainability, and
            safety sets us apart from other temporary structures and event
            engineering firms. Our team of experienced and registered engineers
            is committed to delivering innovative and cost-effective solutions
            tailored to your specific needs.
          </p>
          <div className={styles.introImgContainer}>
            <img
              className={styles.introImg}
              src={dior}
              alt="pitt street metro design drawing"
            />
          </div>
          <h2 className={styles.subtitle}>Our services include</h2>
          <ul className={styles.listContainer}>
            <li className={styles.listItem}>
              <b className={styles.bulletPoint}>
                Customised design & engineering of temporary structures
              </b>
              <p className={styles.bulletDescription}>
                We use the latest design software and technology to create
                custom structures that are tailored to your specific
                requirements, whether it's for a trade show, music festival, or
                sporting event.
              </p>
            </li>
            <li className={styles.listItem}>
              <b className={styles.bulletPoint}>
                Event planning and management
              </b>
              <p className={styles.bulletDescription}>
                Our team can provide expert guidance and support for all aspects
                of event planning, from site selection and logistics to risk
                management and contingency planning.
              </p>
            </li>
            <li className={styles.listItem}>
              <b className={styles.bulletPoint}>
                Structural engineering for temporary structures
              </b>
              <p className={styles.bulletDescription}>
                We conduct comprehensive engineering analyses and provide design
                solutions to ensure that your temporary structure is safe,
                reliable, and meets all applicable codes and standards.
              </p>
            </li>
            <li className={styles.listItem}>
              <b className={styles.bulletPoint}>
                Project management and construction support
              </b>
              <p className={styles.bulletDescription}>
                We manage all aspects of the construction process, including
                site preparation, equipment installation, and on-site project
                management.
              </p>
            </li>
          </ul>
          <div className={styles.gridImgContainer}>
            <div className={styles.secondaryImgContainer}>
              <img
                className={styles.secondaryImg}
                src={temporary1}
                alt="Drive in concert"
              />
            </div>
            <div className={styles.secondaryImgContainer}>
              <img
                className={styles.secondaryImg2}
                src={temporary2}
                alt="Rock concert"
              />
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
    </>
  );
};

export default Temporary;
