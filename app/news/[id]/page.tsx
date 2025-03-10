import { DUMMY_NEWS } from "@/dummy_news";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type NewsDetailPageParamsType = {
  id: string;
};

export default function NewsDetailPage({
  params,
}: {
  params: NewsDetailPageParamsType;
}) {
  const newsId = params.id;

  const news = DUMMY_NEWS.find((news) => news.id === newsId);

  if (!news) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <img
          src={`/images/news/${news?.image}`}
          alt={news?.title}
          className={styles.poster}
        />
        <h1>{news.title}</h1>
        <time dateTime={news?.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
