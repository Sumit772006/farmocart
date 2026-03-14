"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-600 text-white p-4">

      <h1 className="text-xl font-bold">FarmoCart</h1>

      <div className="flex gap-6 items-center">

        <Link href="/dashboard">Products</Link>

        <Link href="/cart">🛒 Cart</Link>

        <Link href="/login">
          <button className="bg-white text-green-600 px-3 py-1 rounded">
            Login / Signup
          </button>
        </Link>

      </div>

    </nav>
  );
}
