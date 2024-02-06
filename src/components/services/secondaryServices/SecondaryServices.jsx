import styles from "./secondaryServices.module.css";
import SecondaryCard from "./SecondaryCard";
import { secondaryServices } from "../../data/servicesData";
const SecondaryServices = () => {
  return (
    <section className={styles.secondaryServices}>
      <h2 className={styles.servicesTitle}>
        We also offer a range of secondary services including site inspections,
        structural assessments, and retrofitting.
      </h2>
      <div className={styles.cardsContainer}>
        {secondaryServices.map((service, index) => {
          return <SecondaryCard key={index} service={service} />;
        })}
      </div>
    </section>
  );
};

export default SecondaryServices;
