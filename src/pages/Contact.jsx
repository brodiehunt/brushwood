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
const Contact = () => {
  return (
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
  );
};

export default Contact;
