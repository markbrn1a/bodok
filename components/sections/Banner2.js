import Image from "next/image";
import Link from "next/link";

export default function Banner2({ content }) {
  return (
    <>
      <section className="banner-area-two parallax">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="banner-img-wrap">
                <Image
                  width={500}
                  height={500}
                  src={content.bannerImage.src}
                  alt={content.bannerImage.alt}
                />
                <div className="overly-text">
                  <span className="title">{content.bannerTitle}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-content-two">
                <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                  {content.subTitle}
                </span>
                <h1 className="title wow fadeInUp" data-wow-delay=".4s">
                  {content.mainTitle}
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  {content.description}
                </p>
                <Link
                  href="/project"
                  className="btn wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  {content.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-wrap">
          <ul className="list-wrap">
            {content.shapes.map((shape, index) => (
              <li key={index}>
                <Image
                  width={50}
                  height={50}
                  src={shape.src}
                  alt={shape.alt}
                  className={
                    index === 4
                      ? "wow fadeInLeft"
                      : index === 6
                      ? "rotateme"
                      : "layer"
                  }
                  data-depth={index < 4 ? "0.3" : index === 4 ? "0.2" : "0.1"}
                  data-wow-delay={index === 4 ? ".4s" : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
