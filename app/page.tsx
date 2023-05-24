import { Suspense } from "react";
import Memoirs from "./Memoirs";
import Splash from "./Splash";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 w-screen">
      <Splash />
      <Suspense fallback="Loading ...">
        {/* @ts-expect-error Server Component */}
        <Memoirs />
      </Suspense>
      <section id="footer"></section>
    </main>
  );
}
