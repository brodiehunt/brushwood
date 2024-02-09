import styles from "./verticalTimeline.module.css";
import TimelineCard from "./TimelineCard";
import { processData } from "../../data/processData";

// Vertical timeline component - our process section - about page
const VerticalTimeline = () => {
  return (
    <div className={styles.timelineContainer}>
      {processData.map((item, index) => {
        return <TimelineCard key={index} item={item} />;
      })}
    </div>
  );
};

export default VerticalTimeline;
