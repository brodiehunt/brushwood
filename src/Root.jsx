import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/shared/header/Header";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
