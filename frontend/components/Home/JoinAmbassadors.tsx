import { Box, Container, Text } from "@radix-ui/themes";
import { Button } from "../ui/button";
import Image from "next/image";
import foodImage from "@/public/Home/Food display.png";

const JoinAmbassadors = () => {
  return (
    <section className="py-15 md:py-20 px-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 shadow-lg rounded-xl bg-[#702E1C]">
          <Box className="w-[80%] lg:w-[55%] md:pl-4 lg:pl-14 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl pt-4 font-bold text-white">
              Join Our Circle Of Ambassadors
            </h1>
            <Text
              as="p"
              className="lg:w-[80%] text-sm md:text-base py-2 md:py-6 lg:py-10 text-[#FFDBD2]"
            >
              We are looking for foodies, pitmasters, and heritage seekers to
              share the Mak experience. Get exclusive access to new blends and
              earn rewards.
            </Text>
            {/* send email */}
            <Button
              variant="ghost"
              className="p-4 lg:p-6 rounded-md text-[#702E1C] bg-white"
            >
              <a href="mailto:thitya.yem.photo@gmail.com">Apply Now</a>
            </Button>
          </Box>

          <Box>
            <Image
              src={foodImage}
              alt="Foods, Herbs, Vegetable, and suaces image"
              className="md:w-170 rounded-b-lg md:rounded-bl-none md:rounded-r-lg"
            />
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default JoinAmbassadors;
