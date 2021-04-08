import Link from "next/link";
import styles from '@components/Buttons/Buttons.module.scss';

export default function ActionButton({ children, type, href, onClick }) {
  const Button = () => {
    let err = 'verifica el buen uso del componente.';
    if(href && type) err = 'no puedes declarar href y type. Si deseas un enlace, escribe solo href.';
    else if(href && onClick) err = 'no puedes declarar href y onClick. Si deseas un enlace, escribe solo href.';
    else if (href) {
      if (href.indexOf('http') < 0) {
        return (
          <Link href={href}>
            <a className={styles.ActionButton}>{children}</a>
          </Link>
        );
      } else {
        return (
          <a href={href} target="_blank" className={styles.ActionButton}>
            {children}
          </a>
        );
      }
    } else if(onClick || type === 'submit') return <button className={styles.ActionButton} type={type || "button"} onClick={onClick || null}>{children}</button>;
    return `ActionButton Error: ${err}`;
  };

  return <Button/>;
}
