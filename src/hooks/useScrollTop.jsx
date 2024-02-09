import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Hook to scroll to top of the screen when the URI changes
const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollTop;
