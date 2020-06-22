import React from "react";
import styles from "./About.module.css";
import cx from "classnames";

const AboutScreen = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.grid_container}>
        <div className={styles.about}>
          <p>About Me</p>
        </div>
        <div className={styles.image} />

        <div className={styles.details}>
          <p className={styles.details_1}>Who is behind?</p>
          <p className={styles.details_2}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula
            porta felis euismod semper.
          </p>
          <p className={styles.details_3}>
            “Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus.”
          </p>
          <p className={styles.details_2}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec ullamcorper nulla non.
          </p>

          <p className={styles.details_1}>Elsewhere</p>
          <div className={styles.social}>
            <div className={cx(styles.twitter, styles.social_logo)} />
            <div className={cx(styles.fb, styles.social_logo)} />
            <div className={cx(styles.insta, styles.social_logo)} />
            <div className={cx(styles.pin, styles.social_logo)} />
          </div>
        </div>

        <div className={styles.who}>
          Who am I?
          <p className={styles.who_1}>
            I’m a freelance photographer specializing in landscape, advertorial
            and conceptual photography, based in New York. I love to turn ideas
            into beautiful things.
          </p>
        </div>

        <div className={styles.why}>
          Why choose me?
          <p className={styles.why_1}>
            Duis mollis, est non commodo luctus, nisi porttitor ligula, eget
            lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare
            sem lacinia quam.
            <br /> <br />
            1. Vivamus sagittis lacus vel augue laoreet. <br />
            2. Cras mattis consectetur purus sit amet. <br />
            3. Vestibulum id ligula porta felis euismod.
          </p>
        </div>

        <div className={styles.skills}>
          My skills
          <div className={styles.bars}>
            Photoshop
            <div className="w3-border">
              <div className={styles.photoshop} />
            </div>
            <br />
            Final Cut
            <div className="w3-border">
              <div className={styles.final_cut} />
            </div>
            <br />
            Studio Photography
            <div className="w3-border">
              <div className={styles.studio} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
