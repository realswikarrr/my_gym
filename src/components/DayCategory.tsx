type props = {
  text: string;
};

export default function DayCategory({ text }: props) {
  return (
    <div className=" border-zinc-400 border-2 rounded-sm text-center p-32 transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-1 hover:scale-110  duration-300">
      <h1>{text}</h1>
    </div>
  );
}
