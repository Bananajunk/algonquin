import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/solid";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`${styles.Navbar} absolute top-0 w-screen p-5 z-10 shadow-2xl font-heading`}
    >
      <Link className={styles.HomeIcon} href="/" aria-label="Home">
        <HomeModernIcon className="h-8 w-8" />
      </Link>
      <ul className={`${styles.NavMenu} flex gap-8 items-center text-2xl`}>
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
