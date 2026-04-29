import Link from "next/link";

interface AuthProps {
  isLoggedIn: boolean;
  hanbleSignout: () => void;
  isMobile?: boolean;
}

const AuthSection = ({ isLoggedIn, hanbleSignout, isMobile = false }: AuthProps) => {
  if (isLoggedIn) {
    return (
      <button
        onClick={hanbleSignout}
        className={`cursor-pointer hover:text-red-500 transition-colors ${isMobile ? "text-left" : "text-sm"}`}
      >
        Sign Out
      </button>
    );
  }

  return (
    <>
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
    </>
  );
};

export default AuthSection;