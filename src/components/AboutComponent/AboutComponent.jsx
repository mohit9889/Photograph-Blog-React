import React from "react";
import styles from "./About.module.css";
import Grid from "@material-ui/core/Grid";
//images
import img from "../../images/img3.jpg";

const AboutComponent = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>About Me</h3>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className={styles.image}>
            <img className={styles.img} src={img} alt="about" />
          </div>
        </Grid>
        <Grid item xm={12} md={6}>
          <div className={styles.content}>
            <h3 className={styles.h3}>Who is Behind?</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum
            </p>
          </div>
          <div className={styles.socialContainer}>
            <h3 className={styles.h3}>Connect to us</h3>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutComponent;
