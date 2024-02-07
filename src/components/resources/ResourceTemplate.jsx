import styles from "./resources.module.css";
import { useState } from "react";
import ballastImg from "../../assets/resources/ballast.webp";
import bearingPressureImg from "../../assets/resources/bearingPressure.webp";
import minimumBaseAreaImg from "../../assets/resources/minimumBase.webp";
import BallastForm from "./ballast/BallastForm";
import BearingPressureForm from "./bearingPressure/BearingPressureForm";
import MinimumBaseAreaForm from "./minimumBaseArea/MinimumBaseAreaForm";

const calculatorData = {
  ballast: {
    title: "Ballast Calculator",
    description:
      "This Ballast calculator provided by Brushwood Engineering Group assists in determining the necessary ballast for a temporary structure based on wind speed and structure dimensions.",
    note: "The calculations provided are preliminary in nature and serve as a general guide. An essential component in these computations is the aerodynamic shape factor, which accounts for the influence of an object's shape on the force exerted by wind. While we've assumed a factor of 1.2 in our calculator, real-world applications may vary. For tailored advice, precise calculations, and safety assurance, reach out and consult with the experts at Brushwood Engineering Group today.",
    img: ballastImg,
    alt: "Image showing the dimensions of a structure",
  },
  bearingPressure: {
    title: "Bearing Pressure Calculator",
    description:
      "The Bearing Pressure Calculator by Brushwood Engineering Group provides quick estimates for bearing pressures in construction and temporary structures.",
    img: bearingPressureImg,
    alt: "Image showing example of bearing pressure calculation",
    note: "This tool converts structure weight from kilograms to kilonewtons, then estimates bearing pressure using the base area. Ideal for initial evaluations, but for thorough and expert assessments, consult Brushwood Engineering Group.",
  },
  minimumBaseArea: {
    title: "Minimum Base Area Calculator",
    description:
      "The Base Area Estimator by Brushwood Engineering Group offers rapid calculations for determining the minimum required base area, based on the weight of the structure and the Allowable bearing pressure.",
    note: "This calculator determines the required base area for a given structure, based on its weight and the allowable bearing pressure. It functions by converting the given structure weight from kilograms to kilonewtons and then computing the necessary base area by dividing this force by the allowable pressure. While this is a valuable tool for initial assessments, it's crucial to consult with experts for an in-depth analysis. Rely on Brushwood Engineering Group for all your detailed engineering requirements.",
    img: minimumBaseAreaImg,
    alt: "Image showing example of minimum base area calculation",
  },
};
const ResourceTemplate = () => {
  const [selectedCalculator, setSelectedCalculator] = useState("calculator1");
  console.log("selectedCalculator: ", selectedCalculator);

  const handleCalculatorChange = (e) => {
    console.log(e.target.value);
    setSelectedCalculator(e.target.value);
  };
  let sectionInfo;
  let CalculatorForm;
  if (selectedCalculator === "calculator1") {
    sectionInfo = calculatorData.ballast;
    CalculatorForm = <BallastForm />;
  } else if (selectedCalculator === "calculator2") {
    sectionInfo = calculatorData.bearingPressure;
    CalculatorForm = <BearingPressureForm />;
  } else if (selectedCalculator === "calculator3") {
    sectionInfo = calculatorData.minimumBaseArea;
    CalculatorForm = <MinimumBaseAreaForm />;
  }

  return (
    <div className={styles.resourcesTemplate}>
      <div className={styles.calculatorSelectorContainer}>
        <label htmlFor="calculator" className={styles.selectLabel}>
          Choose your calculator:
        </label>

        <select
          onChange={handleCalculatorChange}
          className={styles.selectBox}
          name="calculator"
          id="calculator"
        >
          <option defaultValue value="calculator1">
            Ballast Calculator
          </option>
          <option value="calculator2">Bearing Pressure Calculator</option>
          <option value="calculator3">Minimum Base Area Calculator</option>
        </select>
      </div>
      <div className={styles.calculatorContainer}>
        <div className={styles.columnOne}>
          <h2 className={styles.calculatorTitle}>{sectionInfo.title}</h2>
          <p className={styles.calculatorDescription}>
            {sectionInfo.description}
          </p>
          <div className={styles.formContainer}>{CalculatorForm}</div>
          <div className={styles.calculatorNote}>
            <strong className={styles.bold}>Note:</strong>{" "}
            <span className={styles.lightText}>{sectionInfo.note}</span>
          </div>
        </div>
        <div className={styles.columnTwo}>
          <img
            className={styles.calculatorImg}
            src={sectionInfo.img}
            alt={sectionInfo.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceTemplate;
