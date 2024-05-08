export type Experience = {
  position: string;
  location: string;
  type?: 'Freelance' | 'Contract';
  startDate: Date;
  endDate?: Date;
  description?: string;
};
