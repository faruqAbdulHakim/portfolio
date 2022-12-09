import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.name}>Faruq Abdul Hakim</h1>
      <p className={styles.desc1}>Front End</p>
      <p className={styles.desc2}>Developer</p>
    </div>
  );
};

export default Home;
