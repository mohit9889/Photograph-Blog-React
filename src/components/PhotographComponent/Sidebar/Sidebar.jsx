import React from "react";
import cx from "classnames";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.gallery_sidebar}>
      <div className={styles.sidebar_content}>
        <div className={styles.empty} />
        <div className={styles.gallery_logo} />
        <div className={styles.gallery_content}>
          <p className={styles.name}>Sudhanshu Ojha</p>
          <p className={styles.expert}>PHOTOGRAPHY EXPERT</p>
          <hr className={styles.rule_divide} />
          <p className={styles.sud_info}>
            I am a professional photographer from New York. I love to travel
            around the globe and take beautiful photos of great people.
          </p>
          <button className={styles.gallery_contact}>CONTACT</button>
        </div>
      </div>

      <div className={styles.gallery_social}>
        <div className={styles.social_holder}>
          <div className={styles.social_icon}>
            <a className={styles.icon} href="#facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a className={styles.icon} href="#instagram">
              <i className="fab fa-instagram" />
            </a>
            <a className={styles.icon} href="#twitter">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
