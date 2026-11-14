import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises"; // import readFile
import { marked, Marked } from "marked";
import matter from "gray-matter"; // import gray-matter

export default async function artikel() {
  // membaca file markdown
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf-8");
  // menggunakan gray-matter untuk menerima parameter meta data dari file .md
  const {
    content,
    data: { title, image, date, author },
  } = matter(text);
  // menggunakan marked untuk merubah content dari gray-matter
  const html = marked(content);

  return (
    <div>
      <Heading>{title}</Heading>
      <p className="italic text-sm pb-2">
        {date} - {author}
      </p>

      <p>Selamat datang di belajar NextJS</p>
      {/* import dari folder public */}
      <img src={image} width={500} className="rounded-lg" />

      {/* menampilkan file md dengan format html dari marked */}
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
