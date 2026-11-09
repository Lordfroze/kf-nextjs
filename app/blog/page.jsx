import Link from "next/link";
import Heading from "../../components/Heading";

export default function blog() {
  return (
    <div>
      <Heading>Blog jsx</Heading>
      <p>Selamat datang di halaman blog</p>
      <ul>
        <li>
          <Link href="/blog/artikel" className="text-blue-500">
            Belajar Nextjs
          </Link>
        </li>
        <li>
          <Link href="/blog/judul-berita" className="text-blue-500">
            Belajar Nodejs
          </Link>
        </li>
      </ul>
    </div>
  );
}
