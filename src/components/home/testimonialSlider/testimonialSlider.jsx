import styles from "./testimonialSlider.module.css";
import TestimonialCard from "./testimonialCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";
import {
  oldCenterAnim,
  newCenterAnim,
  regularAnim,
} from "../../../util/animate";
import { testimonials } from "../../data/testimonialData";

// Testimonial slider component - home page
const TestimonialSlider = () => {
  const [testSlider, setTestSlider] = useState([
    { ...testimonials[2] },
    ...testimonials,
    { ...testimonials[0] },
  ]);
  const [isRight, setIsRight] = useState(true);

  // Take the last 4 elements of current state, and add the 3rd element to the end. (slide right)
  const rightSlide = () => {
    const newState = [...testSlider.slice(1, 5), testSlider[2]];
    setIsRight(true);
    setTestSlider(newState);
    // Set x to -article width (child-width) (slide left);
    regularAnim.initial.x = Math.abs(regularAnim.initial.x);
    newCenterAnim.initial.x = Math.abs(newCenterAnim.initial.x);
    oldCenterAnim.initial.x = Math.abs(oldCenterAnim.initial.x);
  };

  // Take the first 4 elements of current state, and add the last element to the beginning. (slide left)
  const leftSlide = () => {
    setIsRight(false);
    setTestSlider([testSlider[2], ...testSlider.slice(0, 4)]);
    // Set x to -article width (child-width) (slide left);
    regularAnim.initial.x = -Math.abs(regularAnim.initial.x);
    newCenterAnim.initial.x = -Math.abs(newCenterAnim.initial.x);
    oldCenterAnim.initial.x = -Math.abs(oldCenterAnim.initial.x);
  };

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.testimonialTitle}>
        Don't just take our word for it
      </h2>
      <div className={styles.testimonialsContainer}>
        <TestimonialCard
          testimonial={testSlider[0]}
          animationVars={regularAnim}
          isRight={isRight}
        />
        <TestimonialCard
          testimonial={testSlider[1]}
          animationVars={isRight ? oldCenterAnim : regularAnim}
          isRight={isRight}
        />
        <TestimonialCard
          testimonial={testSlider[2]}
          animationVars={newCenterAnim}
          isRight={isRight}
        />
        <TestimonialCard
          testimonial={testSlider[3]}
          animationVars={isRight ? regularAnim : oldCenterAnim}
          isRight={isRight}
        />
        <TestimonialCard
          testimonial={testSlider[4]}
          animationVars={regularAnim}
          isRight={isRight}
        />
      </div>

      <div className={styles.buttonsContainer}>
        <button
          aria-label="slide carousel right"
          className={styles.sliderButton}
          onClick={leftSlide}
        >
          <CiCircleChevLeft className={styles.arrowIcon} />
        </button>
        <button
          aria-label="slide carousel right"
          className={styles.sliderButton}
          onClick={rightSlide}
        >
          <CiCircleChevRight className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
