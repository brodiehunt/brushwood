import styles from "./servicesSection.module.css";
import ServiceCard from "./ServiceCard";
import { servicesCards } from "../../data/servicesData";
import { useScroll } from "framer-motion";
import { useRef } from "react";

// Serivces page - services section
const ServicesSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className={styles.servicesSection}>
      {servicesCards.map((service, index) => {
        const targetScale = 1 - (servicesCards.length - index) * 0.05;
        return (
          <ServiceCard
            key={index}
            service={service}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </section>
  );
};

export default ServicesSection;
