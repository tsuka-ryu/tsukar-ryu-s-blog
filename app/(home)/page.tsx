import Link from "next/link";
import { Hero } from "./page.client";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center text-center flex-1 px-4">
      <Hero />
      <div className="z-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 from-foreground to-foreground/70 ">
          tsukaryu's blog
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          Typing away at the machine, waiting for something to break.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Read Blog
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            About me
          </Link>
        </div>
      </div>
    </main>
  );
}
