import getSkillList from '@/data/getSkillList';
import SkillItem from './SkillItem';

const SkillList = () => {
  const skillList = getSkillList();

  return (
    <div className="flex flex-wrap gap-3">
      {skillList.map((skill) => (
        <SkillItem key={skill}>{skill}</SkillItem>
      ))}
    </div>
  );
};

export default SkillList;
