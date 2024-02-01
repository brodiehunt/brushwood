import styles from "./header.module.css";
import HeaderModalDropdown from "./HeaderModalDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { PiPhone } from "react-icons/pi";
import logo from "../../../assets/shared/logo.svg";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
      <Link className={styles.headerLogoLink} to="/">
        <img
          className={styles.headerLogo}
          src={logo}
          alt="brushwood contruction logo"
        />
      </Link>
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
  );
};

export default Header;
