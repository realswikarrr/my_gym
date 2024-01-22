import ExerciseList from "@/components/ExerciseList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PUSHOne from "../../assests/PUSH1-1.png";
import PUSHTwo from "../../assests/PUSH1-2.png";
import PUSHThree from "../../assests/PUSH1-3.png";
import PUSHFour from "../../assests/PUSH1-4.png";
import PUSHFive from "../../assests/PUSH1-5.png";
import PUSHSix from "../../assests/PUSH1-6.png";

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
            <CarouselItem>
              <Image src={PUSHSix} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
