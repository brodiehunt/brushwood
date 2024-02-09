import styles from "./professionalAffiliations.module.css";
import { logos } from "../../data/professionalAffiliationsData";

// Professional affiliations component - about page
const ProfessionalAffilitations = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Our Professional Affiliations</h2>
      <div className={styles.logoGrid}>
        {logos.map((logo, index) => {
          return (
            <img
              key={index}
              className={styles.logo}
              src={logo.logo}
              alt={logo.alt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProfessionalAffilitations;
