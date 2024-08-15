import Image from "next/image";
import Link from "next/link";

export default function Project3({ content }) {
  return (
    <>
      <section className="project-area-three">
        <div
          className="project-bg-two"
          style={{
            backgroundImage: `url(${content.projectSection.backgroundImage})`,
          }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center white-title mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {content.projectSection.sectionTitle.subTitle}
                </span>
                <h2 className="title tg-element-title">
                  {content.projectSection.sectionTitle.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {content.projectSection.projects.map((project, index) => (
              <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href={project.link}>
                      <Image
                        width={200}
                        height={200}
                        src={project.image.src}
                        alt={project.image.alt}
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>{project.category}</span>
                    <h2 className="title">
                      <Link href={project.link}>{project.title}</Link>
                    </h2>
                    <Link href={project.link} className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="learn-more-btn text-center mt-25">
            <Link
              href={content.projectSection.learnMoreLink.link}
              className="btn"
            >
              {content.projectSection.learnMoreLink.text}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
