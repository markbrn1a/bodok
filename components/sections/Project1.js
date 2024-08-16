"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Project1({ content }) {
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
      <section
        className="project-area project-bg"
        style={{
          backgroundImage: `url(${"/assets/img/bg/project_bg.jpg"})`,
        }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {content.sectionTitle}
                </span>
                <h2 className="title tg-element-title">
                  {content.sectionSubtitle}
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="view-all-btn text-end mb-50">
                <Link href={content.viewAllProjectsLink || ""} className="btn">
                  {content.viewAllProjects}
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {content.projects.map((project, index) => (
                <div
                  key={index}
                  className="project-item wow fadeInUp"
                  data-wow-delay={`.${index + 2}s`}
                  onMouseEnter={() => handleToggle(index + 1)}
                  onMouseLeave={() => handleToggle(index + 1)}
                >
                  <div
                    className="project-thumb"
                    style={{
                      display: `${
                        isActive.key == index + 1 ? "block" : "none"
                      }`,
                    }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={project.image}
                      alt=""
                    />
                  </div>
                  <div className="project-content">
                    <div className="left-side-content">
                      <span>{project.version}</span>
                      <h2 className="title">
                        <Link href={project.detailsLink || ""}>
                          {project.title}
                        </Link>
                      </h2>
                      <p
                        style={{
                          display: `${
                            isActive.key == index + 1 ? "block" : "none"
                          }`,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                    <div className="project-link">
                      <Link href={project.detailsLink || ""}>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
