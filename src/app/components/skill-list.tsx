// UI Components
import { Chip } from '@nextui-org/react';

export default async function SkillList() {
  const skills = [
    'Figma',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next',
    'Node.js',
    'Nest.js',
    'PostgreSQL',
    'MySQL',
    'Android',
    'Kotlin',
    'Jetpack Compose',
    'HTML Email',
    'And more',
  ];

  return (
    <ul className='flex flex-wrap gap-4 select-none'>
      {skills.map((skill) => (
        <li key={skill}>
          <Chip variant='flat' className='transition-all hover:bg-content3'>
            {skill}
          </Chip>
        </li>
      ))}
    </ul>
  );
}
