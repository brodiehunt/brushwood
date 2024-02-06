import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/footer";
import useScroll from "./hooks/useScrollTop";
function Root() {
  useScroll();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
