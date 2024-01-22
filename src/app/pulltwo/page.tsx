import ExerciseList from "@/components/ExerciseList";

const exerciseList = [
  "OMNI GRIP LAT PULLDOWN - 3 SETS * 10-12 REPS + CHANGE GRIP EVERY SET",
  "CHEST SUPPORTED ROW: 3 SETS * 10 REPS",
  "ROPE FACEPULL: 3 SETS * 15-20 REPS",
  "REVERSE PEC DECK: 2 SETS * 15 REPS",
  "PRONATED/SUPINATED BICEP CURL: 3 SETS * 10/10 REPS",
];

export default function PullTwo() {
  return (
    <>
      <ExerciseList exerciseList={exerciseList} />
    </>
  );
}
