import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import styles from './Header.module.css';
import Navigation from './Navigation';

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const showNavigationHandler = () => {
    setShowNavigation(true);
  };

  const closeNavigationHandler = () => {
    setShowNavigation(false);
  };

  return (
    <div className={styles.header}>
      <h1>Hello</h1>
      <Navigation hidden={!showNavigation} onClose={closeNavigationHandler} />
      <button className={styles.menu_btn} onClick={showNavigationHandler}>
        <BiMenu size={24} />
      </button>
    </div>
  );
};

export default Header;
