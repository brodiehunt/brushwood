import styles from "./serviceCard.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

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
      <Link className={styles.cardLink} to={`${service.href}`}>
        Learn More
        <IoIosArrowForward className={styles.learnMoreIcon} />
      </Link>
    </div>
  );
};

export default ServiceCard;
