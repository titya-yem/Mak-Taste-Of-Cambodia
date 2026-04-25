import { Container, Text } from "@radix-ui/themes";
import { Button } from "../ui/button";
import Link from "next/link";

const Storyteller = () => {
  return (
    <div className="py-15 md:py-20 px-4 bg-[#F7F3ED]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="md:w-[80%] lg:w-[60%] text-center">
            <h1 className="text-2xl md:text-4xl font-bold">
              Are you a Storyteller?
            </h1>
            <Text as="p" className="py-4 text-sm md:text-base text-[#54433F]">
              We are always looking for passionate chefs, home cooks, and
              cultural explorers to join our global network of Mak Ambassadors.
            </Text>
            <Button
              variant="ghost"
              className="p-4 md:p-6 rounded-sm cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#853823]"
            >
              <Link href="/storyteller">Apply Now</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Storyteller;
