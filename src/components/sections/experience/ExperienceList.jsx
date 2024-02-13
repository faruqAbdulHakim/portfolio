import React from 'react';
import ExperienceItem from './ExperienceItem';
import getExperienceList from '@/data/getExperienceList';

const ExperienceList = () => {
  const experienceList = getExperienceList();

  return (
    <div className="space-y-6">
      {experienceList.map((experience) => (
        <ExperienceItem
          key={experience.position + experience.location}
          experience={experience}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
