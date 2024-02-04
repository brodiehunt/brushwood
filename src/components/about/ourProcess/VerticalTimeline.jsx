import styles from "./verticalTimeline.module.css";
import TimelineCard from "./TimelineCard";
import { processData } from "../../data/processData";
const cardAnim = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const VerticalTimeline = () => {
  return (
    <div className={styles.timelineContainer}>
      {processData.map((item, index) => {
        return (
          <TimelineCard
            key={index}
            item={item}
            index={index}
            cardAnim={{ ...cardAnim }}
          />
        );
      })}
    </div>
  );
};

export default VerticalTimeline;
