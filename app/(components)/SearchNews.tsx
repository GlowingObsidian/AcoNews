"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { countries, languages } from "../services/static-data";

function SearchNews() {
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
    <div className="hidden md:flex gap-x-3">
      <div className="flex items-center gap-x-2">
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
          <Button variant="secondary" className="rounded-full">
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Country</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
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
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Language</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
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
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="rounded-full" onClick={search}>
        Search
      </Button>
    </div>
  );
}

export default SearchNews;
