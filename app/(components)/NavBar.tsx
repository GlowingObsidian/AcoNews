"use client";

import { Input } from "@/components/ui/input";

function NavBar() {
  return (
    <nav className="sticky top-0 w-full z-50 p-3 bg-white/30 backdrop-blur-md border-b border-white/10 shadow-lg flex justify-between">
      <p className="text-4xl font-bold text-blue-500">AcoNews</p>
      <Input
        placeholder="Search News"
        className="max-w-md bg-white rounded-full"
      />
    </nav>
  );
}

export default NavBar;
