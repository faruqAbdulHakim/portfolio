import getExperienceList from '@/data/getExperienceList';
import ExperienceItem from './experience-item';

export default async function ExperienceList() {
  const experiences = getExperienceList();

  return (
    <ul className='space-y-6'>
      {experiences.map((experience) => (
        <ExperienceItem
          experience={experience}
          key={experience.position + experience.location}
        />
      ))}
    </ul>
  );
}
