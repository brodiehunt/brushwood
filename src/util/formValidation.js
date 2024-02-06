export const validateContact = {
  name: (name) => {
    if (!name.trim()) {
      return "This field is required.";
    }
    return "";
  },
  email: (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      return "This field is required.";
    } else if (!regex.test(email)) {
      return "Email is invalid.";
    } else {
      return "";
    }
  },
  phone: (phone) => {
    if (!phone.trim()) {
      return "This field is required.";
    }
    return "";
  },
  message: (message) => {
    if (!message.trim()) {
      return "This field is required.";
    } else if (message.trim().length < 20) {
      return "Your message should be at least 20 characters long";
    } else {
      return "";
    }
  },
  submit: (formData) => {
    const newErrorsObj = {
      name: validateContact.name(formData.name),
      email: validateContact.email(formData.email),
      phone: validateContact.phone(formData.phone),
      message: validateContact.message(formData.message),
    };
    return newErrorsObj;
  },
};
