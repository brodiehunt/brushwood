import styles from "./projectsContainer.module.css";
import { projectCards } from "../data/projectsCardData";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
  return (
    <section className={styles.projectsContainer}>
      {projectCards.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </section>
  );
};

export default ProjectsContainer;
