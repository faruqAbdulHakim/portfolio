import ContactSection from '@/components/sections/contact/ContactSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import IntroductionSection from '@/components/sections/introduction/IntroductionSection';
import PortfolioSection from '@/components/sections/portfolio/PortfolioSection';
import ProfileSection from '@/components/sections/profile/ProfileSection';
import SkillsSection from '@/components/sections/skills/SkillsSection';

const Homepage = () => {
  return (
    <div className="items-center w-10/12 max-w-[960px] mx-auto py-8 space-y-8 text-very-dark-blue">
      <ProfileSection />
      <IntroductionSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
