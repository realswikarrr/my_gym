import ExerciseList from "@/components/ExerciseList";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PUSHOne from "../../assests/PUSH2-1.png";
import PUSHTwo from "../../assests/PUSH2-2.png";
import PUSHThree from "../../assests/PUSH2-3.png";
import PUSHFour from "../../assests/PUSH2-4.png";
import PUSHFive from "../../assests/PUSH2-5.png";

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

      <div className="mt-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src={PUSHOne} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PUSHTwo} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PUSHThree} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PUSHFour} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={PUSHFive} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
