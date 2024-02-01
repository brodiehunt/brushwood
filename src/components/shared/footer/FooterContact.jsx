import styles from "./footerContact.module.css";
import { PiPhone } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
const FooterContact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.column1}>
        <div className={styles.bold}>Brushwood Sydney Office</div>
        <p>13 Endeavour Road</p>
        <p>Caringbah, NSW 2229</p>
      </div>
      <div className={styles.column2}>
        <div className={styles.bold}>Contact Us Sydney</div>
        <p className={styles.contactIconContainer}>
          <PiPhone className={styles.contactIcon} /> (02) 7250 9440
        </p>
        <p className={styles.contactIconContainer}>
          <IoMailOpenOutline className={styles.contactIcon} />{" "}
          info@brushwoodgroup.com.au
        </p>
        <p className={styles.contactIconContainer}>
          Operating hours: Mon-Sat: 8am - 5pm
        </p>
      </div>
    </div>
  );
};

export default FooterContact;
