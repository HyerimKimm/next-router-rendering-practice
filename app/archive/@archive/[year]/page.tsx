import NewsList from "@/components/news_list/NewsList";
import { getNewsForYear } from "@/lib/news";

export default function YearFilteredArchivePage({
  params,
}: {
  params: {
    year: string;
  };
}) {
  const newsYear = Number(params.year);

  const newsList = getNewsForYear(newsYear);

  return <NewsList newsList={newsList} />;
}
