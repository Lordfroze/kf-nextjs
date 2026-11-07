import Link from "next/link";

export default function blog() {
  return (
    <div>
      <h1>Blog jsx</h1>
      <p>Selamat datang di halaman blog</p>
      <ul>
        <li>
          <Link href="/blog/artikel">Artikel</Link>
        </li>
        <li>
          <Link href="/blog/judul-berita">Judul Berita</Link>
        </li>
      </ul>
    </div>
  );
}
