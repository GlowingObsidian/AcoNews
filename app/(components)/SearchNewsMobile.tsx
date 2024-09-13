"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { countries, languages } from "../services/static-data";
import { DialogTitle } from "@radix-ui/react-dialog";

function SearchNewsMobile() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const search = () => {
    params.set("q", searchRef.current!.value);
    params.set("country", selectedCountry);
    params.set("lang", selectedLanguage);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-y-3" aria-describedby="">
        <DialogTitle className="text-center">Search News</DialogTitle>
        <div className="mt-5 flex items-center gap-x-2">
          <Search className="h-5 w-5" />
          <Input
            ref={searchRef}
            defaultValue={params.get("q") || ""}
            placeholder="Search News"
            className="max-w-md bg-white rounded-full"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              Country <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ScrollArea className="h-72">
              {Object.keys(countries).map((country) => (
                <DropdownMenuCheckboxItem
                  key={country}
                  checked={countries[country] === selectedCountry}
                  onClick={() => setSelectedCountry(countries[country])}
                >
                  {country}
                </DropdownMenuCheckboxItem>
              ))}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              Language <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ScrollArea className="h-72">
              {Object.keys(languages).map((language) => (
                <DropdownMenuCheckboxItem
                  key={language}
                  checked={languages[language] === selectedLanguage}
                  onClick={() => setSelectedLanguage(languages[language])}
                >
                  {language}
                </DropdownMenuCheckboxItem>
              ))}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="rounded-full" onClick={search}>
          Search
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default SearchNewsMobile;
