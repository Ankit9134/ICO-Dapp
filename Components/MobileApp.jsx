import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";

const MobileApp = () => {
  return (
    <section
      id="mobileapp"
      className="bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/app_bg.png"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="title_default_light title_border text_md_center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Download Our App Now
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium recusandae harum suscipit explicabo amet sed laborum
                illo, non, voluptatem atque earum? Voluptate voluptatibus esse
                nostrum animi cupiditate quidem fuga quisquam? Lorem ipsum dolor
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis reiciendis laudantium, necessitatibus quam, culpa
                pariatur autem sunt ipsa placeat voluptatum vel, quisquam
                maiores. Ducimus labore maxime laborum natus!
              </p>
            </div>
            <div className="btn_group text_md_center animation">
              <a className="btn btn-default btn-radius">
                <AiFillAndroid className="new_font_size" /> Google Play Store
              </a>
              <a className="btn btn-default btn-radius">
                <IoLogoApple className="new_font_size" /> App Store
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="res_md_mt_50 res_sm_mt_30 text-center animation">
              <img
                src="assets/images/mobile_app3.png"
                alt="mobile_app"
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
