import Link from "next/link";
import classes from "./MainHeader.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header_wrap}>
      <Link href="/">🏠</Link>
      <Link href="/news">news</Link>
    </header>
  );
}
