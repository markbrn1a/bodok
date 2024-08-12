"use client";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
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

export default function Brand1() {
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
      <div className="brand-area py-8">
        <div className="container mx-auto">
          <div className="brand-inner">
            <Slider {...settings} className="row brand-active">
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
      </div>
    </>
  );
}
