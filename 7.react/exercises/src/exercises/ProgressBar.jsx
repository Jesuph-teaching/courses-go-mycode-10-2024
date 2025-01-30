import React from "react";

export default function ProgressBar({ width }) {
  return (
    <div className="w-[300px] h-10 bg-amber-600 rounded-3xl overflow-hidden">
      <div
        style={{
          width: `${width}%`,
          backgroundColor: `rgb(${200 - width},140,${width})`,
        }}
        className=" h-full transition-[width] duration-500 ease-in-out"
      ></div>
    </div>
  );
}
