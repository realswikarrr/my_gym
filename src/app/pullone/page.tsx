import ExerciseList from "@/components/ExerciseList";

const exerciseList = [
  "PULLUPS: 3 SETS * 6 REPS",
  "SEATED CABLE ROW: 3 SETS * 10-12 REPS",
  "CABLE PULLOVER: 3 SETS * 15-20 REPS",
  "HAMMER CHEAT CURL: 3 SETS * 8-10 REPS",
  "INCLINE DUMBELL CURL: 2 SETS * 12-15 REPS",
];

export default function PullOne() {
  return (
    <>
      <ExerciseList exerciseList={exerciseList} />
    </>
  );
}
