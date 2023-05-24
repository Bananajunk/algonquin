import { Badge } from "@/components";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string;
  timestamp: Date;
  content?: string;
  href?: string;
  id?: string;
}

const Entry = ({ title, timestamp, content, href, id }: Props) => {
  return (
    <article id={id} className="grid py-2 px-8 w-full gap-4">
      <header className="flex gap-4 mb-2 items-center">
        <h3 className="text-2xl font-heading text-accent">{title}</h3>
        <Badge>{timestamp.toDateString().split(" ").slice(1).join(" ")}</Badge>
      </header>
      <p className="text-sm line-clamp-3">{content}</p>
      {href && (
        <a
          href={href}
          className="grid gap-0 place-content-center text-accent font-heading"
        >
          Read more
          <ChevronDoubleDownIcon className="h-4 w-4 place-self-center hover:motion-safe:animate-bounce" />
        </a>
      )}
    </article>
  );
};

export default Entry;
