import styles from "./topCompanies.module.css";

const TopCompanies = ({ sliderData, title }) => {
  return (
    <section className={styles.relativeBox}>
      <h2 className={styles.title}> {title}</h2>
      <div className={styles.topCompaniesSection}>
        <div className={styles.infiniteScrollBanner}>
          {sliderData.map((item, index) => {
            return (
              <img
                key={index}
                className={styles.bannerImg}
                src={item.logo}
                alt={item.alt}
              />
            );
          })}
        </div>
        <div className={styles.infiniteScrollBanner}>
          {sliderData.map((item, index) => {
            return (
              <img
                key={index}
                className={styles.bannerImg}
                src={item.logo}
                alt={item.alt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
