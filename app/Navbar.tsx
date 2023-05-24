import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="flex justify-center absolute top-0 w-screen p-5 z-10 shadow-2xl font-heading">
      <ul className="flex gap-8 items-center text-2xl">
        <li>
          <Link href="/">
            <HomeModernIcon className="h-8 w-8" />
          </Link>
        </li>
        <li>
          <Link href="/#memoir">Memoir</Link>
        </li>
        <li>
          <Link href="/memoriam">Memoriam</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
