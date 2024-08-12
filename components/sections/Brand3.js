"use client";
import Slider from "react-slick";
const brandSlider = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export default function Brand3() {
  const services = [
    "TETŐFEDÉS",
    "TETŐJAVÍTÁS",
    "BÁDOGOZÁS",
    "ÁCSMUNKÁK",
    "TETŐSZIGETELÉS",
    "TETŐMOSÁS",
  ];

  return (
    <>
      <div className="inner-brand-area pt-120 pb-120">
        <div className="container">
          <Slider {...brandSlider} className="row brand-active-three">
            {services.map((service, index) => (
              <div key={index} className="col-12">
                <div className="brand-item text-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 drop-shadow-md">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
