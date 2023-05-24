import Link from "next/link";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/20/solid";

const Splash = () => {
  return (
    <section
      id="heading"
      className="h-screen w-full relative flex justify-center flex-col items-center text-center"
    >
      <h1 className="z-10 p-4 text-white text-8xl font-bold uppercase font-heading">
        Come at me bro
      </h1>
      <h2 className="z-10 p-4 text-primary  text-4xl font-handwriting">
        The Algonquin Memoirs of Charles Reid
      </h2>
      <Image
        src="https://storage.googleapis.com/d42ba1b4ddfb8a90580a58367da83a83/algonquin_header.webp"
        alt="header-image"
        className="z-0 brightness-50"
        aria-hidden
        fill
      />
      <Link
        href="https://unsplash.com/photos/9OvAghqvmD0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        className="flex gap-2 items-center z-10 absolute bottom-2 right-2 font-mono font-thin text-xs uppercase"
      >
        <PhotoIcon className="h-4 w-4" />
        Photo credit IsaLIN_
      </Link>
    </section>
  );
};

export default Splash;
