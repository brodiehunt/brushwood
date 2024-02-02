import styles from "./buttonLink.module.css";
import { Link } from "react-router-dom";

const ButtonLink = ({ href, type, theme, children }) => {
  return type === "external" ? (
    <a href={href} className={theme === "hollow" ? styles.hollow : styles.full}>
      {children}
    </a>
  ) : (
    <Link
      to={href}
      className={theme === "hollow" ? styles.hollow : styles.full}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
