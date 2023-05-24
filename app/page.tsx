import { Suspense } from "react";
import Memoir from "./Memoir";
import Splash from "./Splash";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 w-screen">
      <Splash />
      <Suspense fallback="Loading ...">
        {/* @ts-expect-error Server Component */}
        <Memoir />
      </Suspense>
      <section id="footer"></section>
    </main>
  );
}
