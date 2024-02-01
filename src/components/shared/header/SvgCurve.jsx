import styles from "./svgCurve.module.css";

const SvgCurve = () => {
  const initialPath = `M0 100 L0 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 0 0`;
  return (
    <svg className={styles.svgCurve}>
      <path d={initialPath}></path>
    </svg>
  );
};

export default SvgCurve;
