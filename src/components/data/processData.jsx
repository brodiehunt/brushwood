import consultationIcon from "../../assets/about/processIcons/messageIcon.svg";
import designIcon from "../../assets/about/processIcons/designIcon.svg";
import implementationIcon from "../../assets/about/processIcons/implementationIcon.svg";
import qualityAssuranceIcon from "../../assets/about/processIcons/qualityAssuranceIcon.svg";

export const processData = [
  {
    icon: consultationIcon,
    alt: "",
    title: "Initial Consultation",
    description: (
      <>
        Every successful project begins with listening. We start by
        <b> understanding your needs, goals, and vision, </b> ensuring our
        solutions are tailored to your specific requirements.
      </>
    ),
  },
  {
    icon: designIcon,
    alt: "",
    title: "Design and Planning",
    description: (
      <>
        Leveraging our extensive experience, we design and plan your project
        with precision. Our team <b>utilises the latest tools and techniques</b>{" "}
        to create efficient, sustainable, and cost-effective designs.
      </>
    ),
  },
  {
    icon: implementationIcon,
    alt: "",
    title: "Implementation and Execution",
    description: (
      <>
        With a detailed plan in place, our skilled engineers and project
        managers meticulously oversee the execution of the project. We{" "}
        <b>ensure adherence to timelines, budgets, and quality </b>standards.
      </>
    ),
  },
  {
    icon: qualityAssuranceIcon,
    alt: "",
    title: "Quality Assurance and Completion",
    description: (
      <>
        Our <b>commitment to excellence </b> extends beyond completion. We
        conduct thorough quality checks and fine-tuning to ensure the final
        output not only meets but exceeds your expectations.
      </>
    ),
  },
];
