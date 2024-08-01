import React from "react";

const Distribution = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 res-md-mb-40">
          <div className="title_default_light title_border title_center">
            <h4
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              Token Distribution
            </h4>
          </div>
          <div
            className="lg_pt_20 res_sm_pt_0 text-center animation"
            data-animation="fadeInRight"
            data-animation-delay="0.4s"
          >
            <img
              src="assets/images/sale-proceeds3.png"
              alt="sale proceeds"
              className="sale-proceeds3"
            />
          </div>
          <div className="divider small_divider">
            <ul className="list_none list_chart text-center">
              <li>
                <span className="chart_bx color1"></span>
                <span>Advisers</span>
              </li>
              <li>
                <span className="chart_bx color2"></span>
                <span>Team</span>
              </li>
              <li>
                <span className="chart_bx color3"></span>
                <span>Public</span>
              </li>
              <li>
                <span className="chart_bx color4"></span>
                <span>Pre Sale</span>
              </li>
              <li>
                <span className="chart_bx color5"></span>
                <span>Marketing</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Distribution
              </h4>
            </div>
          </div>
          <div
            className="lg_pt_20 res_sm_pt_0 text-center animation"
            data-animation="fadeInRight"
            data-animation-delay="0.4s"
          >
            <img src="assets/images/distribution3.png" alt="sale proceeds" />
          </div>
          <div className="divider small_divider">
            <ul className="list_none list_chart text-center">
              <li>
                <span className="chart_bx color1"></span>
                <span>ICO Sale</span>
              </li>
              <li>
                <span className="chart_bx color2"></span>
                <span>Team & Advisers</span>
              </li>
              <li>
                <span className="chart_bx color3"></span>
                <span>Investors</span>
              </li>
              <li>
                <span className="chart_bx color4"></span>
                <span>Bug Bounty</span>
              </li>
              <li>
                <span className="chart_bx color5"></span>
                <span>Marketing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;
