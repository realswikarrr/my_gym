import ExerciseList from "@/components/ExerciseList";

const exerciseList = [
  "DEADLIFT: 3 SETS * 3 REPS [80-85% 1RM]",
  "HACK SQUAT: 3 SETS * 10-12 REPS",
  "SINGLE-LEG HIP THRUST: 2 SETS * 15 REPS",
  "SINGLE-LEG CALF RAISE: 3 SETS * 8-10 REPS",
  "WEIGHTED L-SIT HOLD: 3 SETS",
];

export default function LegTwo() {
  return (
    <>
      <ExerciseList exerciseList={exerciseList} />
    </>
  );
}
