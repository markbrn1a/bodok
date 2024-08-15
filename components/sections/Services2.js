import Image from "next/image";
import Link from "next/link";

export default function Services2({ content }) {
  return (
    <>
      <section className="services-area-two pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title white-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {content.servicesSection.sectionTitle.subTitle}
                </span>
                <h2 className="title tg-element-title">
                  {content.servicesSection.sectionTitle.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {content.servicesSection.servicesItems.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className="services-item-two">
                  <div className="services-thumb-two">
                    <Link href={item.link}>
                      <Image
                        width={300}
                        height={300}
                        src={item.image.src}
                        alt={item.image.alt}
                      />
                    </Link>
                  </div>
                  <div className="services-content-two">
                    <div className="icon">
                      <Image
                        width={50}
                        height={20}
                        src={item.icon.src}
                        alt={item.icon.alt}
                      />
                    </div>
                    <div className="content">
                      <h2 className="title">
                        <Link href={item.link}>{item.title}</Link>
                      </h2>
                      <p>{item.description}</p>
                    </div>
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
