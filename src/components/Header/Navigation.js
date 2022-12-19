import { BiX } from 'react-icons/bi';

import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem';

const Navigation = (props) => {
  return (
    <nav
      className={`${styles.navigation} ${props.hidden ? styles.hidden : ''}`}
    >
      <NavigationItem onClick={props.onClose} to="/">
        Home
      </NavigationItem>
      <NavigationItem onClick={props.onClose} to="/projects">
        Projects
      </NavigationItem>
      <NavigationItem onClick={props.onClose} to="/contact">
        Contact
      </NavigationItem>
      <button type="button" className={styles.x_btn} onClick={props.onClose}>
        <BiX size={24} />
      </button>
    </nav>
  );
};

export default Navigation;
