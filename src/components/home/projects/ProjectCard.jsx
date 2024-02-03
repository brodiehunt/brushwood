import styles from "./projectCard.module.css";
import ButtonLink from "../../shared/buttonLink/ButtonLink";

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.imgContainer}>
        <img
          className={styles.projectImg}
          src={project.img}
          alt={project.alt}
        />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.featuresContainer}>
          {project.features.map((feature, index) => {
            return (
              <span key={index} className={styles.feature}>
                {feature}
              </span>
            );
          })}
        </div>
        <div className={styles.cardButtonContainer}>
          <ButtonLink href={project.href} type="internal" theme="full">
            View Project
          </ButtonLink>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
