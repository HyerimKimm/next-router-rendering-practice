import NewsList from "@/components/news_list/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForMonth,
  getNewsForYear,
} from "@/lib/news";
import styles from "./page.module.css";
import { NewsType } from "@/types/news";
import ArchiveFilterNav from "../filter_nav/ArchiveFilterNav";

export default async function YearFilteredArchivePage({
  params,
}: {
  params: {
    filter: string[];
  };
}) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  const yearLink = getAvailableNewsYears();
  const monthLink: string[] = selectedYear
    ? getAvailableNewsMonths(Number(selectedYear))
    : [];

  let newsList: NewsType[] = [];

  if (selectedYear && !selectedMonth) {
    newsList = getNewsForYear(Number(filter[0]));
  } else if (selectedYear && selectedMonth) {
    newsList = getNewsForMonth(Number(filter[0]), Number(filter[1]));
  }

  return (
    <>
      <header>
        <nav className={styles.nav_wrap}>
          <ArchiveFilterNav
            filterList={yearLink.map((year) => ({
              href: `${year}`,
              title: `${year}년`,
            }))}
            selectedFilter={selectedYear}
          />
          <ArchiveFilterNav
            filterList={monthLink.map((month) => ({
              href: `${selectedYear}/${month}`,
              title: `${month}월`,
            }))}
            selectedFilter={`${selectedYear}/${selectedMonth}`}
          />
        </nav>
      </header>
      <NewsList newsList={newsList} />
    </>
  );
}
