import ExerciseList from "@/components/ExerciseList";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import legOne from "../../assests/LEG1-1.png";
import legTwo from "../../assests/LEG1-2.png";
import legThree from "../../assests/LEG1-3.png";
import legFour from "../../assests/LEG1-4.png";
import legFive from "../../assests/LEG1-5.png";
import legSix from "../../assests/LEG1-6.png";
import legSeven from "../../assests/LEG1-7.png";
import legEight from "../../assests/LEG1-8.png";

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
      <div className="mt-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src={legOne} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={legTwo} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={legThree} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={legFour} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={legFive} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={legSix} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={legSeven} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={legEight} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
