import ProjectsList from '../../components/Projects/ProjectsList';
import styles from './Projects.module.css';

const projectsList = [
  {
    image_url: '/assets/projects/pemro.png',
    name: 'Pemro: Profile Website',
  },
  {
    image_url: '/assets/projects/space-tourism.webp',
    name: 'Space Tourism Website',
  },
  {
    image_url: '/assets/projects/postgre.webp',
    name: 'Postgre: Event Registration Website',
  },
  {
    image_url: '/assets/projects/jokes-generator.webp',
    name: 'Jokes Generator',
  },
  {
    image_url: '/assets/projects/danaindoagri.webp',
    name: 'Dana Indoagri: Company Website',
  },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <ProjectsList items={projectsList} className={styles.project_list} />
    </div>
  );
};

export default Projects;
