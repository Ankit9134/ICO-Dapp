import React from "react";

const Footer = () => {
  const footerList = ["CryptoCash", "How it works", "FAQ", "Contact Us"];

  return (
    <footer>
      <div
        className="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-display="0.2s"
              >
                <a href="#home_section" className="page-scroll">
                  <img src="assets/images/footer_logo.png" alt="logo" />
                </a>
              </div>
              <div>
                <p
                  className="animation"
                  data-animation="animation"
                  data-animation-delay="0.4s"
                >
                  CryptoCash ICO Dapp is your gateway to the world of blockchain
                  investments. Seamlessly participate in Initial Coin Offerings
                  (ICOs) for cutting-edge cryptocurrencies, all within a secure
                  and user-friendly platform. Explore exciting projects, make
                  informed investment decisions, and join the crypto revolution
                  with CryptoCash. Your path to financial innovation starts
                  here!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4
                className="footer_title-border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Quick Links
              </h4>
              <ul className="footer_link">
                {footerList.map((list, i) => (
                  <li
                    key={i}
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay={`${i + 1}s`}
                  >
                    <a href="#">{list}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div className="newsletter_form">
                <h4 className="footer_title border_title animation">
                  Newsletter
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Subscribe to our newsletter to receive news on update.
                </p>
                <form
                  action="#"
                  className="subscribe_form animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input-rounded"
                  />
                  <button
                    type="submit"
                    className=" btn-default btn-radius"
                    name="submit"
                    value="Submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                Copyright &copy; 2023 All Rights reserved by CryptoCash
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list_none footer_menu">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
