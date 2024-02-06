import styles from "./services.module.css";
import structuralIcon from "../../../assets/home/servicesIcons/serviceIcon.svg";
import temporaryIcon from "../../../assets/home/servicesIcons/serviceIcon2.svg";
import facadeIcon from "../../../assets/home/servicesIcons/facade_icon.svg";
import roadIcon from "../../../assets/home/servicesIcons/road_icon.svg";

import ServiceCard from "./serviceCard";
const services = [
  {
    icon: structuralIcon,
    title: "Structural Engineering Services",
    description:
      "Designing and analysing structures for peak safety and durability, integrating advanced engineering with material sciences",
    href: "/services/structural-engineering",
  },
  {
    icon: temporaryIcon,
    title: "Temporary Structures & Events",
    description:
      "Engineering custom solutions for temporary structures and events, focusing on safety, compliance, and innovative design",
    href: "/services/temporary-structures",
  },
  {
    icon: facadeIcon,
    title: "Façade Engineering and Design",
    description:
      "Blending aesthetics and functionality in facade engineering for energy-efficient, harmonious, and sustainable designs",
    href: "/services/facade-engineering",
  },
  {
    icon: roadIcon,
    title: "Civil Engineering Services",
    description:
      "Comprehensive civil engineering for infrastructure projects, emphasizing sustainable practices and resource efficiency",
    href: "/services/civil-engineering",
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>
        We Provide A Wide Range Of Services
      </h2>
      <div
        className={`${styles.circle} ${styles.circle1}`}
        aria-hidden="true"
      ></div>
      <div
        className={`${styles.circle} ${styles.circle2}`}
        aria-hidden="true"
      ></div>

      <div
        className={`${styles.circle} ${styles.circle3}`}
        aria-hidden="true"
      ></div>
      <div
        className={`${styles.circle} ${styles.circle4}`}
        aria-hidden="true"
      ></div>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
