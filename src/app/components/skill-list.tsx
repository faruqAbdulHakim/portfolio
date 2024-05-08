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
    'Express',
    'Postgre SQL',
    'Android',
    'Kotlin',
    'Jetpack Compose',
    'HTML Email',
    'etc',
  ];

  return (
    <ul className='flex flex-wrap gap-4'>
      {skills.map((skill) => (
        <li key={skill}>
          <Chip variant='flat'>{skill}</Chip>
        </li>
      ))}
    </ul>
  );
}
