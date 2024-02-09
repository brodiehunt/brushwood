import styles from "./whyUs.module.css";
import WhyUsItem from "./whyUsItem";
import { whyUsItemsData } from "../../data/whyUsData";

// Why us section - home page
const WhyUs = () => {
  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.whyUsTitle}>Why Choose Us?</h2>
      <p className={styles.whyUsDescription}>
        We have a proven track record of transforming complex engineering
        challenges into sustainable, real-world solutions.
      </p>
      <div className={styles.whyUsCardContainer}>
        {whyUsItemsData.map((item, index) => {
          return <WhyUsItem key={index} item={item} index={index} />;
        })}
      </div>
    </section>
  );
};

export default WhyUs;
