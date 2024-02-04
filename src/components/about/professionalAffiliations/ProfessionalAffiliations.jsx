import styles from "./professionalAffiliations.module.css";
import vicBuildingAuthorityLogo from "../../../assets/about/accreditors/victorian_building_authority.webp";
import nswFairTradingLogo from "../../../assets/about/accreditors/nsw_fair_trading.webp";
import professionalEngineersQLD from "../../../assets/about/accreditors/BIG_engineers_queensland.webp";
import registeredBuildingPractitioner from "../../../assets/about/accreditors/registered_building_practitioner.webp";
import AustralianInstituteBuilding from "../../../assets/about/accreditors/aib.webp";
import engineersAustralia from "../../../assets/about/accreditors/engineers_australia.webp";

const logos = [
  { logo: vicBuildingAuthorityLogo, alt: "Victorian building authority logo" },
  { logo: nswFairTradingLogo, alt: "New South Wales Fair trading logo" },
  {
    logo: professionalEngineersQLD,
    alt: "Board of professional engineers of queensland logo",
  },
  {
    logo: registeredBuildingPractitioner,
    alt: "Registered Building Practitioner Logo",
  },
  {
    logo: AustralianInstituteBuilding,
    alt: "Australian Institute of building advance through learning logo",
  },
  { logo: engineersAustralia, alt: "Engineers Australia Logo" },
];

const ProfessionalAffilitations = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Our Professional Affiliations</h2>
      <div className={styles.logoGrid}>
        {logos.map((logo, index) => {
          return (
            <img
              key={index}
              className={styles.logo}
              src={logo.logo}
              alt={logo.alt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProfessionalAffilitations;
