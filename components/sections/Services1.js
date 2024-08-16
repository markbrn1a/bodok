"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services1({ content }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section className="services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {content.header.subTitle}
                </span>
                <h2 className="title tg-element-title">
                  {content.header.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {content.services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                <div
                  className="services-item wow fadeInUp"
                  data-wow-delay={`.${index * 2 + 2}s`}
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                  onMouseEnter={() => handleToggle(index + 1)}
                  onMouseLeave={() => handleToggle(index + 1)}
                >
                  <div
                    className="services-icon"
                    style={{
                      display: `${isActive.key == index + 1 ? "none" : "flex"}`,
                    }}
                  >
                    <Image width={50} height={50} src={service.icon} alt="" />
                  </div>
                  <div className="services-content">
                    <h2
                      className="title"
                      style={{
                        display: `${
                          isActive.key == index + 1 ? "none" : "block"
                        }`,
                      }}
                    >
                      <Link href={service.link}>{service.title}</Link>
                    </h2>
                    <h2 className="number">{service.number}</h2>
                  </div>
                  <div
                    className="services-overlay-content"
                    style={{
                      display: `${
                        isActive.key == index + 1 ? "block" : "none"
                      }`,
                    }}
                  >
                    <h2 className="title">
                      <Link href={service.link}>{service.title}</Link>
                    </h2>
                    <p>{service.description}</p>
                    <Link href={service.link} className="read-more">
                      ÉRDEKEL <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
