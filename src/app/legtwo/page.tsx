import ExerciseList from "@/components/ExerciseList";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import LEGOne from "../../assests/LEG2-1.png";
import LEGTwo from "../../assests/LEG2-2.png";
import LEGThree from "../../assests/LEG2-3.png";
import LEGFour from "../../assests/LEG2-4.png";
import LEGFive from "../../assests/LEG2-5.png";

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
      <div className="mt-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src={LEGOne} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={LEGTwo} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={LEGThree} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={LEGFour} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={LEGFive} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
