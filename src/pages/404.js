import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <Link href="/" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition">
        Go Home
      </Link>
    </div>
  );
}
