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

export default function Home() {
  return (
    <>
      <Banner1 content={data} />
      <Features1 content={data} />
      <About1 content={data} />
      <Services1 content={data} />
      <Project1 content={data.project} />
      <Team1 content={data.team} />
      <Counter1 content={data} />
      <Testimonial1 content={data} />
      <Blog1 content={data} />
      <Newsletter1 content={data} />
    </>
  );
}
