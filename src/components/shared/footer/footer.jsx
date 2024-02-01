import styles from "./footer.module.css";
import FooterNav from "./FooterNav";
import FooterSocials from "./footerSocials";
import FooterContact from "./footerContact";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterNav />
      <div className={styles.container}>
        <FooterContact />
        <FooterSocials />
      </div>
      <div className={styles.copyright}>
        @ 2024 Brushwood Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
