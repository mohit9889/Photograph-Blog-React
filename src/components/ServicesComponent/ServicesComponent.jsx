import React from "react";
import styles from "./Services.module.css";
import Grid from "@material-ui/core/Grid";

//images
import video from "../../images/video-solid.png";
import image from "../../images/image-solid.png";
import camera from "../../images/camera-solid.png";

const ServicesComponent = () => {
  const items = [
    {
      id: "1",
      img: video,
      heading: "Video Camera",
      para:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
    },
    {
      id: "2",
      img: image,
      heading: "Scenic",
      para:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
    },
    {
      id: "3",
      img: camera,
      heading: "Camera",
      para:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
    }
  ];

  return (
    <div className={styles.services}>
      <h3 className={styles.h3}>This is our services</h3>
      <Grid className={styles.grid} container spacing={3}>
        {items.map((item, index) => (
          <Grid key={index} item sm={5} md={3} xs={12}>
            <div key={item.id} className={styles.serviceCard}>
              <div className={styles.imgDiv}>
                <img className={styles.img} src={item.img} alt="video camera" />
              </div>
              <h4 className={styles.h4}>{item.heading}</h4>
              <p className={styles.p}>{item.para}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ServicesComponent;
