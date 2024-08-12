import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    imgSrc: "/assets/img/project/h3_project_img01.jpg",
    title: "Web Application",
    category: "Product Design",
  },
  {
    id: 2,
    imgSrc: "/assets/img/project/h3_project_img02.jpg",
    title: "Web Application",
    category: "Product Design",
  },
  {
    id: 3,
    imgSrc: "/assets/img/project/h3_project_img03.jpg",
    title: "Web Application",
    category: "Product Design",
  },
  {
    id: 4,
    imgSrc: "/assets/img/project/h3_project_img04.jpg",
    title: "Web Application",
    category: "Product Design",
  },
  {
    id: 5,
    imgSrc: "/assets/img/project/h3_project_img05.jpg",
    title: "Web Application",
    category: "Product Design",
  },
  {
    id: 6,
    imgSrc: "/assets/img/project/h3_project_img06.jpg",
    title: "Web Application",
    category: "Product Design",
  },
];

export default function Project() {
  return (
    <>
      <section className="inner-project-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Our Projects</span>
                <h2 className="title">Our Latest Projects</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href="/project-details">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        width={200}
                        height={200}
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>{project.category}</span>
                    <h2 className="title">
                      <Link href="/project-details">{project.title}</Link>
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
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
