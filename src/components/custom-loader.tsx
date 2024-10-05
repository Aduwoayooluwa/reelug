import React from "react";
import styles from "./loader.module.css";

const CustomLoader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.leaf1}></div>
        <div className={styles.leaf2}></div>
        <div className={styles.leaf3}></div>
      </div>
    </div>
  );
};

export default CustomLoader;
