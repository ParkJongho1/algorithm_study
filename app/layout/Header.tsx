import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerfix}>
      <header className={styles.header}>
        <Link href="/">
          <h1>hoJong devBlog</h1>
        </Link>
        <div>
          <ul className={styles.homemenu}>
            <Link className={styles.menu} href="/">
              Home
            </Link>
            <Link className={styles.menu} href="/About">
              About
            </Link>
            <Link className={styles.menu} href="https://github.com/ParkJongho1">
              GitHub
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
