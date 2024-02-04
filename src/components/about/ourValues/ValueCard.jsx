import styles from "./valueCard.module.css";
import { motion } from "framer-motion";
const ValueCard = ({ value }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      className={styles.valueCard}
    >
      <img className={styles.cardIcon} src={value.icon} alt={value.alt} />
      <h3 className={styles.valueCardTitle}>{value.title}</h3>
      <p className={styles.valueCardDescription}>{value.description}</p>
    </motion.div>
  );
};

export default ValueCard;
