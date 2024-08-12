"use client";
import Link from "next/link";
import { useState } from "react";
import Brand1 from "./Brand1";
import DataBg from "../elements/DataBg"; // Import DataBg

export default function Banner1({ content }) {
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
      <section className="banner-area">
        <div
          className="banner-shape"
          data-background={content.banner.shapeImage}
        />
        <div
          className="banner-bg"
          data-background={content.banner.backgroundImage}
        >
          <div className="banner-content">
            <h2 className="title wow fadeInDown" data-wow-delay=".2s">
              {content.banner.title}
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".2s">
              {content.banner.description}
            </p>
            <Link
              href={content.banner.link.href}
              className="btn wow fadeInUp"
              data-wow-delay=".4s"
            >
              {content.banner.link.text}
            </Link>
          </div>
          <div className="banner-tooltip-wrap">
            {content.banner.tooltips.map((tooltip, index) => (
              <div
                key={index}
                className={
                  isActive.key == index + 1
                    ? "tooltip-item top active"
                    : "tooltip-item top"
                }
                onClick={() => handleToggle(index + 1)}
              >
                <div className="tooltip-btn pulse">
                  <i className="fas fa-plus" />
                </div>
                <div className="tooltip-content">
                  <h2 className="title">{tooltip.title}</h2>
                  <p>{tooltip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* brand-area */}
        <Brand1 />
        {/* brand-area-end */}
      </section>
      <DataBg /> {/* Add DataBg component */}
    </>
  );
}
