import Banner1 from "@/components/sections/Banner1";
import Brand1 from "@/components/sections/Brand1";
import Features1 from "@/components/sections/Features1";
import About1 from "@/components/sections/About1";
import Services1 from "@/components/sections/Services1";
import Project1 from "@/components/sections/Project1";
import Team1 from "@/components/sections/Team1";
import Counter1 from "@/components/sections/Counter1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Blog1 from "@/components/sections/Blog1";
import Newsletter1 from "@/components/sections/Newsletter1";
import data from "@/data/data.json";

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
