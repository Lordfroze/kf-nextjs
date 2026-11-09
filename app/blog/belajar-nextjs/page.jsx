import Heading from "@/components/Heading";

export default function artikel() {
  return (
    <div>
      <Heading>Belajar NextJS</Heading>

      <p>Selamat datang di belajar NextJS</p>
      {/* import dari folder public */}
      <img src="/images/nextjs.png" width={500} className="rounded-lg" />
    </div>
  );
}
