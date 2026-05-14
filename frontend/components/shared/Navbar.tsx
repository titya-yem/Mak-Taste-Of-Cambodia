"use client";

import Image from "next/image";
import Link from "next/link";
import person from "@/public/person.svg";
import cartImage from "@/public/cart.svg";
import equalSVG from "@/public/equal.svg";

import { usePathname, useRouter } from "next/navigation";
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

  const cart = useSelector((state: RootState) => state.cart);
  const { isLoggedIn, loading } = useSelector((state: RootState) => state.auth);

  const handleSignout = async () => {
    try {
      await api.post("/user/signout");
      dispatch(signout());

      router.push("/");
      router.refresh();
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="border-b border-gray-200 bg-[#FDF9F3]">
      <Container>
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <h3 className="text-[#702E1C] font-bold text-lg">Mak</h3>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            <NavLinks pathname={pathname} />

            {loading ? (
              <div className="w-24 h-6 bg-gray-200 animate-pulse rounded" />
            ) : (
              <AuthSection
                isLoggedIn={isLoggedIn}
                hanbleSignout={handleSignout}
              />
            )}
          </nav>

          {/* Right Icons */}
          <div className="relative hidden md:flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative cursor-pointer">
              <Image src={cartImage} alt="cart" width={20} height={20} />

              {cart.totalQuantity > 0 && (
                <div className="absolute -top-2 -right-2 px-1 text-xs rounded-full text-[#FDF9F3] bg-[#702E1C]">
                  {cart.totalQuantity}
                </div>
              )}
            </Link>

            {/* User Icon */}
            {loading ? (
              <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full" />
            ) : isLoggedIn ? (
              <Link href="/dashboard" className="cursor-pointer">
                <Image src={person} alt="dashboard" width={20} height={20} />
              </Link>
            ) : (
              <Link href="/signin" className="cursor-pointer">
                <Image src={person} alt="signin" width={20} height={20} />
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
                      <div className="w-24 h-6 bg-gray-200 animate-pulse rounded mt-2" />
                    ) : (
                      <AuthSection
                        isLoggedIn={isLoggedIn}
                        hanbleSignout={handleSignout}
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
