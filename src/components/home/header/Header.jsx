import Spline from "@splinetool/react-spline";
import styles from "./header.module.css";
const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.gridColOne}>
        <h1 className={styles.pageTitle}>
          <span className={styles.span1}>BRUSHWOOD</span>{" "}
          <span className={styles.span2}>ENGINEERING</span>{" "}
          <span className={styles.span3}>GROUP</span>
        </h1>
      </div>
      <div className={styles.sceneContainer}>
        <Spline scene="https://prod.spline.design/9Gdc82tYbORI00rr/scene.splinecode" />
      </div>
    </section>
  );
};

export default Header;
