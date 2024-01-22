import DayCategory from "@/components/DayCategory";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center  font-mono">
        The body achieves what the mind believes
      </h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-between mt-20">
        <Link href={"/legone"}>
          <DayCategory text="Legs 1" />
        </Link>
        <Link href={"/pushone"}>
          <DayCategory text="Push 1" />
        </Link>
        <Link href={"/pullone"}>
          <DayCategory text="Pull 1" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-between mt-20">
        <Link href={"/legtwo"}>
          <DayCategory text="Legs 2" />
        </Link>
        <Link href={"/pushtwo"}>
          <DayCategory text="Push 2" />
        </Link>
        <Link href={"/pulltwo"}>
          <DayCategory text="Pull 2" />
        </Link>
      </div>
    </main>
  );
}
