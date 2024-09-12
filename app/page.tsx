import Hero from "./(components)/Hero";
import NewsCard from "./(components)/NewsCard";
import { News } from "./interfaces";
import { data } from "./services/response";

async function page() {
  // const response = await apiClient.get("top-headlines", {
  //   params: {
  //     lang: "en",
  //     // category: "technology",
  //   },
  // });

  const id = Math.floor(Math.random() * 10);

  const news: News[] = data;

  return (
    <div>
      <Hero news={data[id]} />
      <div className="my-10 p-5 space-y-10">
        <h1 className="text-center font-bold text-3xl md:text-5xl">
          Top Headlines
        </h1>
        <div className="grid gap-x-10 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
