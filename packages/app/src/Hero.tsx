import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex justify-center items-center py-16 min-h-screen">
        <div className="w-128 h-32 flex flex-col justify-center items-center">
          <div className="text-black text-6xl font-bold text-center flex-1">
            <span>Welcome to </span>
            <span className="text-green-500">LOCKCEPT</span>
            <span>ed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
