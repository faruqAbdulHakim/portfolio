import { Chip } from '@nextui-org/react';

export default function SkillItem({ skill }) {
  return <li><Chip variant='flat'>{skill}</Chip></li>;
}
