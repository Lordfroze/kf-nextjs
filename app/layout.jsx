export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Belajar Next.js</title>
      </head>
      <body>
        <header>[header] app layout</header>
        <main>{children}</main>
        <footer>[footer] app layout</footer>
      </body>
    </html>
  );
}
