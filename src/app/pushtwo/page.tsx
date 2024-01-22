import ExerciseList from "@/components/ExerciseList";

const exerciseList = [
  "OVERHEAD PRESS: 4 SETS * 4 REPS [80% 1RM]",
  "CLOSE-GRIP BENCH PRESS: 3 SETS * 10 REPS",
  "LOW-HIGH CABLE CROSSOVER: 3 SETS * 10-12 + LAST REP DROP 50%",
  "OVERHEAD TRICEP EXT: 3 SETS * 10-12 REPS",
  "LATERAL RAISE: 3 SETS * 7/7/7 REPS",
];

export default function PushTwo() {
  return (
    <>
      <ExerciseList exerciseList={exerciseList} />
    </>
  );
}
