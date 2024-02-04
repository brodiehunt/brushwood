import styles from "./timelineCard.module.css";
import { BiMessageDots } from "react-icons/bi";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const iconAnimVars = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const cardAnim = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const TimelineCard = ({ item, index }) => {
  return (
    <article className={styles.timelineCardContainer}>
      <div className={styles.iconContainer}>
        <motion.div
          className={styles.motionIcon}
          variants={iconAnimVars}
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
        variants={cardAnim}
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
