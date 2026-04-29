"use client";

import Image from "next/image";
import Link from "next/link";
import person from "@/public/person.svg";
import cart from "@/public/cart.svg";
import { usePathname, useRouter } from "next/navigation";
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
import NavLinks from "./Navlinks";
import AuthSection from "./AuthSection";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { signout } from "@/store/slices/authslice";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn, loading } = useSelector((state: RootState) => state.auth);

const hanbleSignout = async () => {
  try {
    await api.post("/user/signout");
    dispatch(signout());
    
    router.push("/");
    router.refresh();
  } catch (error) {
    toast.error("Logout failed");
    console.error("Logout failed");
  }
};

  return (
    <header className="border-b border-gray-200 bg-[#FDF9F3]">
      <Container>
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/">
            <h3 className="text-[#702E1C] font-bold text-lg">Mak</h3>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-4">
            <NavLinks pathname={pathname} />
            {loading ? (
              <div className="w-24 h-6 bg-gray-200 animate-pulse rounded"></div>
            ) : (
              <AuthSection
                isLoggedIn={isLoggedIn}
                hanbleSignout={hanbleSignout}
              />
            )}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/cart">
              <Image src={cart} alt="cart" width={20} height={20} />
            </Link>

            {loading ? (
              <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
            ) : isLoggedIn ? (
              <button onClick={hanbleSignout}>
                <Image src={person} alt="logout" width={20} height={20} />
              </button>
            ) : (
              <Link href="/signin">
                <Image src={person} alt="person" width={20} height={20} />
              </Link>
            )}
          </div>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Image src={equalSVG} alt="menu" width={25} height={25} />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-[#702E1C] font-bold">
                  Mak Taste Of Cambodia
                </SheetTitle>

                <SheetDescription asChild>
                  <nav className="flex flex-col gap-4 pt-10">
                    <NavLinks pathname={pathname} isMobile />
                    {loading ? (
                      <div className="w-24 h-6 bg-gray-200 animate-pulse rounded mt-2"></div>
                    ) : (
                      <AuthSection
                        isLoggedIn={isLoggedIn}
                        hanbleSignout={hanbleSignout}
                        isMobile
                      />
                    )}
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