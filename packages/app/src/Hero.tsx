import React from "react";
import DefaultScrollAnimation from "./DefaultScrollAnimation";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex justify-center items-center py-16 min-h-screen px-8">
        <div className="flex flex-col justify-center items-center">
          <DefaultScrollAnimation>
            <div className="flex-1 mb-8 font-bold">
              <span>Welcome to </span>
              <span className="text-green-500">LOCKCEPT</span>
              <span>ed</span>
            </div>
          </DefaultScrollAnimation>

          <DefaultScrollAnimation delay={500}>
            <button
              type="button"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-cyan-400 hover:bg-cyan-500"
              onClick={() => {
                const location = (
                  document?.querySelector("#about") as HTMLElement | null
                )?.offsetTop;
                if (location)
                  window.scrollTo({
                    top: location,
                    behavior: "smooth",
                  });
              }}
            >
              더 보기
            </button>
          </DefaultScrollAnimation>
        </div>
      </div>
    </section>
  );
}
