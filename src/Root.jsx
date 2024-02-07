import styles from "./App.module.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/footer";
import useScrollTop from "./hooks/useScrollTop";
import { useEffect, useState } from "react";
function Root() {
  useScrollTop();
  const location = useLocation();
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.background = "black";
      setDarkmode(true);
    } else {
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
