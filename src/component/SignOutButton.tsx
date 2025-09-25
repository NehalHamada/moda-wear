"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-gray-700 text-white px-3 py-1 rounded">
      Sign out
    </button>
  );
}
