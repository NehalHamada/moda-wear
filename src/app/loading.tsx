import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center mt-70 ">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-700"></div>
    </div>
  );
}
