import styles from "./header.module.css";
import HeaderModalDropdown from "./HeaderModalDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { PiPhone } from "react-icons/pi";
import logo from "../../../assets/shared/logo.svg";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { motion } from "framer-motion";
import { subContainerVariants, linkVariants } from "../../../util/animate";
import ButtonLink from "../buttonLink/ButtonLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setSubMenuOpen(false);
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

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className={styles.stickyContainer}>
      <header className={`${styles.header} ${styles.specialHeader}`}>
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
          {/* <button className={styles.largeNavDropdown} onClick={toggleSubMenu}>
          Resources
          <MdExpandMore
            className={subMenuOpen ? `${styles.arrowUp}` : `${styles.arrow}`}
          />
          {subMenuOpen && (
            <motion.div
              variants={subContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.navDropdownLinksContainer}
            >
              <motion.div
                variants={linkVariants}
                className={styles.subLinkContainer}
              >
                <Link to="/services" className={styles.subLink}>
                  Service 1
                </Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                className={styles.subLinkContainer}
              >
                <Link to="/services" className={styles.subLink}>
                  Service 2
                </Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                className={styles.subLinkContainer}
              >
                <Link to="/services" className={styles.subLink}>
                  Service 3
                </Link>
              </motion.div>
            </motion.div>
          )}
        </button> */}
        </nav>
        {/* <Link to="/contact" className={styles.contactButton}>
        Contact
      </Link> */}
        <div className={styles.contactButton}>
          <ButtonLink href="/contact" type="internal" theme="full">
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
