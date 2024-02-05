import styles from "./banner.module.css";

const Banner = ({ children, bannerImg }) => {
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source srcSet={bannerImg} media="(min-width: 1024px)" />
        <source srcSet={bannerImg} media="(min-width: 768px)" />
        <source />
        <img
          className={styles.bannerImg}
          src={bannerImg}
          alt="Engineering team planning"
        />
      </picture>
      {children}
    </section>
  );
};

export default Banner;
