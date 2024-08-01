import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text_md_center">
              <img
                src="assets/images/about_img2.png"
                alt="about_img"
                data-animation="zoomIn"
                data-delay="0.2s"
                className="animation"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-delay="0.2s"
              >
                About Us
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-delay="0.4s"
              >
                We are a team of passionate people whose goal is to improve
                everyone's life through disruptive products. We build great
                products to solve your business problems.
              </p>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-delay="0.4s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sunt quae doloribus illo dolore suscipit cupiditate
                quos, sapiente facere labore modi possimus porro iusto quis
                placeat provident sequi aspernatur dicta. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Eius fuga animi accusamus?
                Nobis, necessitatibus placeat, animi id ipsum beatae, accusamus
                qui voluptate fuga earum nostrum error eligendi laudantium
                repellendus consequuntur.
              </p>
            </div>
            <a
              href="/"
              className="btn btn-default btn-radius video animation"
              data-animation="fadeInUp"
              data-delay="0.8s"
            >
              Let's Start <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
