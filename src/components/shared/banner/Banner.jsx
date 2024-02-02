import styles from "./banner.module.css";
import Img from "../../../assets/shared/banner1.webp";
import Banner2 from "../../../assets/shared/banner2.webp";
import Banner3 from "../../../assets/shared/banner3.webp";
import Banner4 from "../../../assets/shared/banner4.webp";

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
