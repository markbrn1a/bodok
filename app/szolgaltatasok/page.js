"use client";
import Link from "next/link";
import { useState } from "react";
import Counter2 from "@/components/sections/Counter2";
import text from "@/data/service_page.json";
import ServicePageForm from "@/components/elements/forms/ServicePageForm";
import Form from "@/components/elements/forms/Form";
import { useEffect } from "react";
import Image from "next/image";

export default function Service() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  useEffect(() => {
    // Load background images on component mount
    const appointmentInner = document.querySelector(".appointment-inner");

    if (appointmentInner) {
      appointmentInner.style.backgroundImage =
        "url('/assets/img/bg/appointment_bg.jpg')";
    }
  }, []);
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
      <div>
        <section className="inner-services-area pt-115 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">{text.sectionTitleSubtitle}</span>
                  <h2 className="title">{text.sectionTitleMain}</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {text.services.map((service) => (
                <div key={service.key} className="col-lg-4 col-md-6 col-sm-10">
                  <div
                    className="services-item wow fadeInUp"
                    data-wow-delay={`.${service.key * 0.2}s`}
                    // data-background={service.background}
                    style={{ backgroundImage: `url(${service.background})` }}
                    onMouseEnter={() => handleToggle(service.key)}
                    onMouseLeave={() => handleToggle(service.key)}
                  >
                    <div
                      className="services-icon"
                      style={{
                        display: `${
                          isActive.key === service.key ? "none" : "flex"
                        }`,
                      }}
                    >
                      <Image width={50} height={50} src={service.icon} alt="" />
                    </div>
                    <div className="services-content">
                      <h2
                        className="title"
                        style={{
                          display: `${
                            isActive.key === service.key ? "none" : "block"
                          }`,
                        }}
                      >
                        <Link href="/services-details">{service.title}</Link>
                      </h2>
                      <h2 className="number">{service.number}</h2>
                    </div>
                    <div
                      className="services-overlay-content"
                      style={{
                        display: `${
                          isActive.key === service.key ? "block" : "none"
                        }`,
                      }}
                    >
                      <h2 className="title">
                        <Link href="/services-details">
                          {service.overlayTitle}
                        </Link>
                      </h2>
                      <p>{service.overlayText}</p>
                      <Link href="/services-details" className="read-more">
                        {service.readMoreText}{" "}
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="area-bg">
          <div
            className="area-background-img jarallax"
            style={{
              backgroundImage: `url(${"/assets/img/bg/area_bg01.jpg"})`,
            }}
          />
          <Counter2 />
          <section className="appointment-area pt-115">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title white-title mb-60">
                    <span className="sub-title">
                      {text.appointmentTitleSubtitle}
                    </span>
                    <h2 className="title">{text.appointmentTitleMain}</h2>
                  </div>
                </div>
              </div>
              <div
                className="appointment-inner"
                style={{
                  backgroundImage: `url(${"/assets/img/bg/appointment_bg.jpg"})`,
                }}
              >
                <div className="row">
                  <div className="col-xl-7">
                    <div className="appointment-form">
                      <Form text={text} />
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="appointment-img">
                      <Image
                        width={500}
                        height={500}
                        src="/assets/img/images/appointment_img.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="support-area pt-115 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              {text.supportItems.map((item, index) => (
                <div key={index} className="col-xl-4 col-md-6">
                  <div className="support-item">
                    <div className="support-icon">
                      <Image width={50} height={50} src={item.icon} alt="" />
                    </div>
                    <div className="support-content">
                      <h4 className="title">{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
