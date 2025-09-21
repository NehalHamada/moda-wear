"use client";
import React from "react";

interface props {
  error: Error;
}

export default function error({ error }: props) {
  return (
    <div className="mt-40">
      <h3 className="text-center text-amber-700">Product not Found</h3>
      <p className="text-center text-red-600">{error.message}</p>
    </div>
  );
}
