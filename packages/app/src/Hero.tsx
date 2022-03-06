import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex justify-center items-center py-16 min-h-screen px-8">
        <div className="flex flex-col justify-center items-center">
          <div className="flex-1 mb-8 font-bold">
            <span>Welcome to </span>
            <span className="text-green-500">LOCKCEPT</span>
            <span>ed</span>
          </div>

          <button
            type="button"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-cyan-400 hover:bg-cyan-500"
            onClick={() => {
              window.location.href = "#about";
            }}
          >
            더 보기
          </button>
        </div>
      </div>
    </section>
  );
}
