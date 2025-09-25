"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Welcome 👋</h1>
      <p className="text-gray-600">Login or Register with your account</p>

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="bg-amber-700 text-white px-4 py-2 rounded cursor-pointer">
        Continue with Google
      </button>

      <button
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
        Continue with Facebook
      </button>
    </div>
  );
}
