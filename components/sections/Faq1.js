"use client";
import Image from "next/image";
import { useState } from "react";

export default function Faq1({ content }) {
  const faq1Page = content.faq1Page;
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
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
      <section
        className="faq-area faq-bg"
        style={{
          backgroundImage: `url(${"/assets/img/bg/faq_bg.jpg"})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">{faq1Page.sectionSubtitle}</span>
                <h2 className="title">{faq1Page.sectionTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
              <div className="faq-img-wrap">
                <Image
                  width={200}
                  height={200}
                  src="/assets/img/images/faq_img01.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                />
                <Image
                  width={200}
                  height={200}
                  src="/assets/img/images/faq_img02.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                />
                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                  <h2 className="title">FAQ</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-wrap">
                <div className="accordion">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(1)}
                    >
                      <button
                        className={
                          isActive.key == 1
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        {faq1Page.faqTitle1}
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 1
                          ? "accordion-collapse   show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>{faq1Page.faqContent1}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(2)}
                    >
                      <button
                        className={
                          isActive.key == 2
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        {faq1Page.faqTitle2}
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 2
                          ? "accordion-collapse   show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>{faq1Page.faqContent2} asd</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(3)}
                    >
                      <button
                        className={
                          isActive.key == 3
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        {faq1Page.faqTitle3}
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 3
                          ? "accordion-collapse   show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>{faq1Page.faqContent3}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(4)}
                    >
                      <button
                        className={
                          isActive.key == 4
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        {faq1Page.faqTitle4}
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 4
                          ? "accordion-collapse   show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>{faq1Page.faqContent4}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(5)}
                    >
                      <button
                        className={
                          isActive.key == 5
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        {faq1Page.faqTitle5}
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 5
                          ? "accordion-collapse   show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>{faq1Page.faqContent5}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
