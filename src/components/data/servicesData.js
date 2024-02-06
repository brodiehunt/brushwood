import flexibilityIcon from "../../assets/services/servicesIcons/flexibility_icon.svg";
import safetyIcon from "../../assets/services/servicesIcons/safety_icon.svg";
import diorImg from "../../assets/projects/dior.webp";
import innovationIcon from "../../assets/services/servicesIcons/innovation_icon.svg";
import robustnessIcon from "../../assets/services/servicesIcons/robustness_icon.svg";
import pittStreetMetroImg from "../../assets/projects/pit_street_metro.jpeg";
import structuralHarmonyIcon from "../../assets/services/servicesIcons/structural_harmony_icon.svg";
import ecoFriendlyIcon from "../../assets/services/servicesIcons/eco_friendly_icon.svg";
import sirusImg from "../../assets/home/featured_project_serius.webp";
import communityIcon from "../../assets/services/servicesIcons/community_icon.svg";
import efficiencyIcon from "../../assets/services/servicesIcons/efficiency_icon.svg";
import macarthurImg from "../../assets/projects/macarthur_square_road.webp";

export const servicesCards = [
  {
    title: "Temporary Structures & Events",
    description:
      "Specializing in temporary structures and events, we offer bespoke solutions that ensure safety, functionality, and uniqueness. From small events to large-scale exhibitions, our designs prioritize versatility and compliance with safety standards",
    features: [
      {
        title: "Flexibility",
        description:
          "Adaptable designs that cater to various event types and sizes, ensuring versatility",
        icon: flexibilityIcon,
        alt: "",
      },
      {
        title: "Safety",
        description:
          "Prioritizing the highest safety standards to ensure secure and compliant event structures",
        icon: safetyIcon,
        alt: "",
      },
    ],
    href: "/services/temporary-structures",
    img: diorImg,
    alt: "Dior 30 montaigne sydney pop up display",
  },
  {
    title: "Structural Engineering",
    description:
      "Our structural engineering team focuses on creating robust, efficient, and aesthetically pleasing structures. We blend innovative design with enduring materials, ensuring every structure stands the test of time and functionality.",
    features: [
      {
        title: "Innovation",
        description:
          "Incorporating cutting-edge design techniques for forward-thinking structural solutions",
        icon: innovationIcon,
        alt: "",
      },
      {
        title: "Robustness",
        description:
          "Guaranteeing long-lasting structures resilient to environmental and operational stresses",
        icon: robustnessIcon,
        alt: "",
      },
    ],
    href: "/services/structural-engineering",
    img: pittStreetMetroImg,
    alt: "Pitt street metro",
  },
  {
    title: "Façade Engineering & Design",
    description:
      "At the intersection of architecture and engineering, our facade engineering services focus on energy efficiency, sustainability, and architectural beauty. We collaborate closely with architects to create facades that are both innovative and in harmony with their surroundings.",
    features: [
      {
        title: "Structural Harmony",
        description:
          "Creating facades that blend innovative engineering with striking design.",
        icon: structuralHarmonyIcon,
        alt: "",
      },
      {
        title: "Eco-Friendly",
        description:
          "Emphasizing environmentally sustainable practices in material selection and design processes",
        icon: ecoFriendlyIcon,
        alt: "",
      },
    ],
    href: "/services/facade-engineering",
    img: sirusImg,
    alt: "Project sirius concept design drawing.",
  },
  {
    title: "Civil Engineering Services",
    description:
      "Our civil engineering services are integral to developing resilient infrastructure. We cover everything from roads and bridges to water systems, emphasizing sustainable practices and efficient resource management to enhance community living.",
    features: [
      {
        title: "Community",
        description:
          "Building infrastructure that fosters community growth and connectivity",
        icon: communityIcon,
        alt: "",
      },
      {
        title: "Efficiency",
        description:
          "Implementing efficient methodologies for timely, cost-effective project completion",
        icon: efficiencyIcon,
        alt: "",
      },
    ],
    href: "/services/civil-engineering",
    img: macarthurImg,
    alt: "macarthur square road resurfacing and hydraulics",
  },
];

import siteInspections from "../../assets/services/site_inspections.svg";
import structuralAssesments from "../../assets/services/structural_assessments.svg";
import remedialWorks from "../../assets/services/remedial_works.svg";

export const secondaryServices = [
  {
    icon: siteInspections,
    title: "Site Inspections",
    description:
      "Ensure precision from the ground up with our comprehensive site inspections, providing detailed analysis to inform safe and efficient construction.",
  },
  {
    icon: structuralAssesments,
    title: "Structural Assessments",
    description:
      "Our structural assessments offer meticulous evaluation and insights, ensuring the integrity and longevity of your existing and planned structures.",
  },
  {
    icon: remedialWorks,
    title: "Remedial Works",
    description:
      "Expert remedial works to address and reinforce structural issues, enhancing safety and extending the lifespan of your infrastructure.",
  },
];
