import styles from "./buttonLink.module.css";
import { Link } from "react-router-dom";

// Button link component
// Two themes "full" and "hollow"
// two types "external" (regular <a> tag) and internal (react-router <Link>)

const ButtonLink = ({ href, type, theme, children, darkmode }) => {
  return type === "external" ? (
    <a href={href} className={theme === "hollow" ? styles.hollow : styles.full}>
      {children}
    </a>
  ) : (
    <Link
      to={href}
      className={
        theme === "hollow"
          ? `${styles.hollow} ${darkmode && styles.dark}`
          : `${styles.full} ${darkmode && styles.dark}`
      }
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
