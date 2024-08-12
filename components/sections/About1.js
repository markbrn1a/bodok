import Link from "next/link";

export default function About1({ content }) {
  return (
    <>
      <section className="about-area pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="about-img-wrap">
                <img
                  src={content.about.images[0]}
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                />
                <img
                  src={content.about.images[1]}
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                />
                <div className="about-experiences-wrap">
                  {content.about.experiences.map((experience, index) => (
                    <div key={index} className="experiences-item">
                      <div className="icon">
                        <img src={experience.icon} alt="" />
                      </div>
                      <div className="content">
                        <h6 className="title">{experience.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    {content.about.sectionTitle.subTitle}
                  </span>
                  <h2 className="title tg-element-title">
                    {content.about.sectionTitle.title}
                  </h2>
                </div>
                <p>{content.about.description}</p>
                <div className="about-list">
                  <ul className="list-wrap">
                    {content.about.listItems.map((item, index) => (
                      <li key={index}>
                        <i className="fas fa-check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={content.about.link.href} className="btn">
                  {content.about.link.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
