import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/footer";
import useScrollTop from "./hooks/useScrollTop";
import { useEffect, useState } from "react";

function Root() {
  useScrollTop();
  const location = useLocation();
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    // Note Dark mode intersection component handles light/dark mode on mount for home page
    if (location.pathname !== "/") {
      document.body.style.background = "white";
      setDarkmode(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Header darkmode={darkmode} />
      <main>
        <Outlet context={{ darkmode, setDarkmode }} />
      </main>
      <Footer />
    </>
  );
}

export default Root;
