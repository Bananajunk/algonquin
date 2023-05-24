import { Signature } from "@/components";
import { prisma } from "@/lib/prisma";

interface Params {
  id: string;
}

const Memoir = async ({ params: { id } }: { params: Params }) => {
  const story = await prisma.story.findUnique({
    where: {
      id,
    },
  })!;

  return (
    <section className="grid gap-16">
      <header className="grid">
        <h1 className="text-5xl font-heading text-accent font-bold">
          {story?.title}
        </h1>
        <span className="text-md font-handwriting tracking-widest">
          {story?.createdAt.toDateString()}
        </span>
      </header>
      <p>{story?.content}</p>
      <Signature className="place-self-end" />
    </section>
  );
};

export default Memoir;
