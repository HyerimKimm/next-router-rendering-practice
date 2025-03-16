import { DUMMY_NEWS } from "@/dummy_news";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const newsId = params.id;
  const news = DUMMY_NEWS.find((newsItem) => newsItem.id === newsId);

  if (!news) {
    notFound();
  }

  return (
    <div className={styles.modal_backdrop}>
      <div className={styles.modal}>
        <img
          src={`/images/news/${news.image}`}
          alt={news.title}
          className={styles.img}
        />
      </div>
    </div>
  );
}
