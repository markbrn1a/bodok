import Layout from "@/components/layout/Layout";

import About1 from "@/components/sections/About1";
import Appointment2 from "@/components/sections/Appointment2";
import Banner2 from "@/components/sections/Banner2";
import Blog1 from "@/components/sections/Blog1";
import Counter2 from "@/components/sections/Counter2";
import Engineer1 from "@/components/sections/Engineer1";
import Faq1 from "@/components/sections/Faq1";
import Newsletter1 from "@/components/sections/Newsletter1";
import Project3 from "@/components/sections/Project3";
import Services2 from "@/components/sections/Services2";
import Work1 from "@/components/sections/Work1";
import { redirect } from "next/navigation";
import Work2 from "@/components/sections/Work2";
// import data from "@/data/data.json";
// import data from "@/data/service/content.json";

export default async function LandingTemplate({ params }) {
  const { service } = params;
  const slug = service;

  // Dynamically import the JSON file based on the slug
  let data = {};
  try {
    const mod = await import(`@/data/service/${slug}.json`);
    data = JSON.parse(JSON.stringify(mod.default)); // Ensure it's a plain object
    console.log(content);
  } catch (error) {
    // redirect("/404");
  }
  return (
    <>
      <Banner2 content={data} />
      <Appointment2 content={data} />
      <About1 content={data} />
      <Work1 content={data} />
      <div
        className="area-bg-three"
        style={{
          backgroundImage: `url(${"/assets/img/bg/area_bg03.jpg"})`,
        }}
      >
        <Services2 content={data} />
      </div>
      <Engineer1 content={data} />
      <Work2 content={data} />
      <Project3 content={data} />
      <Faq1 content={data} />
      <Blog1 content={data} />
      <Newsletter1 content={data} />
    </>
  );
}
