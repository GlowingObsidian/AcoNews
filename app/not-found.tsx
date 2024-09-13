"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-6xl sm:text-9xl font-bold mb-4 text-[hsl(var(--primary))]">
        404
      </div>
      <h1 className="text-2xl sm:text-4xl font-semibold mb-6 text-center">
        Oops! Page Not Found
      </h1>
      <p className="text-lg sm:text-xl mb-8 text-[hsl(var(--muted-foreground))] text-center max-w-md">
        The page you are looking for might have been removed or is temporarily
        unavailable.
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

export default NotFound;
