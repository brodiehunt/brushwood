import styles from "./serviceCard.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ButtonLink from "../../shared/buttonLink/ButtonLink";
const ServiceCard = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
      <img
        className={styles.cardIcon}
        src={service.icon}
        alt={`${service.title} icon`}
      />
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      <div className={styles.cardLink}>
        <ButtonLink href={service.href} type="internal" theme="hollow">
          Learn More
          <IoIosArrowForward className={styles.learnMoreIcon} />
        </ButtonLink>
      </div>
    </div>
  );
};

export default ServiceCard;
