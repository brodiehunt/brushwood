import styles from "./intersection.module.css";
import { useEffect, useRef, useState } from "react";
const DarkModeIntersection = ({ darkmode, setDarkmode }) => {
  const ref = useRef(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.y < 100) return;

        if (entry.isIntersecting) {
          setDarkmode(false);
          document.body.style.background = "white";
          return;
        }

        setDarkmode(true);
        document.body.style.background = "black";
        console.log("triggered");
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
  }, [darkmode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (firstLoad) {
          console.log("observe on entry once", entry);
          setFirstLoad(false);

          if (entry.rootBounds.bottom < entry.boundingClientRect.top) {
            setDarkmode(true);
            document.body.style.background = "black";
          } else {
            setDarkmode(false);
            document.body.style.background = "white";
          }
        }
      },
      {
        threshold: 0,
      }
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
