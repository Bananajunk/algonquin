import { prisma } from "@/lib/prisma";

const Stories = async () => {
  const stories = await prisma.story.findMany();
  return (
    <section className="py-4 flex gap-8">
      {stories.map((story) => {
        return (
          <div
            key={story.id}
            className="flex py-2 px-8 bg-secondary rounded-md w-80 h-96"
          >
            <div>
              <h4 className="text-2xl">{story.title}</h4>
              <h5 className="font-mono text-xs">
                {story.createdAt.toDateString()}
              </h5>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Stories;
