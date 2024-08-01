import React from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banner = ({ transferNativeToken }) => {
  return (
    <section
      id="home_section"
      className="section_banner bg_black_dark"
      data-zindex="1"
      data-parallax="scroll"
      data-image-src="assets/images/banner_bg2.png"
    >
      <div className="banner_effect">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
              <div className="banner_text_s2 text_md_center">
                <h1
                  className="animation text-white"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  <strong>Bitcoin</strong>is peer to peer innovative
                  <strong>network</strong>
                </h1>
                <h5
                  className="animation presale_txt text-white"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  Token Pre sale is{" "}
                  <mark className="gradient_box">Live Now</mark>
                </h5>
                <div
                  className="btn_group pt-2 pb-3 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.5s"
                >
                  <a
                    href="#whitepaper"
                    className="btn btn-default btn-radius nav-link content-popup"
                    // id="whitepaper"
                  >
                    Whitepaper
                    <BsArrowRight />
                  </a>
                  <a href="#token" className="btn btn-border btn-radius">
                    Buy Token Now! <BsArrowRight />
                  </a>

                  {/* <a
                    className="btn btn-border btn-radius"
                    onClick={() => transferNativeToken()}
                  >
                    Transfer Token{" "}
                  </a> */}
                </div>
                <span
                  className="text-white icon-title animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
                >
                  We accept
                </span>
                <ul className="list_none currency_icon">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    <span className="new_icon_style">
                      <BsCurrencyBitcoin className="new_font_size" />
                    </span>
                    <span>Bitcoin</span>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    <span className="new_icon_style">
                      <FaEthereum className="new_font_size" />
                    </span>
                    <span>Ethereum</span>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    <span className="new_icon_style">
                      <SiLitecoin className="new_font_size" />
                    </span>
                    <span>Litecoin</span>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    <span className="new_icon_style">
                      <SiRipple className="new_font_size" />
                    </span>
                    <span>Ripple</span>
                  </li>
                </ul>

                <div className="team_pop mfp-hide" id="whitepaper">
                  <div className="row m-0">
                    <div className="col-md-7">
                      <div className="pt-3 pb-3">
                        <div className="title_dark title_border">
                          <h4>Download Whitepaper</h4>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Atque quos commodi repudiandae corrupti
                            accusamus cumque mollitia vel numquam. Saepe nemo,
                            blanditiis dolorum fuga sint necessitatibus
                            molestiae numquam voluptatum quasi dolorem omnis
                            dignissimos maiores doloremque nam temporibus magnam
                            sed maxime quae aspernatur amet. Cum nisi hic sequi
                            iure, ratione nesciunt illo possimus, voluptas quos
                            repellendus officiis, iste nostrum voluptatibus
                            reprehenderit dolores tempore rerum eos corrupti
                            magni earum quia laudantium ut. Officia, sequi
                            voluptate! Quaerat possimus optio quibusdam totam
                            adipisci nisi cupiditate veniam assumenda minima
                            reiciendis nesciunt, itaque id repellendus quas
                            vitae rerum mollitia ullam ex! Odio officiis
                            repellendus molestiae incidunt omnis.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Assumenda corrupti maxime quo hic
                            reprehenderit, ea dolores totam eius libero
                            doloremque nulla molestias magni facilis quos iusto
                            eos, mollitia repellat praesentium cupiditate aut
                            ipsum ex amet. Excepturi voluptas autem amet in
                            perspiciatis nisi voluptatum, quibusdam, totam
                            necessitatibus cumque a alias libero?
                          </p>
                          <a href="#" className="btn btn-default btn-radius">
                            <AiOutlineCloudDownload /> Download Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img
                        src="assets/images/whitepaper.png"
                        alt="whitepaper download"
                        className="pt-3 pb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
              data-animation="fadeInRight"
              data-animation-delay="1.1s"
            >
              <img src="assets/images/banner_img2.png" alt="banner_img2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
