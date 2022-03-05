import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="flex justify-center items-center py-16 min-h-screen bg-green-200">
        <div className="flex flex-col justify-center items-center">
          <div className="text-black text-6xl font-bold text-center flex-1">
            <span>About </span>
            <span className="text-green-500">록셉</span>
          </div>
        </div>
      </div>
    </section>
  );
}
