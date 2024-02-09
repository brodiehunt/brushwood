import styles from "./intersection.module.css";
import { useEffect, useRef, useState } from "react";

// Dark mode intersection component
// This component triggers dark mode / light mode when it intersets with the bottom of the viewport.
const DarkModeIntersection = ({ darkmode, setDarkmode }) => {
  const ref = useRef(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (firstLoad) {
          setFirstLoad(false);
          return;
        }
        // Exit function if intersection event is called on the top boundry
        if (entry.boundingClientRect.y < 200) return;

        // Ie scrolling down the page: Transition from dark - light
        if (entry.isIntersecting) {
          setDarkmode(false);
          document.body.style.background = "white";
          return;
        }

        // event triggered where - its not the top intersection
        //  its not scrolling down the page
        // Ie we are scrolling up - from light to dark;

        // if bounding client rect .y <
        console.log(entry.rootBounds.bottom);
        console.log(entry.boundingClientRect.y);
        if (entry.rootBounds.bottom < entry.boundingClientRect.y) {
          setDarkmode(true);
          document.body.style.background = "black";
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [firstLoad]);

  return <div ref={ref} className={styles.intersection}></div>;
};

export default DarkModeIntersection;
