import React from "react";
import styles from "./Photograph.module.css";
//components
import Sidebar from "../../components/PhotographComponent/Sidebar/Sidebar";
import Image from "../../components/PhotographComponent/Image/Image";

//images
import img1 from "../../images/gallery-img1.jpg";
import img2 from "../../images/gallery-img2.jpg";
import img3 from "../../images/gallery-img3.jpg";
import img4 from "../../images/gallery-img4.jpg";
import img5 from "../../images/gallery-img5.jpg";
import img6 from "../../images/gallery-img6.jpg";
import img7 from "../../images/gallery-img7.jpg";
import img8 from "../../images/gallery-img8.jpg";
import img9 from "../../images/gallery-img9.jpg";
import img10 from "../../images/gallery-img10.jpg";
import img11 from "../../images/gallery-img11.jpg";
import img12 from "../../images/gallery-img12.jpg";

const PhotographScreen = () => {
  return (
    <div className={styles.outside_gallery_container}>
      <div className={styles.gallery_container}>
        <Sidebar />

        <div className={styles.gallery_images}>
          <div className={styles.image_holder}>
            <Image img={img1} />
            <Image img={img2} />
            <Image img={img3} />
          </div>

          <div className={styles.image_holder}>
            <Image img={img4} />
            <Image img={img5} />
            <Image img={img6} />
          </div>

          <div className={styles.image_holder}>
            <Image img={img7} />
            <Image img={img8} />
            <Image img={img9} />
          </div>

          <div className={styles.image_holder}>
            <Image img={img10} />
            <Image img={img11} />
            <Image img={img12} />
          </div>
        </div>
      </div>

      <div id="myModal" className={styles.modal}>
        <span className={styles.close}>&times;</span>
        <img className={styles.modal_content} id="img01" alt="" />
      </div>
    </div>
  );
};

export default PhotographScreen;
