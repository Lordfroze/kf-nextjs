import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises"; // import readFile
import { marked, Marked } from "marked";

export default async function artikel() {
  // membaca file markdown
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf-8");
  // menggunakan marked untuk merubah text diatas ke html
  const html = marked(text);

  return (
    <div>
      <Heading>Belajar NextJS</Heading>

      <p>Selamat datang di belajar NextJS</p>
      {/* import dari folder public */}
      <img src="/images/nextjs.png" width={500} className="rounded-lg" />

      {/* menampilkan file md dengan format html dari marked */}
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
