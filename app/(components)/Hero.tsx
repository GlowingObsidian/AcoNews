import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { News } from "../interfaces";

function Hero({ news }: { news: News }) {
  return (
    <div className="relative h-[30vh] md:h-[60vh]">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={news.image}
          alt="News Image"
          className="w-full h-[30vh] md:h-[60vh] object-cover"
        />
      }
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center text-white">
        <div className="max-w-3xl text-center flex flex-col items-center gap-y-3">
          <h1 className="text-lg md:text-3xl lg:text-5xl font-bold">
            {news.title}
          </h1>
          <p className="hidden md:block text-md lg:text-lg">
            {news.description}
          </p>
          <Button asChild className="text-sm md:max-w-48 md:text-lg">
            <Link target="_blank" href={news.url}>
              <div className="w-full flex gap-x-2 items-center justify-between">
                <p>Read Full Story</p> <ExternalLink />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
