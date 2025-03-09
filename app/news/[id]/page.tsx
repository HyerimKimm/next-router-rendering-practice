import { DUMMY_NEWS } from "@/dummy_news";
import styles from "./page.module.css";

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

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <img
          src={`/images/news/${news?.image}`}
          alt={news?.title}
          className={styles.poster}
        />
        <h1>{news?.title}</h1>
        <time dateTime={news?.date}>{news?.date}</time>
      </header>
      <p>{news?.content}</p>
    </article>
  );
}
