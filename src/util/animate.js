export const menuSlide = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const itemSlide = {
  intitial: {
    x: "-80px",
  },
  enter: {
    x: "0px",
  },
  exit: {
    x: "-80px",
  },
};

export const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const subContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const linkVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

export const navButtonVariants = {
  initial: {
    x: "-150%",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.3,
      delay: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "-150%",
  },
};

// Page transition animation

export const pageAnimate = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Process card animations - about page

export const processCardAnim = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const processCardIconAnim = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Testimonial slider animations - home page
export const oldCenterAnim = {
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
export const newCenterAnim = {
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

export const regularAnim = {
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
