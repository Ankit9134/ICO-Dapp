import React from "react";
import {
  FaAirbnb,
  FaDiscord,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact_section small_pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="title-default_light title_border text-center">
              <h4>Get In Touch</h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center small_space">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div className="bg_light_dark contact_box_s2 animation">
              <div className="contact_title">
                <h5 className="animation" data-animation="fadeInUp">
                  Contact Us
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  odio veritatis distinctio quis ad iusto placeat facilis
                  dolorem non consequuntur, perferendis asperiores, voluptate
                  blanditiis quas ab vero harum sapiente consectetur!
                </p>
              </div>
              <ul className="list_none contact_info mt-margin">
                <li className="animation">
                  <div className="contact_detail">
                    <span>Address</span>
                    <p>
                      XYZ Fake Street, 123 Sector, United Arab Emirates, Dubai
                    </p>
                  </div>
                </li>
                <li className="animation">
                  <div className="contact_detail">
                    <span>Phone</span>
                    <p>
                      <a href="tel:+1234567890">+971-50-1234567</a>
                    </p>
                  </div>
                </li>
                <li className="animation">
                  <div className="contact_detail">
                    <span>Email</span>
                    <p>
                      <a href="mailto:" className="text_break">
                        cryptocash@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="contact_follow pt-2 pt-md-4">
                <span className="text-uppercase animation">Follow Us On :</span>
                <ul className="list_none social_icon">
                  <li className="animation">
                    <a href="#" className="icon_color">
                      <FaFacebookF className="icon_color" />
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#" className="icon_color">
                      <FaInstagram className="icon_color" />
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#" className="icon_color">
                      <FaLinkedin className="icon_color" />
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#" className="icon_color">
                      <FaTwitter className="icon_color" />
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#" className="icon_color">
                      <FaYoutube className="icon_color" />
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#" className="icon_color">
                      <FaDiscord className="icon_color" />
                    </a>
                  </li>
                  <li className="animation">
                    <a href="#" className="icon_color">
                      <FaDribbble className="icon_color" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="pt-4 pt-md-0 animation">
              <form
                action="
              #"
                method="post"
                className="field_form"
                name="enq"
              >
                <div className="form-group col-md-12 animation">
                  <input
                    type="text"
                    required="required"
                    id="name"
                    placeholder="Enter Your Name"
                    className="form-control"
                    name="name"
                  />
                </div>
                <div className="form-group col-md-12 animation">
                  <input
                    type="email"
                    required="required"
                    id="email"
                    placeholder=" Enter Your Email"
                    className="form-control"
                    name="name"
                  />
                </div>
                <div className="form-group col-md-12 animation">
                  <input
                    type="text"
                    required="required"
                    id="subject"
                    placeholder="Subject"
                    className="form-control"
                    name="subject"
                  />
                </div>
                <div className="form-group col-md-12 animation">
                  <textarea
                    className="form-control"
                    name="description"
                    id="description"
                    rows="10"
                    placeholder="Message"
                    required="required"
                  >
                    Message
                  </textarea>
                </div>
                <div className="col-md-12 text-center animation">
                  <button
                    type="submit"
                    title="Submit Your Message!"
                    className="btn btn-default btn-radius btn-block"
                    name="submit"
                    value="Submit"
                  >
                    Submit Your Message!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
