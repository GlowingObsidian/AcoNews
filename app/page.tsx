import NewsCard from "./(components)/NewsCard";

const data = {
  title:
    "Juno Tab 3 este o tabletă Linux de 699 USD cu un procesor Intel Alder Lake-N",
  description:
    "Pe scurt: Specialiștii Linux din Londra Juno Computers a lansat o nouă tabletă PC, Juno Tab 3. Dispune de un procesor Intel Alder Lake-N și oferă o gamă de trei…",
  content:
    "Puțin scump pentru hardware-ul oferit\nPe scurt: Specialiștii Linux din Londra Juno Computers a lansat o nouă tabletă PC, Juno Tab 3. Dispune de un procesor Intel Alder Lake-N și oferă o gamă de trei distribuții Linux: Ubuntu, Kubuntu sau Mobian Phosh... [1974 chars]",
  url: "https://www.noobz.ro/2024/09/12/juno-tab-3-este-o-tableta-linux-de-699-usd-cu-un-procesor-intel-alder-lake-n/",
  image:
    "https://www.noobz.ro/wp-content/uploads/2024/09/1726157408_Juno-Tab-3-este-o-tableta-Linux-de-699-USD.jpg",
  publishedAt: "2024-09-12T16:10:08Z",
  source: {
    name: "Noobz.ro",
    url: "https://www.noobz.ro",
  },
};

function page() {
  return (
    <div>
      Aconews
      <NewsCard news={data} />
    </div>
  );
}

export default page;
