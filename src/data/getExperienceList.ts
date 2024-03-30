export type Experience = {
  position: string;
  location: string;
  type?: string;
  startDate: Date;
  endDate: Date;
};

export function getExperienceList(): Experience[] {
  return [
    {
      position: 'Freelance Developer',
      location: 'Upwork',
      type: 'Freelance',
      startDate: new Date('2022-11'),
      endDate: new Date(),
    },
    {
      position: 'Mobile Development Cohort',
      location: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      startDate: new Date('2023-02'),
      endDate: new Date('2023-07'),
    },
    {
      position: 'Programming Laboratory Assistant',
      location: 'University of Jember',
      type: 'Contract',
      startDate: new Date('2021-07'),
      endDate: new Date('2023-06'),
    },
  ];
}
