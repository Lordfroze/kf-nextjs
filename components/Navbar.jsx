import Link from "next/link"; // import link

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          {/* Menggunakan Link nextjs untuk navigasi */}
          <Link href="/" className="text-sky-500 hover:underline">
            Home
          </Link>
        </li>
        <li>
          {/* link dengan prefetch false */}
          <Link
            href="/blog"
            prefetch={false}
            className="text-sky-500 hover:underline"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
