import Link from "next/link";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-screen">
      <section
        id="heading"
        className="h-screen w-full relative flex justify-center flex-col items-center text-center"
      >
        <h1 className="z-10 p-4 text-white text-8xl font-bold uppercase">
          Come at me bro
        </h1>
        <h2 className="z-10 p-4 text-primary  text-4xl font-script">
          A lifetime of experiences in algonquin park
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
      <section id="stories" className="px-20 py-10">
        <h3 className="text-4xl font-bold mb-5">Let me tell you something</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut mi
          sed ipsum dignissim ultricies vel laoreet sem. Nulla sit amet
          malesuada massa, eget vehicula ante. Sed mattis lacinia ultrices.
          Suspendisse bibendum eros vitae ligula cursus, quis semper diam
          elementum. Nulla tincidunt ex nibh, vel tincidunt ex ultricies vel.
          Nullam rhoncus commodo eros et imperdiet. Sed quis nulla vulputate,
          aliquam eros quis, blandit elit. Etiam consequat, eros eu maximus
          tristique, felis urna sollicitudin risus, eget pharetra lectus mi sed
          arcu. Morbi eget bibendum nibh. Vivamus eu faucibus neque. Aenean
          dignissim convallis ultricies. In metus magna, consectetur vitae
          luctus id, faucibus quis lacus. Praesent nec placerat dui. Nam in
          mauris turpis. Curabitur ligula nibh, sagittis eget mauris eget,
          ornare ornare metus. Mauris id justo ac ex facilisis imperdiet sed sit
          amet metus.
        </p>
      </section>
      <section id="footer"></section>
    </main>
  );
}
