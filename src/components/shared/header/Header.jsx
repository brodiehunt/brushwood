import styles from "./header.module.css";
import HeaderModalDropdown from "./HeaderModalDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { PiPhone } from "react-icons/pi";
import logo from "../../../assets/shared/logo.svg";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import ButtonLink from "../buttonLink/ButtonLink";

// Top Header component
const Header = ({ darkmode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // When menu nav link click (modal) - unset overflow property on body contiainer
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "unset";
  }, [location.pathname]);

  const toggleMenuOpen = () => {
    if (menuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={
        darkmode
          ? `${styles.stickyContainer} ${styles.dark}`
          : `${styles.stickyContainer}`
      }
    >
      <header className={styles.header}>
        <button
          aria-label="toggle dropdown menu"
          className={styles.hamburgerButton}
          onClick={toggleMenuOpen}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <IoClose className={styles.hamburgerIcon} />
          ) : (
            <RxHamburgerMenu className={styles.hamburgerIcon} />
          )}
        </button>
        {/* Large screen nav here */}
        <Link className={styles.headerLogoLink} to="/">
          <img
            className={styles.headerLogo}
            src={logo}
            alt="brushwood contruction logo"
          />
        </Link>
        <nav className={styles.largeNav}>
          <Link to="/projects" className={styles.largeNavLink}>
            projects
          </Link>
          <Link to="/about" className={styles.largeNavLink}>
            about
          </Link>
          <Link to="/services" className={styles.largeNavLink}>
            services
          </Link>
          <Link to="/resources" className={styles.largeNavLink}>
            resources
          </Link>
        </nav>
        <div className={styles.contactButton}>
          <ButtonLink
            href="/contact"
            type="internal"
            theme="full"
            darkmode={darkmode}
          >
            Contact
          </ButtonLink>
        </div>

        {/* Large screen nav ends here */}
        <a
          className={styles.headerPhoneButton}
          href="tel:61401810414"
          aria-label="call brushwood contruction"
        >
          <PiPhone aria-hidden="true" className={styles.hamburgerIcon} />
        </a>

        <AnimatePresence>
          {menuOpen && <HeaderModalDropdown setMenuOpen={setMenuOpen} />}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
