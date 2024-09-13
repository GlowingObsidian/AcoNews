"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { categories, countries } from "../services/static-data";

function SearchHeadlines() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = () => {
    const params = new URLSearchParams(searchParams);
    params.set("q", searchRef.current!.value);
    params.set("category", selectedCategory);
    params.set("country", selectedCountry);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md rounded-lg p-4 border border-blue-100">
      <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
        Search Headlines
      </h2>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Input
            ref={searchRef}
            type="text"
            placeholder="Explore headlines..."
            className="bg-white"
          />
        </div>
        <div className="flex space-x-2">
          <Select onValueChange={(category) => setSelectedCategory(category)}>
            <SelectTrigger className="w-full text-xs h-8 bg-white shadow-sm">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(country) => setSelectedCountry(countries[country])}
          >
            <SelectTrigger className="w-full text-xs h-8 bg-white shadow-sm">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(countries).map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={search}
            className="bg-indigo-600 text-white hover:bg-indigo-700 text-xs h-8 rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105"
          >
            Search
          </Button>
        </div>
        <div className="flex flex-wrap gap-1"></div>
      </div>
    </div>
  );
}

export default SearchHeadlines;
