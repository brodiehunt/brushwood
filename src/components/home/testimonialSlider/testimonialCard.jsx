import styles from "./testimonialCard.module.css";
import starIcon from "../../../assets/home/testimonials/star.svg";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useEffect } from "react";
import { IoMdStar } from "react-icons/io";

const TestimonialCard = ({ testimonial, animationVars, isRight }) => {
  const ref = useRef(null);
  // Change x value in animVars to be that of the article div (responsive animation)
  useEffect(() => {
    animationVars.initial.x = isRight
      ? ref.current.offsetWidth
      : -1 * ref.current.offsetWidth;
  }, [ref.current]);

  return (
    <motion.article
      ref={ref}
      key={testimonial.testimonial}
      variants={animationVars}
      initial="initial"
      animate="animate"
      className={styles.testimonialCard}
    >
      <div className={styles.testimonialComment}>{testimonial.testimonial}</div>
      <div className={styles.testimonialInformation}>
        <div className={styles.personalInfo}>
          <img
            className={styles.companyIcon}
            src={testimonial.companyIcon}
            alt={testimonial.alt}
          />
          <div className={styles.contentContainer}>
            <div className={styles.by}>{testimonial.by}</div>
            <div className={styles.role}>{testimonial.role}</div>
          </div>
        </div>
        <div className={styles.ratingContainer}>
          <IoMdStar className={styles.starIcon} />
          <IoMdStar className={styles.starIcon} />
          <IoMdStar className={styles.starIcon} />
          <IoMdStar className={styles.starIcon} />
          <IoMdStar className={styles.starIcon} />
        </div>
      </div>
    </motion.article>
  );
};

export default TestimonialCard;
