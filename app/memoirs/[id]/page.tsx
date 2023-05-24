import { Breadcrumbs, Signature } from "@/components";
import { prisma } from "@/lib/prisma";
import {
  ArrowUturnLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

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
      <Breadcrumbs
        path={[
          { content: "Memoirs", href: "/#memoir" },
          { content: story?.title || "" },
        ]}
      />
      <header className="grid gap-1">
        <Link
          href={`/#${story?.id}`}
          className="flex items-center gap-1 text-accent"
        >
          <ChevronLeftIcon className="w-4 h-4" />
          Back
        </Link>
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
