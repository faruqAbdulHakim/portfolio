// Data Source
import { getSkillList } from '@/data';

// Components
import SkillItem from './skill-item';

export default async function SkillList() {
  const skills = getSkillList();

  return (
    <ul className='flex flex-wrap gap-4'>
      {skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </ul>
  );
}
