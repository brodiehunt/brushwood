import { useState } from "react";
import styles from "./faqAccordion.module.css";
import { FaPlus } from "react-icons/fa6";

const FaqAccordion = ({ questionData }) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const toggleActiveIndex = (index) => {
    // Toggle closed
    if (activeIndex === index) {
      setActiveIndex(false);
    } else {
      // Open new
      setActiveIndex(index);
    }
  };

  return (
    <article className={styles.accordionContainer}>
      {questionData.map((faq, index) => {
        return (
          <div
            key={index}
            className={
              activeIndex === index
                ? `${styles.open} ${styles.accordionItem}`
                : `${styles.closed} ${styles.accordionItem}`
            }
          >
            <button
              className={styles.accordionButton}
              onClick={() => toggleActiveIndex(index)}
            >
              <div className={styles.accordionQuestion}> {faq.question} </div>

              <FaPlus className={styles.accordionIcon} />
            </button>
            <div className={styles.accordionAnswer}>
              <div>{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default FaqAccordion;
