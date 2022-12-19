import ProjectItem from './ProjectItem';
import styles from './ProjectList.module.css';

const ProjectsList = (props) => {
  return (
    <div className={`${styles.project_list} ${props.className}`}>
      {props.items.map((item, index) => {
        return (
          <ProjectItem
            key={index}
            image_url={item.image_url}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
