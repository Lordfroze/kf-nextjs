import Heading from "@/components/Heading";
import PostCard from "@/components/Postcard";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="text-2xl mb-3">List of posts</h2>

      <PostCard
        title="Belajar Nextjs"
        href="/blog/belajar-nextjs"
        description="Belajar Nextjs"
        date="12.11.2026"
        author="Admin"
        image="/images/nextjs.png"
      />
    </>
  );
}
