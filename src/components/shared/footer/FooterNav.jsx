import styles from "./footerNav.module.css";
import Logo from "../../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

// Footer Navigation component
const FooterNav = () => {
  return (
    <div className={styles.footerNav}>
      <div>
        <img
          className={styles.logo}
          src={Logo}
          alt="Brushwood Engineering Group logo"
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <Link className={styles.navLink} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
