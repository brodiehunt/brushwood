import styles from "./contactForm.module.css";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { validateContact } from "../../../util/formValidation";

const ContactForm = () => {
  const initialData = { name: "", email: "", phone: "", message: "" };
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const formRefs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    message: useRef(null),
  };
  const feedbackRef = useRef(null);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setFormErrors({
      ...formErrors,
      [name]: validateContact[name](value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form - set errors - focus first error element
    const newErrorsObj = validateContact.submit(formData);
    const keys = Object.keys(formData);
    const firstError = keys.find((key, index) => {
      return newErrorsObj[key];
    });

    if (firstError) {
      setFormErrors(newErrorsObj);
      formRefs[firstError].current.focus();
      return;
    }

    // Send email
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_in7bxj6",
        "template_j91caqs",
        event.target,
        "8scBSGTjTzlTDa_Df"
      );
      console.log("success");
      setSubmitSuccess(true);
      setSubmitError(false);
      setFormData(initialData);
    } catch (error) {
      console.log(error);
      setSubmitError(true);
      setSubmitSuccess(false);
    } finally {
      feedbackRef.current.scrollIntoView(true);
      setIsLoading(false);
      console.log("has resolved");
    }
  };
  return (
    <section className={styles.contactFormSection}>
      <h2 className={styles.formTitle}>Submit an Enquiry</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div ref={feedbackRef} className={styles.feedBackDiv}>
          {submitError && (
            <div className={styles.submitError}>
              There was an error with your submission. Please contact us
              directly on: <b>(02) 72509440</b>
            </div>
          )}
          {submitSuccess && (
            <div className={styles.submitSuccess}>
              Success! We will be in touch with you shortly to discuss your
              enquiry.
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input
            className={`${styles.formInput} ${
              formErrors.name && styles.inputFieldError
            }`}
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={formRefs.name}
            placeholder="Your name"
          />
          {formErrors.name && (
            <div className={styles.inputError}>{formErrors.name}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            className={`${styles.formInput} ${
              formErrors.email && styles.inputFieldError
            }`}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={formRefs.email}
            placeholder="johndoe@gmail.com"
          />
          {formErrors.email && (
            <div className={styles.inputError}>{formErrors.email}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="phone">
            Phone
          </label>
          <input
            className={`${styles.formInput} ${
              formErrors.phone && styles.inputFieldError
            }`}
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={formRefs.phone}
            placeholder="0400-000-000"
          />
          {formErrors.phone && (
            <div className={styles.inputError}>{formErrors.phone}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="message">
            Message
          </label>
          <textarea
            className={`${styles.formInput} ${
              formErrors.message && styles.inputFieldError
            }`}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={formRefs.message}
            placeholder="Type your message here"
            rows="5"
          />
          {formErrors.message && (
            <div className={styles.inputError}>{formErrors.message}</div>
          )}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className={styles.submitButton}
        >
          Submit Enquiry
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
