"use client";
import { useEffect, useState } from "react";
import CountUp from "../elements/CountUp";

export default function Counter3({ content }) {
  const { counter3Content } = content;

  return (
    <>
      <div className="counter-area-three">
        <div className="container">
          <div className="row">
            {counter3Content.counters.map((counter, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="counter-item-three">
                  <div className="counter-content">
                    <CountUp
                      className="count"
                      end={counter.end}
                      duration={counter.duration}
                    />
                    <p>{counter.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
