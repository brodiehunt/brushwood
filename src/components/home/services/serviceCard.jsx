import styles from "./serviceCard.module.css";
import { IoIosArrowForward } from "react-icons/io";
import ButtonLink from "../../shared/buttonLink/ButtonLink";

// Service card component - services section - home page
const ServiceCard = ({ service, darkmode }) => {
  return (
    <div
      className={
        darkmode ? `${styles.serviceCard} ${styles.dark}` : styles.serviceCard
      }
    >
      <img
        className={styles.cardIcon}
        src={service.icon}
        alt={`${service.title} icon`}
      />
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      <div className={styles.cardLink}>
        <ButtonLink
          href={service.href}
          type="internal"
          theme="hollow"
          darkmode={darkmode}
        >
          Learn More
          <IoIosArrowForward className={styles.learnMoreIcon} />
        </ButtonLink>
      </div>
    </div>
  );
};

export default ServiceCard;
