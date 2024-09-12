import NewsCard from "./(components)/NewsCard";
import { News } from "./interfaces";
import apiClient from "./services/api-client";

async function page() {
  const response = await apiClient.get("top-headlines", {
    params: {
      lang: "en",
      // category: "technology",
    },
  });

  const news: News[] = response.data.articles;

  return (
    <div>
      Aconews
      <div className="my-10 p-5 grid gap-x-10 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>
    </div>
  );
}

export default page;
