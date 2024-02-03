import styles from "./testimonialSlider.module.css";
import TestimonialCard from "./testimonialCard";
import cpbIcon from "../../../assets/home/testimonials/cpb_contractors.webp";
import togaIcon from "../../../assets/home/testimonials/toga.svg";
import ventiaIcon from "../../../assets/home/testimonials/ventia.svg";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

const testimonials = [
  {
    testimonial:
      "Game-changer! Brushwood Engineerings commitment truly elevated the project. The communication was spot-on, and their responsiveness sealed the deal",
    by: "Ava Atroushi",
    role: "Site Engineer, CPB",
    companyIcon: cpbIcon,
    alt: "cpb company logo",
  },
  {
    testimonial:
      "Expertise and unwavering dedication illuminated through every phase of the project. Brushwood have become my first choice for engineering",
    by: "Omar Charif",
    role: "Site Engineer, TOGA",
    companyIcon: togaIcon,
    alt: "Toga company Logo",
  },
  {
    testimonial:
      "I am thrilled with the exceptional expertise and professionalism displayed by Brushwood Engineering. Clear communication, innovative solutions—the top choice for engineering",
    by: "Rami Akl",
    role: "Site Engineer, Ventia",
    companyIcon: ventiaIcon,
    alt: "Ventia company logo",
  },
];

const oldCenterAnim = {
  initial: {
    x: 600,
    opacity: 1,
    scaleY: 1.2,
  },
  animate: {
    x: 0,
    scaleY: 1,
    opacity: 0.7,
    transition: {
      duration: 0.8,
    },
  },
};
const newCenterAnim = {
  initial: {
    x: 600,
    scaleY: 1,
    opacity: 0.7,
  },
  animate: {
    x: 0,
    scaleY: 1.2,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const regularAnim = {
  initial: {
    x: 600,
    opacity: 0.7,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const TestimonialSlider = () => {
  const [testSlider, setTestSlider] = useState([
    { ...testimonials[2] },
    ...testimonials,
    { ...testimonials[0] },
  ]);
  const [isRight, setIsRight] = useState(true);

  console.log(regularAnim.initial);
  const rightSlide = () => {
    const newState = [...testSlider.slice(1, 5), testSlider[2]];
    setIsRight(true);
    setTestSlider(newState);
    // Set x to -article width (child-width) (slide left);
    regularAnim.initial.x = Math.abs(regularAnim.initial.x);
    newCenterAnim.initial.x = Math.abs(newCenterAnim.initial.x);
    oldCenterAnim.initial.x = Math.abs(oldCenterAnim.initial.x);
  };

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
