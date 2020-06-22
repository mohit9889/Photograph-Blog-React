import React from "react";
import styles from "./Footer.module.css";
//image
import img from "../../images/img6.jpg";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.circle}>
        <img className={styles.image} src={img} alt="" />
      </div>
      <div className={styles.menu}>
        <h5 className={styles.h5}>Blog</h5>
        <h5 className={styles.h5}>Photograph</h5>
        <h5 className={styles.h5}>Price</h5>
        <h5 className={styles.h5}>Contact</h5>
      </div>
    </div>
  );
};

export default FooterComponent;
