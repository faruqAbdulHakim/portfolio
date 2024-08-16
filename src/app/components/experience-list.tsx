import { Experience } from '@/types';
import ExperienceItem from './experience-item';

type Props = {
  experiencesPromise: Promise<Experience[]>;
};

export default async function ExperienceList({ experiencesPromise }: Props) {
  const experiences = await experiencesPromise;

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
