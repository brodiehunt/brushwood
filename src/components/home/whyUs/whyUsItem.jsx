import styles from "./whyUsItem.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Why us item card - why us section - home page
const WhyUsItem = ({ item, index }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  // Paralax scroll effect - top and bottom containers move in opposite directions (up and down)
  const bottomContainer = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const topContainer = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemDescription}>
          <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
          {item.description}
        </p>
        <p className={styles.itemDescription}>
          <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
          {item.description}
        </p>
        <p className={styles.itemDescription}>
          <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
          {item.description}
        </p>
      </div>
      <div className={styles.itemParalaxScroll} ref={itemRef}>
        <motion.div
          style={{ y: topContainer }}
          className={styles.color1}
        ></motion.div>
        <motion.div
          style={{ y: topContainer }}
          className={styles.color2}
        ></motion.div>
        <motion.div
          style={{ y: bottomContainer }}
          className={styles.imageContent}
        >
          <img className={styles.itemImg} src={item.icon} alt={item.alt} />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUsItem;
