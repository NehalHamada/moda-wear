import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-700 text-white mt-8">
      <div className="bg-amber-800 text-center py-3 text-sm">
        <h2 className="text-lg font-bold">Moda Wear</h2>©{" "}
        {new Date().getFullYear()} Moda Wear. All rights reserved.
      </div>
    </footer>
  );
}
