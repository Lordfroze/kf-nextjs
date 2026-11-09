import "./globals.css"; // import global css yang berisi tailwind
import Navbar from "../components/NavBar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Belajar Next.js</title>
      </head>
      <body className="flex flex-col px-4 py-4 min-h-screen">
        <header>
          {/* import component navbar */}
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs"> Footer</footer>
      </body>
    </html>
  );
}
