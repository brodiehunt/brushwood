import { Link } from "react-router-dom";
import styles from "./headerModal.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";
import SvgCurve from "./SvgCurve";
import {
  containerVariants,
  linkVariants,
  menuSlide,
  navButtonVariants,
  subContainerVariants,
} from "../../../util/animate";

const HeaderModalDropdown = ({ setMenuOpen }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenuOpen = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      initial="initial"
      exit="exit"
      className={styles.modalContainer}
      onClick={() => setMenuOpen(false)}
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={styles.modalContent}
      >
        <SvgCurve />
        <motion.div variants={linkVariants} className={styles.navItem}>
          <Link
            autoFocus
            className={styles.navLink}
            to="/projects"
            tabIndex={0}
          >
            Projects
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} className={styles.navItem}>
          <Link className={styles.navLink} to="/about">
            About
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} className={styles.navItem}>
          <Link className={styles.navLink} to="/services">
            Services
          </Link>
        </motion.div>
        <motion.button
          variants={linkVariants}
          className={styles.navDropdownButton}
          onClick={(event) => {
            event.stopPropagation();
            toggleSubMenuOpen();
          }}
        >
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
              className={styles.navDropdownLinks}
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
        </motion.button>
        <motion.div
          className={styles.buttonContainer}
          variants={navButtonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <button className={styles.dropdownButton}>Contact</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeaderModalDropdown;
