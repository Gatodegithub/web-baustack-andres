import styles from "@components/Contact/Contact.module.scss";
import {FacebookIcon, TwitterIcon} from '@components/SVG';

export default function SocialMedia() {

  const arrayIcons = [
    {
      icon: <FacebookIcon />,
      href: "www.google.com",
    },
    {
      icon: <TwitterIcon />,
      href: "www.twitter.com",
    },
  ];

  return (
    <div>
      <ul className={styles.ListSocialMedia}>
        {arrayIcons.map((el,index) => (
          <li key={`lista${index}`}><a href={el.href}>{el.icon}</a></li>
        ))}
      </ul>
    </div>
  )
}
