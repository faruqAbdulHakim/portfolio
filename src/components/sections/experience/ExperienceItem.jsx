import MyIcon from '@/components/icon/MyIcon';
import monthMapper from '@/utils/mapper/monthMapper';
import { PiBriefcaseLight } from 'react-icons/pi';
import ExperienceViewDetailsButton from './ExperienceViewDetailsButton';

/**
 *
 * @param {{
 *  experience: {
 *    position: string;
 *    location: string;
 *    type?: string;
 *    startDate: Date;
 *    endDate: Date;
 *  }
 * }} param0
 * @returns
 */
const ExperienceItem = ({ experience }) => {
  const { position, location, type, startDate, endDate } = experience;

  const startMonth = monthMapper(startDate.getMonth());
  const startYear = startDate.getFullYear();

  const endMonth = monthMapper(endDate.getMonth());
  const endYear = endDate.getFullYear();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <MyIcon Icon={PiBriefcaseLight} />
        <div>
          <p className="font-semibold text-base">{position}</p>
          <p className="font-normal text-sm leading-snug flex gap-1">
            <span>{location}</span>
            {location && type && <>·</>}
            {type && <span>{type}</span>}
          </p>
          <p className="font-normal text-sm leading-snug flex gap-1">
            {`${startMonth} ${startYear} - ${endMonth} ${endYear}`}
          </p>
        </div>
      </div>
      <ExperienceViewDetailsButton />
    </div>
  );
};

export default ExperienceItem;
