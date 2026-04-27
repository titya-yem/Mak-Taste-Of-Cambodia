import { navbarLists } from "@/constants/NavbarLists";
import Link from "next/link";

interface NavLinksProps {
  pathname: string;
  isMobile?: boolean;
}

const Navlinks = ({ pathname, isMobile = false }: NavLinksProps) => {
  return (
    <>
      {navbarLists.map((item) => (
        <ul key={item.title}>
          <li>
            <Link
              className={`${
                pathname === item.url
                  ? "font-bold underline text-[#702E1C]"
                  : "text-gray-600 hover:underline"
              } ${isMobile ? "text-base" : ""}`}
              href={item.url}
            >
              {item.title}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Navlinks;