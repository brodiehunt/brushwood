import styles from "./secondaryCard.module.css";

const SecondaryCard = ({ service }) => {
  return (
    <div className={styles.secondaryCard}>
      <img className={styles.icon} src={service.icon} alt="" />
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </div>
  );
};

export default SecondaryCard;
