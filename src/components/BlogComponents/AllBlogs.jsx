import React from "react";

const AllBlogs = props => {
  return (
    <div className="blog-1">
      <div className="row">
        <div className="image col-md-auto">
          <img src={props.img} alt="" />
        </div>

        <div className="content col-md-auto">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sit.
          </h1>
          <p>
            posted by <span>name</span> on <span>January 10, 2020</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            quae eum magni repellat quaerat sit sunt suscipit alias explicabo
            minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime recusandae dolorum vitae similique quisquam dolores,
            dignissimos nisi possimus enim ab ad velit, voluptatum sint sequi.
            Repudiandae nulla quibusdam distinctio dicta.
          </p>
          <div className="button-group">
            <div className="social-icon">
              <a href="#facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="#twitter">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
