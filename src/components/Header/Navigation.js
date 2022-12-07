import { BiX } from 'react-icons/bi';

import TextLink from '../UI/TextLink/TextLink';
import styles from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav
      className={`${styles.navigation} ${props.hidden ? styles.hidden : ''}`}
    >
      <TextLink onClick={props.onClose} to="/">
        Home
      </TextLink>
      <TextLink onClick={props.onClose} to="/projects">
        Projects
      </TextLink>
      <TextLink onClick={props.onClose} to="/connects">
        Connects
      </TextLink>
      <button type="button" className={styles.x_btn} onClick={props.onClose}>
        <BiX size={24} />
      </button>
    </nav>
  );
};

export default Navigation;
