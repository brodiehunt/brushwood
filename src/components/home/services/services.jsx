import styles from "./services.module.css";
import { motion } from "framer-motion";
import ServiceCard from "./serviceCard";
import { servicesCardsHomepage } from "../../data/servicesData";

// Services section component - home page
const Services = ({ darkmode }) => {
  return (
    <section
      className={
        darkmode
          ? `${styles.servicesSection} ${styles.dark}`
          : styles.servicesSection
      }
    >
      <h2 className={styles.servicesTitle}>
        We Provide A Wide Range Of Services
      </h2>
      <motion.div
        key={darkmode + "1"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={`${styles.circle} ${styles.circle1}`}
        aria-hidden="true"
      ></motion.div>
      <motion.div
        key={darkmode + "2"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={`${styles.circle} ${styles.circle2}`}
        aria-hidden="true"
      ></motion.div>

      <motion.div
        key={darkmode + "3"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={`${styles.circle} ${styles.circle3}`}
        aria-hidden="true"
      ></motion.div>
      <motion.div
        key={darkmode + "4"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={`${styles.circle} ${styles.circle4}`}
        aria-hidden="true"
      ></motion.div>
      <div className={styles.cardsContainer}>
        {servicesCardsHomepage.map((service, index) => {
          return (
            <ServiceCard key={index} service={service} darkmode={darkmode} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
