import { DUMMY_NEWS } from "@/dummy_news";
import { NewsType } from "@/types/news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  const result = DUMMY_NEWS.reduce((years: string[], news) => {
    const year = new Date(news.date).getFullYear();

    if (!years.includes(`${year}`)) {
      years.push(`${year}`);
    }

    return years;
  }, []);

  return result;
}

export function getAvailableNewsMonths(year: number) {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear = new Date(news.date).getFullYear();
    const month = new Date(news.date).getMonth();

    if (newsYear === year && !months.includes(month)) {
      months.push(month);
    }

    return months;
  }, []);
}

export function getNewsForYear(year: number) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();

    return newsYear === year;
  });
}
