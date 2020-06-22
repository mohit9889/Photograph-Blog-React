import React from "react";
import styles from "./Carousel.module.css";
import { Carousel } from "react-bootstrap";

//images
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const CarouselComponent = () => {
  const items = [
    {
      id: "1",
      url: "../../images/img1.jpg",
      img: img1,
      heading: "First slide label",
      para: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      id: "2",
      url: "../../images/img2.jpg",
      img: img2,
      heading: "Second slide label",
      para: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      id: "3",
      url: "../../images/img3.jpg",
      img: img3,
      heading: "Third slide label",
      para: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
  ];

  return (
    <div>
      <Carousel className={styles.carousel}>
        {items.map(item => (
          <Carousel.Item key={item.id}>
            <img className={styles.image} src={item.img} alt="first slide" />
            <Carousel.Caption className={styles.captionText}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
