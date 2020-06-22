import React from "react";
import cx from "classnames";
import styles from "./Image.module.css";

const Image = props => {
  return (
    <div className={cx(styles.photo_1, styles.img)}>
      <img src={props.img} alt="" id="myImg1" />
    </div>
  );
};

export default Image;
