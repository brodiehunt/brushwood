import styles from "./topCompanies.module.css";
// import johnHolland from "../../../assets/home/topCompanies/john_holland.png";
// import lendlease from "../../../assets/home/topCompanies/lendlease.svg";
// import richardCrockes from "../../../assets/home/topCompanies/richard_crockes.png";
// import cpb from "../../../assets/home/topCompanies/cpb_contractors.png";
// import NSWGov from "../../../assets/home/topCompanies/NSW_Gov.svg";

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
          {/* <img
            className={styles.bannerImg}
            src={johnHolland}
            alt="john holland logo"
          />
          <img
            className={styles.bannerImg}
            src={lendlease}
            alt="lendlease logo"
          />
          <img
            className={styles.bannerImg}
            src={richardCrockes}
            alt="richard crockes logo"
          />
          <img
            className={styles.bannerImg}
            src={cpb}
            alt="cpb contractors logo"
          />
          <img
            className={styles.bannerImg}
            src={NSWGov}
            alt="New South Wales Government logo"
          /> */}
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
          {/* <img
            className={styles.bannerImg}
            src={johnHolland}
            alt="john holland logo"
          />
          <img
            className={styles.bannerImg}
            src={lendlease}
            alt="lendlease logo"
          />
          <img
            className={styles.bannerImg}
            src={richardCrockes}
            alt="richard crockes logo"
          />
          <img
            className={styles.bannerImg}
            src={cpb}
            alt="cpb contractors logo"
          />
          <img
            className={styles.bannerImg}
            src={NSWGov}
            alt="New South Wales Government logo"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
