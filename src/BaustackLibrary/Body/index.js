import LibGroup from './LibGroup';
import LibMenu from './LibMenu';
import styles from '../Library.module.scss';

export default function Body ({library}){
  const {sections} = library;
  sections.map(el => console.log(el.title))
  //data: [ { title: 'Action Button', id: '_PUH9E046', component: [Object] } ]
  return (
    <div className={styles.Body}>
      {sections.map(el => (
        <LibGroup group={el}/>
      ))}
      <LibMenu/>
    </div>
  );
};