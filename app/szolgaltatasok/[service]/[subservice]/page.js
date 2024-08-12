import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
// import content from "@/data/service_details_content.json"; // Assuming the JSON file is saved in the "data" folder
import services from "@/data/services.json"; // Assuming the JSON file is saved in the "data" folder
import Image from "next/image";
import ServiceForm from "@/components/elements/ServicesForm";

export default function ServiceDetails({ params }) {
  const content = services.find((service) =>
    params.subservice
      ? service.slug === params.subservice
      : service.slug === params.service
  );
  return (
    <>
      <div>
        <section className="services-details-area pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="services-details-wrap">
                  <div className="services-details-thumb">
                    {/* <img
                      src="/assets/img/services/services_details01.jpg"
                      alt=""
                    /> */}
                    <Image
                      src={content.images.main?.src}
                      alt={content.images.main?.alt}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="services-details-content">
                    <h2 className="title">{content.servicesDetails.title}</h2>
                    <p>{content.servicesDetails.description1}</p>
                    <div className="services-process-wrap">
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                          <div className="services-process-img">
                            {/* <img
                              src="/assets/img/services/sp_img01.jpg"
                              alt=""
                            /> */}
                            <Image
                              src={content.images.detail_one?.src}
                              alt={content.servicesDetails.title}
                              width={300}
                              height={600}
                            />
                            {/* <img
                              src="/assets/img/services/sp_img02.jpg"
                              alt=""
                            /> */}
                            <Image
                              src={content.images.detail_two?.src}
                              alt={content.servicesDetails.title}
                              width={300}
                              height={600}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="services-process-content">
                            <h2 className="title">
                              {content.servicesDetails.serviceProcess.title}
                            </h2>
                            <ul className="list-wrap">
                              {content.servicesDetails.serviceProcess.steps.map(
                                (step, index) => (
                                  <li key={index}>
                                    <div className="services-process-item">
                                      <div className="icon">
                                        <img src={step.icon} alt="" />
                                      </div>
                                      <div className="content">
                                        <h4 className="title">{step.title}</h4>
                                        <p>{step.description}</p>
                                      </div>
                                    </div>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="title-two">
                      {content.servicesDetails.conclusionTitle}
                    </h2>
                    <p>{content.servicesDetails.description2}</p>
                    <div className="service-benefits-wrap">
                      <div className="row">
                        <div className="col-lg-7 order-0 order-lg-2">
                          <div className="benefits-img">
                            <Image
                              src={content.images.detail_three?.src}
                              alt={content.servicesDetails.title}
                              width={250}
                              height={300}
                            />
                            <Image
                              src={content.images.detail_four?.src}
                              alt={content.servicesDetails.title}
                              width={250}
                              height={300}
                            />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="benefits-content">
                            <h2 className="title">
                              {content.servicesDetails.serviceBenefits.title}
                            </h2>
                            <p>
                              {
                                content.servicesDetails.serviceBenefits
                                  .description
                              }
                            </p>
                            <ul className="list-wrap">
                              {content.servicesDetails.serviceBenefits.benefitsList.map(
                                (benefit, index) => (
                                  <li key={index}>
                                    <i className="fas fa-check-circle" />
                                    {benefit}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <aside className="services-sidebar">
                  <div className="services-widget">
                    <h4 className="widget-title">
                      {content.servicesSidebar.allServicesTitle}
                    </h4>
                    <div className="our-services-list">
                      <ul className="list-wrap">
                        {content.servicesSidebar.servicesList.map(
                          (service, index) => (
                            <li key={index}>
                              <Link href={service.link}>
                                {service.name}
                                <i className="fas fa-arrow-right" />
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="services-widget widget-bg"
                    data-background="/assets/img/services/sw_bg.jpg"
                  >
                    <h4 className="widget-title">
                      {content.servicesSidebar.getFreeQuoteTitle}
                    </h4>
                    <ServiceForm content={content} />
                  </div>
                  <div className="services-widget">
                    <h4 className="widget-title">
                      {content.servicesSidebar.brochuresTitle}
                    </h4>
                    <div className="download-wrap">
                      {content.servicesSidebar.brochuresList.map(
                        (brochure, index) => (
                          <Link
                            href={brochure.link}
                            download
                            target="_blank"
                            key={index}
                          >
                            <i className={brochure.icon} />
                            {brochure.text}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* services-details-area-end */}
        {/* brand-area */}
        <Brand3 />
      </div>
    </>
  );
}