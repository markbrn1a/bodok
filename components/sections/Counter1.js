"use client";
import { useEffect, useState } from "react";
import CountUp from "../elements/CountUp";
import Image from "next/image";

export default function Counter1({ content }) {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("count");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="counter-area pb-120">
        <div className="container">
          <div className="counter-inner wow fadeInUp" data-wow-delay=".2s">
            <div className="row">
              {content.counterItems.map((item, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-icon">
                      <Image width={50} height={50} src={item.icon} alt="" />
                    </div>
                    <div className="counter-content">
                      {inViewport && <CountUp end={item.count} duration={10} />}
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
