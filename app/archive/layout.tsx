import styles from "./layout.module.css";

export default function ArchiveLayout({
  archive,
  latest,
}: {
  archive: React.ReactNode;
  latest: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <h1>New Archive</h1>
      <section className={styles.section}>{archive}</section>
      <section className={styles.section}>{latest}</section>
    </div>
  );
}
