import ButtonLink from "../../shared/buttonLink/ButtonLink";
import styles from "./serviceCard.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { motion, useTransform } from "framer-motion";

// Service Card component services page
const ServiceCard = ({ service, range, targetScale, progress }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.article className={styles.serviceCard} style={{ scale }}>
      <div className={styles.imgContainer}>
        <img className={styles.cardImg} src={service.img} alt={service.alt} />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.cardTitle}>{service.title}</h2>
        <p className={styles.cardDescription}>{service.description}</p>
        <div className={styles.featuresContainer}>
          {service.features.map((feature, index) => {
            return (
              <div key={index} className={styles.feature}>
                <img
                  className={styles.featureIcon}
                  src={feature.icon}
                  alt={feature.alt}
                />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.linksContainer}>
          <ButtonLink href={service.href} theme="hollow" type="internal">
            Learn More
            <IoIosArrowForward />
          </ButtonLink>
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
