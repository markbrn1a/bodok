"use client";
import Image from "next/image";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial1({ content }) {
  return (
    <>
      <section className="testimonial-area pt-115 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
              <div className="testimonial-img">
                <Image
                  width={500}
                  height={500}
                  src={content.testimonialSection.image}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    {content.testimonialSection.sectionTitle}
                  </span>
                  <h2 className="title tg-element-title">
                    {content.testimonialSection.sectionSubtitle}
                  </h2>
                </div>
                <Slider {...settings} className="testimonial-active">
                  {content.testimonialSection.testimonials.map(
                    (testimonial, index) => (
                      <div key={index} className="testimonial-item">
                        <div className="testimonial-icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="testimonial-content">
                          <p>{testimonial.quote}</p>
                        </div>
                        <div className="testimonial-avatar">
                          <div className="avatar-thumb">
                            <Image
                              width={50}
                              height={50}
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                          </div>
                          <div className="avatar-content">
                            <h6 className="title">{testimonial.name}</h6>
                            <p>{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
