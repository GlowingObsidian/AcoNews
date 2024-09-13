import { Newspaper } from "lucide-react";
import Logo from "./Logo";
import SearchNews from "./SearchNews";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="sticky top-0 w-full z-50 p-3 bg-white/30 backdrop-blur-md border-b border-white/10 shadow-lg flex justify-between items-center">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <SearchNews />
      </div>
    </nav>
  );
}

export default NavBar;
