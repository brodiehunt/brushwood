import styles from "./typewriter.module.css";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className={styles.typewriterContainer}>
      <div className={styles.whiteText}>
        Driven by{" "}
        <span className={styles.blueText}>
          <Typewriter
            className={styles.typewriter}
            options={{
              strings: [
                "Excellence",
                "Integrity",
                "Quality",
                "Creativity",
                "Precision",
              ],
              autoStart: true,
              loop: true,
            }}
          ></Typewriter>
        </span>
      </div>
      <p className={styles.whiteText}>Defined by our unique approach</p>
    </div>
  );
};

export default TypewriterComponent;
