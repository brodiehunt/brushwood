import styles from "../formStyles.module.css";
import FormInput from "../FormInput";
import { useState } from "react";

const bearingPressureForm = () => {
  const initialState = {
    structureWeight: "",
    baseArea: "",
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

  const bearingPressureCalculation = (structureWeight, baseArea) => {
    const pressure = structureWeight / baseArea;
    return pressure;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before submitting
    let formIsValid = true;
    let errors = {};
    if (!state.structureWeight) {
      formIsValid = false;
      errors.structureWeight = "Structure Weight is required";
    }
    if (!state.baseArea) {
      formIsValid = false;
      errors.baseArea = "Base Area is required";
    }
    setErrors(errors);
    if (!formIsValid) {
      return;
    }
    setErrors(initialState);
    // Make Calc
    const pressure = bearingPressureCalculation(
      state.structureWeight,
      state.baseArea
    );

    setResult(pressure);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="structureWeight"
          name="structureWeight"
          value={state.structureWeight}
          handleChange={handleChange}
          error={errors.structureWeight}
        >
          Structure Weight (N)
        </FormInput>
        <FormInput
          id="baseArea"
          name="baseArea"
          value={state.baseArea}
          handleChange={handleChange}
          error={errors.baseArea}
        >
          Base Area (m²)
        </FormInput>
        <button type="submit" className={styles.formButton}>
          Calculate
        </button>
      </form>
      <div className={styles.resultContainer}>
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

export default bearingPressureForm;
