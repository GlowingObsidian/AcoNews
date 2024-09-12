import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { News } from "../interfaces";

function NewsCard({ news }: { news: News }) {
  return (
    <Card className="max-w-sm hover:-translate-y-2 transform hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="relative max-w-xl h-60">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="w-full h-60 rounded-t-sm"
            src={news.image}
            alt="Random image"
          />
        }
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-sm"></div>
        <div className="mx-6 mb-5 absolute inset-0 flex flex-col justify-end">
          <h2 className="text-white text-xl font-bold">{news.title}</h2>
        </div>
      </div>
      <CardContent className="mt-6 space-y-3">
        <div className="flex items-center gap-x-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />{" "}
          {new Date(news.publishedAt).toLocaleDateString("en-GB", {
            dateStyle: "full",
          })}
        </div>
        <div className="text-sm">{news.content.split("[")[0]}</div>
      </CardContent>
      <CardFooter className="px-6 py-3 bg-gray-50 overflow-hidden rounded-b-sm">
        <div className="w-full flex items-center justify-between">
          <div text-sm text-gray-600>
            {news.source.name}
          </div>
          <Button variant="outline" asChild>
            <Link href={news.url} replace target="_blank">
              <div className="w-full flex gap-x-2 items-center justify-between">
                <p>Read More</p> <ExternalLink className="h-4 w-4" />
              </div>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default NewsCard;
