import Link from "next/link";
import { useEffect } from "react";

export default function Breadcrumb({ breadcrumbTitle }) {
  useEffect(() => {
    // Load background images on component mount
    const breadcrumbArea = document.querySelector(".breadcrumb-area");
    const breadcrumbShape = document.querySelector(".breadcrumb-shape");

    if (breadcrumbArea) {
      breadcrumbArea.style.backgroundImage =
        "url('/assets/img/bg/breadcrumb_bg.jpg')";
    }

    if (breadcrumbShape) {
      breadcrumbShape.style.backgroundImage =
        "url('/assets/img/images/breadcrumb_shape.png')";
    }
  }, []);

  return (
    <section className="breadcrumb-area breadcrumb-bg">
      <div className="breadcrumb-shape"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h1 className="title">{breadcrumbTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Bodok</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {breadcrumbTitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
