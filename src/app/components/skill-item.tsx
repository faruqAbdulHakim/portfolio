// Types
import { Skill } from '@/types';

// UI Components
import { Chip } from '@nextui-org/react';

type Props = Readonly<{
  skill: Skill;
}>;

export default function SkillItem({ skill }: Props) {
  return (
    <li>
      <Chip variant='flat'>{skill}</Chip>
    </li>
  );
}
