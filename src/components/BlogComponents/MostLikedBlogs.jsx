import React from "react";

const MostLikedBlogs = props => {
  return (
    <div className="col-md-auto">
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quasi?
      </p>
    </div>
  );
};

export default MostLikedBlogs;
