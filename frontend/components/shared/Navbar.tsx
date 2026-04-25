"use client";

import { navbarLists } from "@/constants/NavbarLists";
import Image from "next/image";
import Link from "next/link";
import person from "@/public/person.svg";
import cart from "@/public/cart.svg";
import { usePathname } from "next/navigation";
import equalSVG from "@/public/equal.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@radix-ui/themes";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-[#FDF9F3]">
      <Container>
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <h3 className="text-[#702E1C] font-bold text-lg">Mak</h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between gap-4">
            {navbarLists.map((item) => {
              return (
                <ul key={item.title}>
                  <Link
                    className={`${
                      pathname === item.url
                        ? "font-bold underline underline-offset-4 text-[#702E1C]"
                        : "hover:underline hover:underline-offset-4 ease-in-out duration-300 text-gray-600"
                    }`}
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </ul>
              );
            })}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center justify-between gap-4">
            <Link href="/cart">
              <Image src={cart} alt="cart" width={20} height={20} />
            </Link>
            <Link href="/signin">
              <Image src={person} alt="person" width={20} height={20} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Image src={equalSVG} alt="menu" width={25} height={25} />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold text-[#702E1C]">
                  Mak Taste Of Cambodia
                </SheetTitle>

                <SheetDescription asChild>
                  <nav className="flex flex-col gap-4 pt-10">
                    {navbarLists.map((item) => (
                      <ul key={item.title}>
                        <li>
                          <Link
                            className={`${
                              pathname === item.url
                                ? "font-medium underline underline-offset-4 text-[#702E1C]"
                                : "text-gray-600"
                            }`}
                            href={item.url}
                          >
                            {item.title}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
