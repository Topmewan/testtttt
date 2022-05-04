import React from "react";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <h1>Loading...</h1>
    </div>
  );
};

export default Spinner;
