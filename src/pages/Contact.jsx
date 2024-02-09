import styles from "../components/contact/contact.module.css";
import PageHeader from "../components/shared/pageHeader/PageHeader";
import { contactHeader } from "../components/data/pageHeaderData";
import ContactMethods from "../components/contact/contactMethods/ContactMethods";
import ContactForm from "../components/contact/contactForm/ContactForm";
import Locations from "../components/contact/locations/Locations";
import Banner from "../components/shared/banner/Banner";
import BannerContent from "../components/shared/banner/BannerContent";
import bannerImg from "../assets/shared/banner4.webp";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";

import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Brushwood Engineering Group | Contact us</title>
        <meta
          name="description"
          content="Contact Brushwood Engineering Group today to start your engineering journey. We are committed to delivering high-quality engineering services that meet the unique needs of our clients."
        />
      </Helmet>
      <motion.div variants={pageAnimate} initial="initial" animate="animate">
        <PageHeader headerData={contactHeader} />
        <div className={styles.contactGrid}>
          <ContactMethods />
          <ContactForm />
        </div>
        <Locations />
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

export default Contact;
