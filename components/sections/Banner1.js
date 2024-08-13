import Link from "next/link";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Dynamic Imports
const Tooltip = dynamic(() => import("../elements/Tooltip"), { ssr: true });
const Brand1 = dynamic(() => import("./Brand1"), { ssr: true });

// Loading Placeholder Component
function LoadingPlaceholder() {
  return (
    <section className="banner-area">
      <div
        className="banner-shape"
        style={{ backgroundColor: "#e0e0e0", height: "100px" }}
      />
      <div
        className="banner-bg"
        style={{ backgroundColor: "#d0d0d0", height: "400px" }}
      >
        <div className="banner-content">
          <div
            className="title-placeholder"
            style={{
              backgroundColor: "#cccccc",
              width: "50%",
              height: "40px",
              marginBottom: "10px",
            }}
          ></div>
          <div
            className="description-placeholder"
            style={{
              backgroundColor: "#cccccc",
              width: "70%",
              height: "20px",
              marginBottom: "20px",
            }}
          ></div>
          <div
            className="button-placeholder"
            style={{ backgroundColor: "#cccccc", width: "30%", height: "40px" }}
          ></div>
        </div>
        <div className="banner-tooltip-wrap">
          <div
            className="tooltip-placeholder"
            style={{
              backgroundColor: "#b0b0b0",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
          {/* Repeat for the number of tooltips */}
        </div>
      </div>
      <div
        className="brand1-placeholder"
        style={{
          backgroundColor: "#cccccc",
          height: "100px",
          marginTop: "20px",
        }}
      ></div>
    </section>
  );
}

// Main Banner1 Component
export default function Banner1({ content }) {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <section className="banner-area">
        <div
          className="banner-shape"
          style={{
            backgroundImage: `url(${content.banner.shapeImage})`,
          }}
        />
        <div
          className="banner-bg"
          style={{
            backgroundImage: `url(${content.banner.backgroundImage})`,
          }}
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
              <Tooltip key={index} index={index} tooltip={tooltip} />
            ))}
          </div>
        </div>
        <Brand1 />
      </section>
    </Suspense>
  );
}
