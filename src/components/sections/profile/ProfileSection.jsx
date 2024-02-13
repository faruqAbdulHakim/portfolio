import Avatar from '@/components/avatar/Avatar';
import ProfileDownloadResumeButton from './ProfileDownloadResumeButton';

const ProfileSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex flex-col sm:flex-row text-center sm:text-left items-center gap-4">
        <Avatar src="/avatar.jpg" alt="Faruq" />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl leading-snug">Faruq Abdul Hakim</h1>
          <p className="font-normal text-base text-dark-gray">
            East Java, Indonesia
          </p>
        </div>
      </div>
      <ProfileDownloadResumeButton />
    </div>
  );
};

export default ProfileSection;
