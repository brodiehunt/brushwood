import styles from "./footerContact.module.css";
import { PiPhone } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
const FooterContact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.column1}>
        <div className={styles.bold}>Brushwood Sydney Office</div>
        <p className={styles.light}>13 Endeavour Road</p>
        <p className={styles.light}>Caringbah, NSW 2229</p>
      </div>
      <div className={styles.column2}>
        <div className={styles.bold}>Contact Us Sydney</div>
        <p className={styles.contactIconContainer}>
          <PiPhone className={styles.contactIcon} />
          <a className={styles.contactLink} href="tel:+61272509440">
            (02) 7250 9440
          </a>
        </p>
        <p className={styles.contactIconContainer}>
          <IoMailOpenOutline className={styles.contactIcon} />{" "}
          <a
            className={styles.contactLink}
            href="mailto: info@brushwoodgroup.com.au"
          >
            info@brushwoodgroup.com.au
          </a>
        </p>
        <p className={`${styles.contactIconContainer} ${styles.light}`}>
          Operating hours: Mon-Sat: 8am - 5pm
        </p>
      </div>
    </div>
  );
};

export default FooterContact;
