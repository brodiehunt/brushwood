import styles from "./ourProcess.module.css";
import VerticalTimeline from "./VerticalTimeline";

// Our process section component - about page
const OurProcess = () => {
  return (
    <section className={styles.processSection}>
      <h2 className={styles.sectionTitle}>Our Process</h2>
      <p className={styles.sectionDescription}>
        At Brushwood Engineering, we follow a meticulously crafted process that
        ensures every project is handled with precision and expertise. Our
        approach is designed to deliver exceptional results, combining technical
        prowess with innovative solutions.
      </p>
      <VerticalTimeline />
    </section>
  );
};

export default OurProcess;
