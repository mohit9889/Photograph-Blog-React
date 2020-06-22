import React from "react";
import styles from "./Home.module.css";
//import components
import {
  CarouselComponent,
  ServicesComponent,
  GalleryComponent,
  AboutComponent,
  FooterComponent
} from "../../components";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <CarouselComponent />
        <div className={styles.innerContainer}>
          <ServicesComponent />
          <GalleryComponent />
          <AboutComponent />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
