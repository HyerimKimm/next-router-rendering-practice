import NewsList from "@/components/news_list/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
} from "@/lib/news";
import styles from "./page.module.css";
import Link from "next/link";
import { NewsType } from "@/types/news";

export default function YearFilteredArchivePage({
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
  const monthLink: number[] = selectedYear
    ? getAvailableNewsMonths(Number(selectedYear))
    : [];

  let newsList: NewsType[] = [];

  if (selectedYear && !selectedMonth) {
    newsList = getNewsForYear(Number(filter[0]));
  } else if (selectedYear && selectedMonth) {
  }

  return (
    <>
      <header>
        <nav>
          <ul className={styles.list_wrap}>
            {yearLink.map((link) => (
              <li key={link} className={styles.list_item}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
          <ul className={styles.list_wrap}>
            {monthLink.map((link) => {
              return (
                <li key={link} className={styles.list_item}>
                  <Link href={`/archive/${selectedYear}/${link}`}>
                    {link}월
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <NewsList newsList={newsList} />
    </>
  );
}
