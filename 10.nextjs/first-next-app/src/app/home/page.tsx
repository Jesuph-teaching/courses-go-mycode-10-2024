"use client";

import React, { useState } from "react";

export default function page() {
  const [elm, setElem] = useState("gsdfgh");
  return (
    <div>
      Home page
      {elm}
    </div>
  );
}
