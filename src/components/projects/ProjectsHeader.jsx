import styles from "./projectsHeader.module.css";

const ProjectsHeader = () => {
  return (
    <header className={styles.projectsHeader}>
      <h1 className={styles.projectsTitle}>
        Our Recent <span className={styles.blueText}>Projects</span>
      </h1>
      <p className={styles.projectsStatement}>
        From enduring structural designs to innovative temporary works and
        comprehensive civil engineering, we deliver tailored solutions that
        bring visionary projects to life
      </p>
    </header>
  );
};

export default ProjectsHeader;
