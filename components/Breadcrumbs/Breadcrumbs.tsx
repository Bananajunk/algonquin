import { ChevronRightIcon, HomeModernIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Props {
  path?: { content: string; href?: string }[];
}

const Breadcrumbs = ({ path = [] }: Props) => {
  return (
    <nav>
      <ul className="flex items-center text-accent/25">
        <li>
          <Link href="/">
            <HomeModernIcon className="h-4 w-4" />
          </Link>
        </li>
        {path.map((crumb) => {
          return (
            <li className="inline-flex items-center">
              <ChevronRightIcon className="h-4 w-4" />
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.content}</Link>
              ) : (
                <span>{crumb.content}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
