import styles from "./timelineCard.module.css";
import { motion } from "framer-motion";
import { processCardAnim, processCardIconAnim } from "../../../util/animate";

// Timeline card component - vertical timeline component - our process section - about page
const TimelineCard = ({ item }) => {
  return (
    <article className={styles.timelineCardContainer}>
      <div className={styles.iconContainer}>
        <motion.div
          className={styles.motionIcon}
          variants={processCardIconAnim}
          initial="initial"
          whileInView="animate"
        >
          <img
            className={styles.icon}
            src={item.icon}
            alt={item.alt}
            aria-hidden="true"
          />
        </motion.div>
      </div>
      <motion.div
        variants={processCardAnim}
        initial="initial"
        whileInView="enter"
        className={styles.timelineCard}
      >
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardInfo}>{item.description}</p>
      </motion.div>
    </article>
  );
};

export default TimelineCard;
