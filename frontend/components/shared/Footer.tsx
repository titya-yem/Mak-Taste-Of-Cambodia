"use client";

import { navbarLists } from "@/constants/NavbarLists";
import { Box, Container, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import facebookImage from "@/public/facebook.png";
import gmailImage from "@/public/gmail.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-[#F7F3ED] border-t border-gray-200">
      <Container className="py-12 px-4">
        {/* MAIN GRID */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* MAK */}
          <Box className="text-center md:text-left space-y-2">
            <h5 className="text-[#702E1C] font-semibold">MAK</h5>
            <Text as="p" className="text-gray-400 text-sm leading-relaxed">
              © 2026 Mak Taste Of Cambodia. Heritage in every package.
            </Text>
          </Box>

          {/* GO TO */}
          <Box className="text-center md:text-left space-y-3">
            <h5 className="text-[#702E1C] font-semibold">GO TO</h5>

            <div className="flex flex-col gap-2">
              {navbarLists.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`text-sm ${
                    pathname === item.url
                      ? "font-semibold underline underline-offset-4 text-[#702E1C]"
                      : "text-gray-400 hover:text-[#702E1C] hover:underline underline-offset-4 transition"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </Box>

          {/* LEGAL */}
          <Box className="text-center md:text-left space-y-3">
            <h5 className="text-[#702E1C] font-semibold">LEGAL</h5>

            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Text>PRIVACY POLICY</Text>
              <Text>TERMS OF SERVICE</Text>
              <Text>SHIPPING & RETURNS</Text>
            </div>
          </Box>

          {/* CONNECT */}
          <Box className="text-center md:text-left space-y-3">
            <h5 className="text-[#702E1C] font-semibold">CONNECT</h5>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.facebook.com/">
                <Image
                  src={facebookImage}
                  alt="facebook"
                  className="w-8 hover:scale-110 transition"
                />
              </a>

              <a href="mailto:thitya.yem.photo@gmail.com">
                <Image
                  src={gmailImage}
                  alt="gmail"
                  className="w-8 hover:scale-110 transition"
                />
              </a>
            </div>
          </Box>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
