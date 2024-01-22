import ExerciseList from "@/components/ExerciseList";

const exerciseList = [
  "SQUAT: 3 SETS * 4 REPS [80% 1RM]",
  "ROMANIAN DEADLIFT: 3 SETS * 10 REPS",
  "SINGLE LEG PRESS: 3 SETS * 15 REPS",
  "ECCENTRIC-ACCENTUATED LEG EXTENSION: 3 SETS * 10-12 REPS",
  "SEATED LEG CURL: 3 SETS * 10-12 REPS",
  "STANDING CALF RAISE: 3 SETS * 10-12 REPS",
  "DECLINE CRUNCHES: 2 SETS * 10-12 - SUPER",
  "LONG-LEVER PLANKS: 2 SETS * 30 SECS - SUPER",
];

export default function LegOne() {
  return (
    <>
      <ExerciseList exerciseList={exerciseList} />
    </>
  );
}
