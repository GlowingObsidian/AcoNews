"use client";

import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Error() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4 text-[hsl(var(--destructive))]">
        <CircleAlert className="h-20 w-20" />{" "}
      </div>
      <h1 className="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-center">
        Oops! An Error Occurred
      </h1>
      <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-[hsl(var(--muted-foreground))] text-center max-w-md">
        We&apos;re sorry, but something went wrong while processing your
        request.
      </p>
      <div className="flex items-center space-x-4">
        <Button variant="default" className="flex items-center" asChild>
          <Link href="/">Go Home</Link>
        </Button>
        <Button
          variant="outline"
          className="flex items-center"
          onClick={() => router.refresh()}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default Error;
