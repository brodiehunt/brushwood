import styles from "./pageHeader.module.css";

const PageHeader = ({ headerData }) => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.imgContainer}>
        <img
          className={styles.headerImg}
          src={headerData.img}
          alt={headerData.alt}
        />
      </div>
      <div className={styles.headerContentContainer}>
        <h1 className={styles.headerTitle}>{headerData.page}</h1>
        <h2 className={styles.headerSubtitle}>{headerData.title}</h2>
        <p className={styles.headerDescription}>{headerData.description}</p>
      </div>
    </header>
  );
};

export default PageHeader;
