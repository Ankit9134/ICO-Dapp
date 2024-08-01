import React, { useState } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);

  const percentage = (tokenSale?.tokenSold / tokenSale?.tokenSaleBalance) * 100;
  const showPercentage = percentage.toString();

  return (
    <section
      className="section_token token_sale bg_light_dark"
      id="token"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/token_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border title_center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                Token Sale
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                ad aut, quae possimus saepe laboriosam vitae, eos, laudantium
                provident voluptates maiores sint? Minima ipsam voluptatum
                voluptate voluptatem numquam laborum quod laudantium debitis
                natus et esse, nostrum libero nesciunt.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
              >
                Starting Time
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                Nov 17 2023 (Mon 12:00 AM)
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
              >
                Ending Time
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                Feb 05 2024 (Mon 12:00 PM)
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
              >
                Token Price
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                1 ETH = 4 DAPP, 1 BTC = 19 DAPP
              </p>
            </div>
          </div>
          <div className="token_sale res_md_md_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
            <div
              className="animation tk_countdown text-center token_countdown_bg"
              data-animation="fadeInUp"
              data-animation-delay="1.4s"
            >
              <div className="form-group col-md-12 animation">
                <div className="field_form">
                  <div className="row">
                    <input
                      type="number"
                      required
                      placeholder="1"
                      id="first-name"
                      min={1}
                      className="form-control "
                      onChange={(e) => setNToken(e.target.value)}
                      name="token"
                    />
                  </div>
                </div>
              </div>
              <div className="tk_counter_inner">
                <div
                  className="progress animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.5s"
                >
                  <div
                    className="progress-bar progress-bar-striped gradient"
                    role="progressbar"
                    aria-valuenow={`${percentage}`}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: `${percentage}` }}
                  >
                    {showPercentage.slice(0.4)}%
                  </div>
                  <span className="progress_label bg-white inline_style_1">
                    <strong>{tokenSale?.tokenSold}DAPP</strong>
                  </span>
                  <span className="progress_label bg-white inline_style_2">
                    <strong>{tokenSale?.tokenSaleBalance}DAPP</strong>
                  </span>
                  <span className="progress_min_val">Sale Raised</span>
                  <span className="progress_max_val">Sale Goal</span>
                </div>
                <a
                  onClick={() => buyToken(nToken)}
                  className="btn btn-default btn-radius animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.6s"
                >
                  Buy Token <BsArrowRight />
                </a>

                <ul className="icon_list list_none d-flex justify-content-center">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.7s"
                  >
                    <BsCurrencyBitcoin />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.7s"
                  >
                    <FaEthereum />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.7s"
                  >
                    <SiLitecoin />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.7s"
                  >
                    <SiRipple />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
