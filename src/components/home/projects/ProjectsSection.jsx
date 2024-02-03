import styles from "./projectsSection.module.css";
import ProjectCard from "./ProjectCard";
import ButtonLink from "../../shared/buttonLink/ButtonLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import fifaWomensImg from "../../../assets/projects/fifa.jpeg";
import kiaImg from "../../../assets/projects/kia_vivid.webp";
import diorImg from "../../../assets/projects/dior.webp";
import capitalFoodMarketImg from "../../../assets/projects/capital_food_market.jpeg";

const projects = [
  {
    img: fifaWomensImg,
    alt: "Fifa womens display",
    title: "FIFA Women's Museum",
    description: "Celebrating sports history with structural finesse",
    features: ["Temporary Structures", "<$1M", "Sydney"],
    href: "/projects",
  },
  {
    img: kiaImg,
    alt: "kia display at vivid, Sydney",
    title: "KIA Vivid 2023",
    description: "Illuminating events with creative engineering solutions",
    features: ["Temporary Structures", "<$1M", "Sydney"],
    href: "/projects",
  },
  {
    img: diorImg,
    alt: "DIOR 30 Montaigne Sydney Pop Up",
    title: "DIOR 30 Montaigne Sydney Pop Up",
    description: "Celebrating sports history with structural finesse",
    features: ["Temporary Structures", "<$1M", "Sydney"],
    href: "/projects",
  },
  {
    img: capitalFoodMarketImg,
    alt: "capital food market project image",
    title: "Capital Food Market",
    description: "Revitalizing retail spaces with sustainable design",
    features: ["Facade Engineering", "$80M", "Sydney"],
    href: "/projects",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // offset: ["start end", "end start"],
  });

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
          {projects.map((item, index) => {
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
