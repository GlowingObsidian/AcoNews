import { Yellowtail } from "next/font/google";
import Hero from "./(components)/Hero";
import NewsCard from "./(components)/NewsCard";
import Search from "./(components)/SearchHeadlines";
import { News } from "./interfaces";
import apiClient from "./services/api-client";

const caveat = Yellowtail({ subsets: ["latin"], weight: ["400"] });

async function page({
  searchParams,
}: {
  searchParams: {
    q?: string;
    category?: string;
    country?: string;
  };
}) {
  const response = await apiClient.get("top-headlines", {
    params: {
      lang: "en",
      q: searchParams.q,
      country: searchParams.country,
      category: searchParams.category,
    },
  });

  const news: News[] = response.data.articles;

  const id = Math.floor(Math.random() * 10);

  return (
    <div>
      <Hero news={news[id]} />
      <div className="my-10 space-y-10 px-5 md:px-10">
        <h1
          className={
            "text-center font-extrabold text-3xl md:text-5xl " +
            caveat.className
          }
        >
          Hot off the press
        </h1>
        <Search />
        <div className="grid gap-x-12 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {news.map(
            (article, index) =>
              index !== id && <NewsCard key={index} news={article} />
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
