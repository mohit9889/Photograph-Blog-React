import React, { useEffect, useState } from "react";
import styles from "./BlogRead.module.css";
import ImagePage from "../../components/BlogReadComponent/ImagePage/ImagePage";
import ContentPage from "../../components/BlogReadComponent/ContentPage/ContntPage";
import { TimelineMax, Power2 } from "gsap";

//image
import img from "../../images/blogRead-img.jpg";

const BlogReadScreen = () => {
  const [isClick, setClickState] = useState(false);

  // useEffect(() => {
  //   var tl = new TimelineMax();
  //   tl.staggerFrom(
  //     ".heading",
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
  // }, []);

  const readButtonFunction = () => {
    setClickState(true);
  };

  const backButtonFunction = () => {
    setClickState(false);
  };

  return (
    <div className={styles.blogRead_container}>
      {!isClick ? (
        <ImagePage img={img} click={readButtonFunction} />
      ) : (
        <ContentPage click={backButtonFunction} />
      )}
    </div>
  );
};

export default BlogReadScreen;
