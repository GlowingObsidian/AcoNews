import NewsCard from "../(components)/NewsCard";
import { News } from "../interfaces";
import apiClient from "../services/api-client";

async function page({
  searchParams,
}: {
  searchParams: {
    q?: string;
    country?: string;
    lang?: string;
  };
}) {
  const response = await apiClient.get("search", {
    params: {
      lang: searchParams.lang,
      q: `"${searchParams.q}"`,
      country: searchParams.country,
    },
  });

  const news: News[] = response.data.articles;

  return (
    <div className="my-10 space-y-10 px-5 md:px-10">
      <h1 className="text-center text-3xl md:text-5xl">Search Results</h1>
      <div className="grid gap-x-12 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>
    </div>
  );
}

export default page;
