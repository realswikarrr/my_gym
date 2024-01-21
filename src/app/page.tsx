import DayCategory from "@/components/DayCategory";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center  font-mono">
        The body achieves what the mind believes
      </h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-between mt-20">
        <DayCategory text="Legs 1" />
        <DayCategory text="Push 1" />
        <DayCategory text="Pull 1" />
      </div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-between mt-20">
        <DayCategory text="Legs 2" />
        <DayCategory text="Push 2" />
        <DayCategory text="Pull 2" />
      </div>
    </main>
  );
}
