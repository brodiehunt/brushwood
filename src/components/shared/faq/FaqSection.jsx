import styles from "./faqSection.module.css";
import FaqAccordion from "./FaqAccordion";
import StillHaveQuestions from "./StillHaveQuestions";

const FaqSection = ({ questionData }) => {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <p className={styles.faqDescription}>
          Find answers to common questions about our structural engineering
          services and working with our consultancy.
        </p>
      </div>
      <FaqAccordion questionData={questionData} />
      <StillHaveQuestions />
    </section>
  );
};

export default FaqSection;
