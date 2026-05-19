import { DashboardFooterLists } from "@/constants/DashboardFooterLists";
import { AlertDialog, Box, Button, Text } from "@radix-ui/themes";
import Image from "next/image";
import facebookImage from "@/public/dashboard/admin/facebook.png";
import emailImage from "@/public/dashboard/admin/email.png";

const DashboardFooter = () => {
  return (
    <footer className="mt-8 rounded-lg bg-[#F7F3ED] px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* Left */}
        <Box className="space-y-3">
          <h5 className="text-xl font-light text-[#702E1C]">MAK</h5>
          <Text
            as="p"
            className="lg:w-[80%] 2xl:w-[55%] text-sm text-[#54433F]"
          >
            © 2024 MAK CAMBODIAN BBQ. HERITAGE IN EVERY JAR.
          </Text>
        </Box>

        {/* Center */}
        <Box className="md:mx-auto space-y-3">
          <h5 className="font-semibold text-[#54433F]">System</h5>
          <ul className="space-y-2">
            {DashboardFooterLists.map((list) => (
              <li key={list.title}>
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <button className="text-sm text-left cursor-pointer hover:underline hover:underline-offset-2">
                      {list.title}
                    </button>
                  </AlertDialog.Trigger>

                  <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>{list.title}</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                      {list.description}
                    </AlertDialog.Description>

                    <div className="flex justify-end mt-4">
                      <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                          Back
                        </Button>
                      </AlertDialog.Cancel>
                    </div>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </li>
            ))}
          </ul>
        </Box>

        {/* Right */}
        <div className="flex justify-center md:justify-end gap-4">
          <a href="https://www.facebook.com" target="_blank">
            <Image
              src={facebookImage}
              alt="Mak Facebook Page"
              width={36}
              height={36}
              className="hover:scale-110 transition"
            />
          </a>

          <a href="mailto:example@gmail.com">
            <Image
              src={emailImage}
              alt="Mak email"
              width={36}
              height={36}
              className="hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
