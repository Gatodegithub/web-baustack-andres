import styles from "@components/NavBar/NavBar.module.scss";
import Link from "next/link";

export default function MenuLink({firstHref, secondHref}) {
  return (
    <div className={styles.SignButton}>
      <Link href={firstHref} >signup</Link>
      <Link href={secondHref} >login</Link>
    </div>
  );
}
