import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      description:
        "We store the vast majority of the digital assets in secure offline storage. We take security seriously.",
    },
    {
      title: "Exchange Service",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione molestiae illo totam libero harum ab ut fuga dolorum similique.",
    },
    {
      title: "Mobile App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione molestiae illo totam libero harum ab ut fuga dolorum similique.",
    },
    {
      title: "Investment Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione molestiae illo totam libero harum ab ut fuga dolorum similique.",
    },
    {
      title: "Global Coverage",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione molestiae illo totam libero harum ab ut fuga dolorum similique.",
    },
    {
      title: "Protocol Support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione molestiae illo totam libero harum ab ut fuga dolorum similique.",
    },
  ];

  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align_items_center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border title_center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ratione molestiae illo totam libero harum ab ut fuga dolorum
                similique. Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 1}s`}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>{" "}
            </div>
          ))}

          <div />
        </div>
      </div>
    </section>
  );
};

export default Service;
