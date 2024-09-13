import Link from "next/link";
import Logo from "./Logo";
import SearchNews from "./SearchNews";
import SearchNewsMobile from "./SearchNewsMobile";
import { Suspense } from "react";

function NavBar() {
  return (
    <nav className="sticky top-0 w-full z-50 p-3 bg-white/30 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <Suspense>
          <SearchNews />
          <SearchNewsMobile />
        </Suspense>
      </div>
    </nav>
  );
}

export default NavBar;
