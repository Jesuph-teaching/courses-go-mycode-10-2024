import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex bg-green-500">
      <Link href={"/home"}>Home</Link>
      <Link href={"/dashboard"}>dashboard</Link>
    </nav>
  );
}
