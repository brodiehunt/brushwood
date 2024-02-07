import styles from "../formStyles.module.css";
import FormInput from "../FormInput";
import { useState } from "react";

const MinimumBaseAreaForm = () => {
  const initialState = {
    structureWeight: "",
    bearingPressure: "",
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

  // calculate minimum base area when structure weight is in kg and bearing pressure is in kPa
  const calculateMinimumBaseArea = (structureWeight, bearingPressure) => {
    const structureWeightInKilonewtons = structureWeight / 9.81;
    const baseArea = structureWeightInKilonewtons / bearingPressure;
    return baseArea;
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
    if (!state.bearingPressure) {
      formIsValid = false;
      errors.bearingPressure = "Bearing Pressure is required";
    }
    setErrors(errors);
    if (!formIsValid) {
      return;
    }
    setErrors(initialState);
    // Make Calc
    const baseArea = calculateMinimumBaseArea(
      state.structureWeight,
      state.bearingPressure
    );

    setResult(baseArea);
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
          Structure Weight (kg)
        </FormInput>
        <FormInput
          id="bearingPressure"
          name="bearingPressure"
          value={state.bearingPressure}
          handleChange={handleChange}
          error={errors.bearingPressure}
        >
          Bearing Pressure (kPa)
        </FormInput>
        <button className={styles.formButton} type="submit">
          Calculate
        </button>
      </form>
      {result && (
        <div className={styles.resultContainer}>
          <h3 className={styles.resultTitle}>Minimum Base Area:</h3>
          <p className={styles.result}>{result.toFixed(2)} m²</p>
        </div>
      )}
    </div>
  );
};

export default MinimumBaseAreaForm;
