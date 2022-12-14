import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  return (
    <Link
      to={props.to}
      onClick={props.onClick}
      className={styles.navigation_item}
    >
      {props.children}
    </Link>
  );
};

export default NavigationItem;
