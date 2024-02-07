import styles from "./resourcesHeader.module.css";

const ResourcesHeader = () => {
  return (
    <header className={styles.pageHeader}>
      <h1 className={styles.pageTitle}>
        Our Resources & <span className={styles.blueText}>Calculators</span>
      </h1>
      <p className={styles.pageSubtitle}>
        We have a variety of resources and calculators to help you make the best
        decision for your needs.
      </p>
    </header>
  );
};

export default ResourcesHeader;
