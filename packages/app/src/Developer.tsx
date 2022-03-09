import React from "react";
import DefaultScrollAnimation from "./DefaultScrollAnimation";

const projects = [
  {
    title: "LOCKCEPTed",
    content: "My portfolio",
    url: "https://lockcept.kr",
    imageUrl: "lockcept.png",
  },
];

export default function Developer() {
  return (
    <section id="developer">
      <div className="flex justify-center items-center py-16 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold flex-1 mb-16">
            <DefaultScrollAnimation>
              <span>개발자 </span>
              <span className="text-green-500">록셉</span>
            </DefaultScrollAnimation>
          </div>
          <DefaultScrollAnimation delay={250}>
            <div className="grid grid-cols-3 gap-8">
              {projects.map((project) => (
                <a href={project.url}>
                  <div
                    key={project.title}
                    className="py-10 px-6 bg-gray-200 text-center rounded-lg h-full"
                  >
                    <div className="space-y-10">
                      <img
                        className="mx-auto rounded-full w-56 h-56"
                        src={project.imageUrl}
                        alt={project.title}
                      />
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <div className="font-bold text-2xl">
                          <div className="text-black">{project.title}</div>
                        </div>
                        <div className="text-lg">
                          <div className="text-black">{project.content}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </DefaultScrollAnimation>
        </div>
      </div>
    </section>
  );
}
