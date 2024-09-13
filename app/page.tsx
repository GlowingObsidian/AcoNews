import Hero from "./(components)/Hero";
import NavBar from "./(components)/NavBar";
import NewsCard from "./(components)/NewsCard";
import Search from "./(components)/SearchHeadlines";
import { News } from "./interfaces";
import apiClient from "./services/api-client";
import { data } from "./services/static-data";

async function page({
  searchParams,
}: {
  searchParams: {
    q?: string;
    category?: string;
    country?: string;
  };
}) {
  // const response = await apiClient.get("top-headlines", {
  //   params: {
  //     lang: "en",
  //     q: searchParams.q,
  //     country: searchParams.country,
  //     category: searchParams.category,
  //   },
  // });

  // const news: News[] = response.data.articles;

  const news: News[] = data;

  const id = Math.floor(Math.random() * 10);

  return (
    <div>
      <NavBar />
      <Hero news={news[id]} />
      <div className="my-10 space-y-10 px-5 md:p-10">
        <h1 className="text-center font-bold text-3xl md:text-5xl">
          Top Headlines
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
