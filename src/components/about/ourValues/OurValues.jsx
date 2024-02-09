import styles from "./ourValues.module.css";
import { valuesData } from "../../data/valuesData";
import ValueCard from "./ValueCard";

// Our values section component - about page
const OurValues = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesHeader}>
        <h2 className={styles.valuesTitle}>Our Values</h2>
        <p className={styles.valuesDescription}>
          At Brushwood Engineering, our commitment to excellence is the
          cornerstone of everything we do. Our dedication to integrity,
          sustainability, and innovation informs our approach to each project,
          ensuring that we deliver not just solutions, but values that stand the
          test of time.
        </p>
      </div>
      <div className={styles.decorativeAnimation}>
        <div className={styles.outerCircle} aria-hidden="true">
          <div className={styles.innerCircle1}>
            <div className={styles.innerCircle2}></div>
          </div>
        </div>
      </div>
      <div className={styles.valuesCardsContainer}>
        {valuesData.map((value, index) => {
          return <ValueCard key={index} value={value} />;
        })}
      </div>
    </section>
  );
};

export default OurValues;
