import Link from "next/link"; // import link
import "./globals.css"; // import global css yang berisi tailwind

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Belajar Next.js</title>
      </head>
      <body className="flex flex-col px-4 py-4 min-h-screen">
        <header>
          <nav>
            <ul className="flex gap-2">
              <li>
                {/* Menggunakan Link nextjs untuk navigasi */}
                <Link href="/">Home</Link>
              </li>
              <li>
                {/* link dengan prefetch false */}
                <Link href="/blog" prefetch={false}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs"> Footer</footer>
      </body>
    </html>
  );
}
