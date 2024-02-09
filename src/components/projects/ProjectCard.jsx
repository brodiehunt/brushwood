import styles from "./projectCard.module.css";
import ButtonLink from "../shared/buttonLink/ButtonLink";
import { IoIosArrowForward } from "react-icons/io";

// Project Card component - projects page
const ProjectCard = ({ project }) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.imgContainer}>
        <img
          src={project.img}
          alt={project.alt}
          className={styles.projectImg}
        />
        <div className={styles.logoContainer}>
          <img
            src={project.logo}
            alt={project.logoAlt}
            className={styles.logoImg}
          />
        </div>
      </div>
      <div className={styles.cardContentContainer}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.projectFeatures}>
          {project.features.map((feature, index) => {
            return (
              <span key={index} className={styles.projectFeature}>
                {feature}
              </span>
            );
          })}
        </div>
        <div className={styles.buttonContainer}>
          <ButtonLink href={project.href} theme="hollow" type="internal">
            View Project
            <IoIosArrowForward />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
