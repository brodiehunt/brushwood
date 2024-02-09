import styles from "./projectsSection.module.css";
import ProjectCard from "./ProjectCard";
import ButtonLink from "../../shared/buttonLink/ButtonLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectCardsHomepage } from "../../data/projectsCardData";

// Projects section component - home page
const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  // Horizontal scroll effect of projectsContainer
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={sectionRef} className={styles.projectsSection}>
      <div className={styles.projectsWrapper}>
        <h2 className={styles.projectsSectionTitle}>Explore our projects</h2>
        <p className={styles.projectsSectionDescription}>
          Browse through our diverse portfolio of projects that reflect our
          commitment to excellence and innovation in engineering
        </p>
        <motion.div style={{ x }} className={styles.projectsContainer}>
          {projectCardsHomepage.map((item, index) => {
            return <ProjectCard key={index} project={item} />;
          })}
        </motion.div>
        <div className={styles.buttonContainer}>
          <ButtonLink href="/projects" type="internal" theme="hollow">
            View All Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
