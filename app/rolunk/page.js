"use clinet";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import textContent from "@/data/about";
import Link from "next/link";
const settings = {
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function About() {
  return (
    <>
      <section className="about-area inner-about-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="about-img-wrap">
                <img
                  src="/assets/img/images/about_img01.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                />
                <img
                  src="/assets/img/images/about_img02.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                />
                <div className="about-experiences-wrap">
                  <div className="experiences-item">
                    <div className="icon">
                      <img src="/assets/img/icon/about_icon01.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">
                        We have more than 10 years of experiences
                      </h6>
                    </div>
                  </div>
                  <div className="experiences-item">
                    <div className="icon">
                      <img src="/assets/img/icon/about_icon02.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">
                        We use professional and experienced person
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-25">
                  <span className="sub-title">About Our Company</span>
                  <h2 className="title">{textContent.aboutSection.title}</h2>
                </div>
                <p>{textContent.aboutSection.description}</p>
                <div className="about-list">
                  <ul className="list-wrap">
                    {textContent.aboutSection.list.map((item, index) => (
                      <li key={index}>
                        <i className="fas fa-check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/about" className="btn">
                  {textContent.aboutSection.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-area-end */}
      {/* work-area */}
      <section className="work-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Working Plan</span>
                <h2 className="title">{textContent.workSection.title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {textContent.workSection.steps.map((step, index) => (
              <div className="col-xl-3 col-md-6" key={index}>
                <div className="work-item">
                  <div className="work-thumb">
                    <img
                      src={`/assets/img/images/work_img0${index + 1}.png`}
                      alt=""
                    />
                    <h4 className="number">{step.number}</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* work-area-end */}
      {/* history-area */}
      <section className="history-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="history-img-wrap">
                <ul className="list-wrap">
                  <li>
                    <img src="/assets/img/images/history_img01.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/assets/img/images/history_img02.jpg" alt="" />
                    <VideoPopup />
                  </li>
                  <li>
                    <img src="/assets/img/images/history_img03.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history-content">
                <div className="section-title mb-20">
                  <span className="sub-title">Our Roofing History</span>
                  <h2 className="title">{textContent.historySection.title}</h2>
                </div>
                <p>{textContent.historySection.description}</p>
                <div className="history-list">
                  <ul className="list-wrap">
                    {textContent.historySection.list.map((item, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
