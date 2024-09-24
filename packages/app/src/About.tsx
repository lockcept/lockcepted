import React, { useEffect, useState } from "react";
import TransitionInView from "./TransitionInView";

export default function About() {
  const [degree, setDegree] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const about = document?.querySelector("#about") as HTMLElement | null;
      if (!about) {
        setDegree(0);
        return;
      }
      const minScrollTop = about.offsetTop - window.innerHeight;
      const maxScrollTop = about.offsetTop + about.offsetHeight;
      const index = about.offsetTop;
      const scroll = Math.min(Math.max(scrollTop, minScrollTop), maxScrollTop);
      const ratio = (scroll - index) / (maxScrollTop - minScrollTop);

      setDegree(ratio * 360 * 10);
    });
  }, []);

  return (
    <section id="about">
      <div className="flex justify-center items-center py-16 min-h-screen px-8">
        <div className="flex flex-col justify-center items-center w-full">
          <TransitionInView>
            <div className="flex-1 font-bold mb-8">
              <span className="text-2xl md:text-4xl">About </span>
              <span className="text-lime-500">록셉</span>
            </div>
          </TransitionInView>
          <div className="flex flex-col md:flex-row my-8 w-full">
            <div className="flex-1 p-4 flex justify-center items-center md:px-16 md:justify-end">
              <TransitionInView>
                <img
                  className="ring-2 ring-lime-100 ring-opacity-10 rounded-full"
                  style={{ transform: `rotate(${degree}deg)` }}
                  src="/lockcept.png"
                  alt="lockcept"
                />
              </TransitionInView>
            </div>
            <div
              className="flex flex-1 p-4 text-left text-sm justify-center items-center md:px-16 md:text-lg md:justify-start"
              style={{ wordBreak: "keep-all" }}
            >
              <TransitionInView>
                <div>
                  Hello, I'm Lockcept
                  <br />
                  <br />
                  I majored in Industrial Engineering at Seoul National
                  University
                  <br />
                  and completed a double major in Computer Science.
                  <br />
                  <br />
                  I have experience working as a full-stack developer.
                  <br />
                  <br />
                  I have a grand dream of creating my own universe.
                  <br />
                  <br />
                  Consistent problem-solving is the core of my philosophy.
                  <br />
                  <br />
                  My hobbies include blogging, gaming, playing the piano,
                  exercising, and programming. [2024]
                  <br />
                  <br />
                  For more thoughts, you can find them on my{" "}
                  <a href="https://blog.lockcept.kr">blog (click here)</a>.
                </div>
              </TransitionInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
