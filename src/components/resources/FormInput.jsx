import styles from "./formInput.module.css";

const FormInput = ({ children, id, name, handleChange, value, error }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel} htmlFor={id}>
        {children}
      </label>
      <input
        type="number"
        id={id}
        name={name}
        className={styles.formInput}
        onChange={handleChange}
        value={value}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default FormInput;
