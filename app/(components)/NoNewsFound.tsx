"use client";

import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

function NoNewsFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-foreground p-4">
      <div className="flex flex-col items-center">
        <Newspaper className="h-16 w-16" />
        <h1 className="text-4xl font-bold mb-4">No News Found</h1>
        <p className="text-lg mb-8">
          We couldn&apos;t find any news articles matching your search criteria.
        </p>
        <Button
          variant="default"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => {
            router.push("/");
          }}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}

export default NoNewsFound;
