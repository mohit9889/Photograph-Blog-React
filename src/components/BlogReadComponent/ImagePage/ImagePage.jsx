import React, { useEffect } from "react";
import styles from "./ImagePage.module.css";
import { TimelineMax, Power2 } from "gsap";

const ImagePage = props => {
  // useEffect(() => {
  //   var tl = new TimelineMax();

  //   tl.staggerFrom(
  //     "h2",
  //     0.8,
  //     {
  //       opacity: 0,
  //       y: -40,
  //       ease: Power2.easeInOut
  //     },
  //     0.5
  //   );

  //   tl.staggerFrom(
  //     "span",
  //     0.5,
  //     {
  //       opacity: 0,
  //       y: -40,
  //       ease: Power2.easeInOut
  //     },
  //     0.2,
  //     "-=1"
  //   );

  //   tl.staggerFrom(
  //     "button",
  //     0.8,
  //     {
  //       opacity: 0
  //     },
  //     0.2,
  //     "-=0.5"
  //   );
  // });

  return (
    <section id="img_section" className={styles.img_section}>
      <div className={styles.slide}>
        <div className={styles.img_wrap}>
          <img src={props.img} alt="img1" />
        </div>
        <div className={styles.heading}>
          <h2 className="heading">Lorem Waldy</h2>
          <span className="tagline">
            Distilling design ideas and other interesting topics
          </span>
        </div>
        <button
          id="read_content_switch"
          className={styles.read_content_switch}
          onClick={props.click}
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default ImagePage;
