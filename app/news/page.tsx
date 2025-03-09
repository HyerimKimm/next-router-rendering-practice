import Link from "next/link";

import styles from "./page.module.css";
import { DUMMY_NEWS } from "@/dummy_news";

export default function NewsPage() {
  return (
    <div className={styles.page}>
      <h1>News Page</h1>
      <ul className={styles.news_list}>
        {DUMMY_NEWS.map((news) => (
          <li key={news.id} className={styles.news_item}>
            <Link href={`/news/${news.id}`}>
              <img
                src={`/images/news/${news.image}`}
                className={styles.news_img}
                alt={news.title}
              />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
