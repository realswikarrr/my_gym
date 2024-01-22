import ExerciseList from "@/components/ExerciseList";

const exerciseList = [
  "BENCH PRESS: 3 SETS * 8 [72.5% 1RM]",
  "MACHINE SHOULDER PRESS: 3 SETS * 12 REPS",
  "DIPS: 3 SETS * 12-15 REPS",
  "CABLE LATERAL RAISE: 3 SETS 12 REPS + LAST SET KEEP GOING +4 AFTER REST",
  "CABLE TRICEP KICKBACK: 3 SETS * 20-30",
];

export default function PushOne() {
  return (
    <>
      <ExerciseList exerciseList={exerciseList} />
    </>
  );
}
