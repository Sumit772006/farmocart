import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">

      <h1 className="text-5xl font-bold text-green-700">
        Welcome to FarmoCart
      </h1>

      <p className="mt-4 text-gray-600">
        Buy fresh agricultural products directly from farmers
      </p>

      <Link href="/dashboard">
        <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg">
          Start Shopping
        </button>
      </Link>

    </div>
  );
}
