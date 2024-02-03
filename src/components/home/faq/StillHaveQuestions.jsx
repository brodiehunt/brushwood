import styles from "./stillHaveQuestions.module.css";
import ButtonLink from "../../shared/buttonLink/ButtonLink";
const StillHaveQuestions = ({}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Still have questions?</h3>
      <p className={styles.statement}>
        Contact us for more information or assistance.
      </p>
      <div className={styles.buttonContainer}>
        <ButtonLink href="/contact" type="internal" theme="full">
          Contact Us
        </ButtonLink>
      </div>
    </div>
  );
};

export default StillHaveQuestions;
