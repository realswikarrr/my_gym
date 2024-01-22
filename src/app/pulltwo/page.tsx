import ExerciseList from "@/components/ExerciseList";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PULLOne from "../../assests/PULL2-1.png";
import PULLTwo from "../../assests/PULL2-2.png";
import PULLThree from "../../assests/PULL2-3.png";
import PULLFour from "../../assests/PULL2-4.png";
import PULLFive from "../../assests/PULL2-5.png";

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

      <div className="mt-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src={PULLOne} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PULLTwo} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PULLThree} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PULLFour} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PULLFive} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
