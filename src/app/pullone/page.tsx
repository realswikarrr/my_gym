import ExerciseList from "@/components/ExerciseList";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PULLOne from "../../assests/PULL1-1.png";
import PULLTwo from "../../assests/PULL1-2.png";
import PULLThree from "../../assests/PULL1-3.png";
import PULLFour from "../../assests/PULL1-4.png";
import PULLFive from "../../assests/PULL1-5.png";

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
