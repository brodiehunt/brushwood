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
        <title> Contact us | Brushwood Engineering Group | Australia</title>
        <meta
          name="description"
          content="We would love to hear from you about your project! Give us a call or send us an email for a free consultation and quote to discuss your projectWe would love to hear from you about your project! Give us a call or send us an email for a free consultation and quote to discuss your project"
        />
        <link
          rel="canonical"
          href="https://www.brushwoodgroup.com.au/contact"
        />
        {/* Facebook tags */}
        <meta
          property="og:title"
          content="Contact us | Brushwood Engineering Group | Australia"
        />
        <meta
          property="og:description"
          content="We would love to hear from you about your project! Give us a call or send us an email for a free consultation and quote to discuss your project"
        />
        <meta
          property="og:url"
          content="https://www.brushwoodgroup.com.au/contact"
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
          content="Contact us | Brushwood Engineering Group | Australia"
        />
        <meta
          name="twitter:description"
          content="We would love to hear from you about your project! Give us a call or send us an email for a free consultation and quote to discuss your project"
        />
        <meta
          name="twitter:image"
          content="https://brushwood.netlify.app/logo.svg"
        />
        <meta
          name="twitter:url"
          content="https://www.brushwoodgroup.com.au/contact"
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
