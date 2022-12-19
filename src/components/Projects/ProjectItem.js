import styles from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
    <div className={styles.project_item}>
      <img src={props.image_url} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default ProjectItem;
