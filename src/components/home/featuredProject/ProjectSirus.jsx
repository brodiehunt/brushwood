import styles from "./projectSirius.module.css";
import siriusImg from "../../../assets/home/featured_project_serius.webp";
import ButtonLink from "../../shared/buttonLink/ButtonLink";
import { IoIosArrowForward } from "react-icons/io";

// Project sirius component - home page
const ProjectSirius = () => {
  return (
    <section className={styles.siriusSection}>
      <div className={styles.contentContainer}>
        <div className={styles.topHeader}>
          <span className={styles.topHeaderItem}>Facade Desgin</span>
          <span className={styles.topHeaderItem}>Sydney</span>
          <span className={styles.topHeaderItem}>$100M</span>
        </div>
        <h2 className={styles.siriusTitle}>
          Featured Project - <span className={styles.textBlue}>Sirius</span>
        </h2>
        <p className={styles.siriusDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          expedita suscipit distinctio, quod cumque quam voluptatibus odit ea,
          enim eveniet consequuntur sunt harum! Ullam asperiores minima,
          laudantium exercitationem eius optio!
        </p>
        <div className={styles.bottomBar}>
          <span>
            <span className={styles.infoLabel}>Client:</span> Sirius
          </span>
          <span>
            <span className={styles.infoLabel}>Date:</span> March 2023
          </span>
          <span>
            <span className={styles.infoLabel}>Role:</span> Facade Design
          </span>
        </div>
        <ButtonLink
          href="https://siriussydneyharbour.com.au"
          type="Internal"
          theme="hollow"
        >
          View Website
          <IoIosArrowForward />
        </ButtonLink>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.siriusImg}
          src={siriusImg}
          alt="project sirius"
        />
      </div>
    </section>
  );
};

export default ProjectSirius;
