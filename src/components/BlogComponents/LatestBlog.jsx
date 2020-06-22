import React from "react";

const LatestBlog = props => {
  return (
    <div className="latest-blog">
      <div className="row">
        <div className="image col-md-auto">
          <img src={props.img} alt="" />
        </div>

        <div className="content col-md-auto">
          <p className="category">
            FEAUTURED <span className="dot" /> ARCHITECTURE
          </p>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p className="tagline">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            voluptatum hic ipsa aliquam quibusdam officia?
          </p>
          <button onClick={props.click}>
            Read More
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
