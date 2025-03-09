import Link from "next/link";

import styles from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header_wrap}>
      <Link href="/" className={styles.button}>
        🏠
      </Link>
      <Link href="/news" className={styles.button}>
        news
      </Link>
    </header>
  );
}
