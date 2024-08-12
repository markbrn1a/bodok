"use client";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
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
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export default function Brand2() {
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
      <div className="brand-area-two py-8">
        <div className="container mx-auto">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <h6 className="brand-title text-xl font-semibold mb-4">
                Trusted by big brands
              </h6>
              <Slider {...settings} className="row brand-active-two">
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
      </div>
    </>
  );
}
