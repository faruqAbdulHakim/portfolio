import { NavLink } from 'react-router-dom';
import styles from './TextLink.module.css';

const TextLink = (props) => {
  return (
    <NavLink
      to={props.to}
      onClick={props.onClick}
      className={({ isActive }) =>
        `
          ${styles['text-link']} ${isActive ? styles['active'] : ''} 
          ${props.className}
        `
      }
    >
      {props.children}
    </NavLink>
  );
};

export default TextLink;
