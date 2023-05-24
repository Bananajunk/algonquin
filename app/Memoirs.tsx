import { Entry } from "@/components";
import { prisma } from "@/lib/prisma";

const Memoirs = async () => {
  const stories = await prisma.story.findMany({
    orderBy: {
      order: "asc",
    },
  });
  return (
    <section
      id="memoir"
      className="p-10 max-w-screen-lg place-self-center divide-y-2 divide-solid divide-secondary"
    >
      <header className="p-4">
        <h3 className="text-4xl font-bold mb-5 font-heading text-accent">
          Chapters
        </h3>
        <p>
          Each of the folliwing chapters capture details of The Golden Stallion
          of Power (GSOP)’s adventures and tales spanning 35 years in Algonquin
          Park.
        </p>
      </header>
      <section className="py-4 grid grid-cols-1 gap-4">
        {stories.map((story) => {
          return (
            <Entry
              key={story.id}
              id={story.id}
              title={story.title}
              timestamp={story.createdAt}
              content={story.content}
              href={`/memoirs/${story.id}`}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Memoirs;
