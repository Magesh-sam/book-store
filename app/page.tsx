import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background  w-full">
      <nav className="bg-primary h-12 text-background flex items-center p-3">
        <h3 className="text-2xl mx-3">Book Store</h3>
      </nav>
      <section className="hero-section grid grid-cols-2 grid-rows-10 min-h-80">
        <div className="flex justify-center  flex-col gap-8 bg-background border border-foreground p-8 ">
          <h1 className="text-7xl leading-tight  ">
            There is more treasure in books than in all the pirate&apos;s loot
            on Treasure Island.
          </h1>
          <p className="text-lg leading-normal">
            A rigorous selection of printed matter bridging the gap between
            clinical theory and expressive design. Curated for the discerning
            mind.
          </p>
          <Button
            variant={"outline"}
            size="lg"
            className={
              "rounded font-mono hover:bg-primary hover:text-background transition max-w-fit border border-foreground"
            }
          >
            <span>{"["}</span>
            <span className="capitalize ">View All Books</span>
            <span>{"]"}</span>
          </Button>
        </div>
        <div className="flex justify-center items-center border border-foreground">
          <Image
            src={"/book-hero-img.svg"}
            alt={"A girl reading a book"}
            width={800}
            height={620}
          />
        </div>
      </section>
    </main>
  );
}
