import Spline from "@splinetool/react-spline";
import styles from "./header.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// Header component - home page
const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // translate to values based on scrollYProgress
  const scaleVal = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const xDisplacement = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section ref={ref} className={styles.landingContainer}>
      <div className={styles.header}>
        <motion.div
          style={{ opacity: titleOpacity }}
          className={styles.gridColOne}
        >
          <h1 className={styles.pageTitle}>
            <span className={styles.span1}>BRUSHWOOD</span>{" "}
            <span className={styles.span2}>ENGINEERING</span>{" "}
            <span className={styles.span3}>GROUP</span>
          </h1>
          <p className={styles.pageStatement}>
            At Brushwood Engineering Group, we are passionate about making a
            positive impact on the world using our wide range of engineering
            services.
          </p>

          <button className={styles.callToAction}>Cool Button</button>
        </motion.div>
        <motion.div
          style={{ scale: scaleVal, x: xDisplacement }}
          className={styles.sceneContainer}
        >
          <Spline scene="https://prod.spline.design/fbfRfAi20GtIH1Sz/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
