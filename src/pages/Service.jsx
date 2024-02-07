import Structural from "../components/service/structural/Structural";
import Civil from "../components/service/civil/Civil";
import Temporary from "../components/service/temporary/Temporary";
import Facade from "../components/service/facade/Facade";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimate } from "../util/animate";

const Service = () => {
  const { serviceId } = useParams();

  let ServiceComponent;

  switch (serviceId) {
    case "structural-engineering":
      ServiceComponent = Structural;
      break;
    case "civil-engineering":
      ServiceComponent = Civil;
      break;
    case "temporary-structures":
      ServiceComponent = Temporary;
      break;
    case "facade-engineering":
      ServiceComponent = Facade;
      break;
    default:
      throw new Error("Page does not exist for that route");
  }

  return <ServiceComponent />;
};

export default Service;
