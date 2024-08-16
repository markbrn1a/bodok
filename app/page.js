// import Banner1 from "@/components/sections/Banner1";
// import Features1 from "@/components/sections/Features1";
// import About1 from "@/components/sections/About1";
// import Services1 from "@/components/sections/Services1";
// import Project1 from "@/components/sections/Project1";
// import Team1 from "@/components/sections/Team1";
// import Counter1 from "@/components/sections/Counter1";
// import Testimonial1 from "@/components/sections/Testimonial1";
// import Blog1 from "@/components/sections/Blog1";
// import Newsletter1 from "@/components/sections/Newsletter1";
import data from "@/data/data.json";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Banner1 = dynamic(() => import("@/components/sections/Banner1"));
const Features1 = dynamic(() => import("@/components/sections/Features1"));
const About1 = dynamic(() => import("@/components/sections/About1"));
const Services1 = dynamic(() => import("@/components/sections/Services1"));
const Project1 = dynamic(() => import("@/components/sections/Project1"));
const Team1 = dynamic(() => import("@/components/sections/Team1"));
const Counter1 = dynamic(() => import("@/components/sections/Counter1"));
const Testimonial1 = dynamic(() =>
  import("@/components/sections/Testimonial1")
);
const Blog1 = dynamic(() => import("@/components/sections/Blog1"));
const Newsletter1 = dynamic(() => import("@/components/sections/Newsletter1"));
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
export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Banner1 content={data} />
        <Features1 content={data} />
        <About1 content={data} />
        <Services1 content={data} />
        <Project1 content={data.project} />
        {/* <Team1 content={data.team} /> */}
        {/* <Counter1 content={data} /> */}
        <Testimonial1 content={data} />
        {/* <Blog1 content={data} /> */}
        <Newsletter1 content={data} />
      </Suspense>
    </>
  );
}
