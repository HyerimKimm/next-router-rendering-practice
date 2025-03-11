import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

import styles from "./page.module.css";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header>
      <nav>
        <ul className={styles.list_wrap}>
          {links.map((link) => (
            <li key={link} className={styles.list_item}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
