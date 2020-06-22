import React from "react";
import "./Blog.css";
import history from "../../history";

//components
import LatestBlog from "../../components/BlogComponents/LatestBlog";
import MostLikedBlogs from "../../components/BlogComponents/MostLikedBlogs";
import AllBlogs from "../../components/BlogComponents/AllBlogs";
import Newsletter from "../../components/BlogComponents/Newsletter";
import Footer from "../../components/BlogComponents/Footer";

//images
import img1 from "../../images/blog-img6.jpg";
import img2 from "../../images/blog-img7.jpg";
import img3 from "../../images/blog-img8.jpg";
import img4 from "../../images/blog-img9.jpg";
import img5 from "../../images/blog-img10.jpg";

const BlogScreen = () => {
  const navigateBlogReadScreen = (e, active) => {
    history.push({ pathname: "/BlogReadScreen" });
  };

  return (
    <div className="blog-container">
      <LatestBlog click={navigateBlogReadScreen} img={img1} />

      <div className="most-liked">
        <h1>Most Liked Posts</h1>
        <div className="row">
          <MostLikedBlogs img={img2} />
          <MostLikedBlogs img={img3} />
          <MostLikedBlogs img={img4} />
        </div>
      </div>

      <div className="all-blogs">
        <h1 className="head-line">Read All Blogs</h1>
        <AllBlogs img={img5} />
        <AllBlogs img={img5} />
        <AllBlogs img={img5} />
      </div>

      <Newsletter />

      <Footer />
    </div>
  );
};

export default BlogScreen;
