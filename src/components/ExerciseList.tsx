import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";

type props = {
  exerciseList: string[];
};

export default function ExerciseList({ exerciseList }: props) {
  return (
    <section>
      <div>
        <Link href={"/"} className="flex flex-col">
          <Button>Back Home</Button>
        </Link>
        {exerciseList.map((exercise, index) => (
          <>
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Exercise {index + 1}</AccordionTrigger>
                <AccordionContent>{exercise}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        ))}
      </div>
    </section>
  );
}
