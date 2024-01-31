import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <>
      <div className={styles.helloWorld}>Hello World</div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
