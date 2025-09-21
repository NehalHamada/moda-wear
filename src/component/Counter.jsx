"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="btn bg-amber-600 p-2 rounded text-white"
        onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}
