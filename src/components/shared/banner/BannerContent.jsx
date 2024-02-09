import styles from "./bannerContent.module.css";
import ButtonLink from "../buttonLink/ButtonLink";
import { PiPhone } from "react-icons/pi";

// Inner banner content component.
const BannerContent = ({ title, statement }) => {
  return (
    <div className={styles.bannerContent}>
      <h2 className={styles.bannerContentTitle}>{title}</h2>
      <p className={styles.bannerContentStatement}>{statement}</p>
      <div className={styles.buttonContainer}>
        <ButtonLink href="/contact" theme="full" type="internal">
          Contact Us
          <PiPhone className={styles.buttonIcon} />
        </ButtonLink>
      </div>
    </div>
  );
};

export default BannerContent;
