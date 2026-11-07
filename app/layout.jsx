import Link from "next/link"; // import link

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Belajar Next.js</title>
      </head>
      <body>
        <ul>
          <li>
            {/* Menggunakan Link nextjs untuk navigasi */}
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            {/* link dengan prefetch false */}
            <Link href="/blog" prefetch={false}>
              Blog
            </Link>
          </li>
        </ul>
        <header>[header] app layout</header>
        <main>{children}</main>
        <footer>[footer] app layout</footer>
      </body>
    </html>
  );
}
