import { Link } from "react-router-dom";
import styles from "./headerModal.module.css";
import { motion } from "framer-motion";
import SvgCurve from "./SvgCurve";
import {
  containerVariants,
  linkVariants,
  menuSlide,
  navButtonVariants,
} from "../../../util/animate";

const HeaderModalDropdown = ({ setMenuOpen }) => {
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
        <motion.div variants={linkVariants} className={styles.navItem}>
          <Link className={styles.navLink} to="/resources">
            Resources
          </Link>
        </motion.div>
        <motion.div
          className={styles.buttonContainer}
          variants={navButtonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Link to="/contact" className={styles.dropdownButton}>
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeaderModalDropdown;
