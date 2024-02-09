import styles from "./contactMethods.module.css";
import { MdOutlineMail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

// Contact methods component - contact page
const ContactMethods = () => {
  return (
    <div className={styles.contactMethodsContainer}>
      <div className={styles.methodContainer}>
        <h3 className={styles.title}>
          <MdOutlineMail className={styles.icon} /> Send us a message
        </h3>
        <p className={styles.description}>
          Drop us a line for detailed inquiries and we'll get back to you
          promptly
        </p>
        <a
          className={styles.clickable}
          href="mailto: info@brushwoodgroup.com.au"
        >
          info@brushwoodgroup.com.au
        </a>
      </div>
      <div className={styles.methodContainer}>
        <h3 className={styles.title}>
          <PiPhone className={styles.icon} /> Call Us
        </h3>
        <p className={styles.description}>
          Connect with our team directly for immediate assistance and expert
          consultation
        </p>
        <a className={styles.clickable} href="tel:+61272509440">
          (02) 7250 9440
        </a>
      </div>
      <div className={styles.methodContainer}>
        <h3 className={styles.title}>
          <SlLocationPin className={styles.icon} /> Visit Us
        </h3>
        <p className={styles.description}>
          Reach out to our office for personalised service and professional
          engineering guidance
        </p>
        <a
          className={styles.clickable}
          href="https://www.google.com/maps/place/13+Endeavour+Rd,+Caringbah+NSW+2229/@-34.0346491,151.131646,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12c7f8b464ccdb:0x610d7f9ede774c3!8m2!3d-34.0346536!4d151.1342209!16s%2Fg%2F11c1f7w731?entry=ttu"
        >
          13 Endeavour Road, Caringbah, NSW 2229
        </a>
      </div>
    </div>
  );
};

export default ContactMethods;
