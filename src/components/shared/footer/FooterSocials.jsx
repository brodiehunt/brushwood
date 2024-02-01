import styles from "./footerSocials.module.css";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterSocials = () => {
  return (
    <div className={styles.socialsContainer}>
      <a href="" className={styles.socialLink}>
        <FaFacebookSquare className={styles.socialIcon} />
      </a>
      <a
        href="https://www.linkedin.com/company/brushwoodgroup/"
        className={styles.socialLink}
      >
        <FaLinkedin className={styles.socialIcon} />
      </a>
      <a href="" className={styles.socialLink}>
        <FaInstagram className={styles.socialIcon} />
      </a>
    </div>
  );
};

export default FooterSocials;
