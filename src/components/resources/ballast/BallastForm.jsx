import styles from "../formStyles.module.css";
import FormInput from "../FormInput";
import { useState } from "react";

const BallastForm = () => {
  const initialState = {
    windSpeed: "",
    structureHeight: "",
    structureWidth: "",
    structureLength: "",
  };
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const ballastCalculation = (
    windSpeed,
    structureHeight,
    structureWidth,
    structureLength
  ) => {
    const windSpeedMetersPerSecond = windSpeed * 0.44704;
    const structureHeightMeters = structureHeight * 0.3048;
    const structureWidthMeters = structureWidth * 0.3048;
    const structureLengthMeters = structureLength * 0.3048;

    const ballastWeight =
      (0.613 *
        windSpeedMetersPerSecond *
        windSpeedMetersPerSecond *
        structureHeightMeters *
        structureWidthMeters *
        structureLengthMeters) /
      9.81;
    return ballastWeight;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before submitting
    let formIsValid = true;
    let errors = {};
    if (!state.windSpeed) {
      formIsValid = false;
      errors.windSpeed = "Wind Speed is required";
    }
    if (!state.structureHeight) {
      formIsValid = false;
      errors.structureHeight = "Height is required";
    }
    if (!state.structureWidth) {
      formIsValid = false;
      errors.structureWidth = "Width is required";
    }
    if (!state.structureLength) {
      formIsValid = false;
      errors.structureLength = "Length is required";
    }
    setErrors(errors);
    if (!formIsValid) {
      return;
    }
    setErrors(initialState);

    // Make Calc
    const ballastWeight = ballastCalculation(
      state.windSpeed,
      state.structureHeight,
      state.structureWidth,
      state.structureLength
    );

    setResult(ballastWeight);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.calculatorForm} onSubmit={handleSubmit}>
        <FormInput
          id="windSpeed"
          name="windSpeed"
          handleChange={handleChange}
          value={state.windSpeed}
          error={errors.windSpeed}
        >
          Wind Speed (km/h)
        </FormInput>
        <FormInput
          id="structureHeight"
          name="structureHeight"
          handleChange={handleChange}
          value={state.structureHeight}
          error={errors.structureHeight}
        >
          Height (m)
        </FormInput>
        <FormInput
          id="structureWidth"
          name="structureWidth"
          handleChange={handleChange}
          value={state.structureWidth}
          error={errors.structureWidth}
        >
          Width (m)
        </FormInput>
        <FormInput
          id="structureLength"
          name="structureLength"
          handleChange={handleChange}
          value={state.structureLength}
          error={errors.structureLength}
        >
          Length (m)
        </FormInput>
        <button type="submit" className={styles.formButton}>
          Calculate
        </button>
      </form>
      <div className={styles.calculatorResult}>
        {result && (
          <div className={styles.resultContainer}>
            <h3 className={styles.resultTitle}>Minimum Base Area:</h3>
            <p className={styles.result}>{result.toFixed(2)} m²</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BallastForm;
