import styles from './SocialMedia.module.scss';
import { FacebookIcon, TwitterIcon } from '@components/SVG';

export default function SocialMedia() {
  const arrayIcons = [
    {
      svgComponent: <FacebookIcon />,
      href: 'www.google.com',
    },
    {
      svgComponent: <TwitterIcon />,
      href: 'www.twitter.com',
    },
  ];

  return (
    <div>
      <ul className={styles.ListSocialMedia}>
        {arrayIcons.map((el, index) => (
          <li key={`lista${index}`}>
            <a href={el.href}>{el.svgComponent}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
