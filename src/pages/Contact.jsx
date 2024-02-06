import PageHeader from "../components/shared/pageHeader/PageHeader";
import { contactHeader } from "../components/data/pageHeaderData";
import ContactForm from "../components/contact/contactForm/ContactForm";
const Contact = () => {
  return (
    <div>
      <PageHeader headerData={contactHeader} />
      <ContactForm />
    </div>
  );
};

export default Contact;
