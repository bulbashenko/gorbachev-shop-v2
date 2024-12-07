// app/not-found.js

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-20 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">
        The requested page was not found!
      </h1>
      <p className="text-lg md:text-2xl mb-6 text-center">
        The requested page was not found!
      </p>
      <Link href="/" className="text-xl md:text-2xl text-teal-500 hover:underline">
        Continue
      </Link>
    </div>
  );
}
