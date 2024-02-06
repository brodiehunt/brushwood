import styles from "./whyUs.module.css";
import WhyUsItem from "./whyUsItem";
import usersIcon from "../../../assets/home/whyUsIcons/users_icon.svg";
import worldIcon from "../../../assets/home/whyUsIcons/world_icon.svg";
import healthIcon from "../../../assets/home/whyUsIcons/health_icon.svg";
import townIcon from "../../../assets/home/whyUsIcons/town_icon.svg";
import building from "../../../assets/home/whyUsIcons/building.svg";
import engineer from "../../../assets/home/whyUsIcons/engineer.svg";
import health from "../../../assets/home/whyUsIcons/health.svg";
import walk from "../../../assets/home/whyUsIcons/walk.svg";
import world from "../../../assets/home/whyUsIcons/world.svg";
import sustainable from "../../../assets/home/whyUsIcons/sustainable.svg";

const whyUsItems = [
  {
    icon: usersIcon,
    alt: "Icon of multiple people",
    title: "3.5 Million+",
    description:
      "Attendees at a wide array of events engineered by our dedicated team",
  },
  {
    icon: worldIcon,
    alt: "Icon of the world globe",
    title: "250+ Sustainable Projects",
    description:
      "Firmly invested in local manufacturing and high-quality Australian materials",
  },
  {
    icon: healthIcon,
    alt: "Health symbol icon",
    title: "3 Major Hospital Expansions",
    description:
      "Strategically engineered major expansions of two significant hospitals",
  },
  {
    icon: townIcon,
    alt: "Icon of a thriving town",
    title: "4 Regional Towns Revitalized",
    description:
      "Successfully revitalized and modernized infrastructure in four regional towns",
  },
];

const whyUsItems2 = [
  {
    icon: world,
    alt: "Icon of multiple people",
    title: "3.5 Million+",
    description:
      "Attendees at a wide array of events engineered by our dedicated team",
  },
  {
    icon: sustainable,
    alt: "Icon of the world globe",
    title: "250+ Sustainable Projects",
    description:
      "Firmly invested in local manufacturing and high-quality Australian materials",
  },
  {
    icon: health,
    alt: "Health symbol icon",
    title: "3 Major Hospital Expansions",
    description:
      "Strategically engineered major expansions of two significant hospitals",
  },
  {
    icon: walk,
    alt: "Icon of a thriving town",
    title: "4 Regional Towns Revitalized",
    description:
      "Successfully revitalized and modernized infrastructure in four regional towns",
  },
];

const WhyUs = () => {
  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.whyUsTitle}>Why Choose Us?</h2>
      <p className={styles.whyUsDescription}>
        We have a proven track record of transforming complex engineering
        challenges into sustainable, real-world solutions.
      </p>
      <div className={styles.whyUsCardContainer}>
        {whyUsItems2.map((item, index) => {
          return <WhyUsItem key={index} item={item} index={index} />;
        })}
      </div>
    </section>
  );
};

export default WhyUs;
