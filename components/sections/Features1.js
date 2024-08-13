import Image from "next/image";
import Link from "next/link";

export default function Features1({ content }) {
  return (
    <>
      <section className="features-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            {content.features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="features-item wow fadeInUp"
                  data-wow-delay={`${0.2 * (index + 1)}s`}
                >
                  <div className="features-item-inner">
                    <div className="features-content">
                      <h4 className="title">{feature.title}</h4>
                      <p>{feature.description}</p>
                      <Link href={feature.link.href} className="link-btn">
                        <i className="fas fa-arrow-right" /> {feature.link.text}
                      </Link>
                    </div>
                    <div className="features-icon">
                      <Image width={50} height={50} src={feature.icon} alt="" />
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
