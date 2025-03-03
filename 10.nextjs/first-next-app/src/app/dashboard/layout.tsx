import Navbar from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <Sidebar />
        <div className="col-span-12 md:col-span-9 bg-blue-500">{children}</div>
      </div>
    </>
  );
}
