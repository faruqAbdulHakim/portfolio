import MarkdownPreviewer from '@/components/markdown-previewer';
import { Experience } from '@/types';

type Props = {
  experiencesPromise: Promise<Experience[]>;
};

export default async function ExperiencesDetail({ experiencesPromise }: Props) {
  const experiences = await experiencesPromise;

  const dateToShow = (input: string) => {
    return new Date(input).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div>
      <ol className='pl-2'>
        {experiences.map((experience) => (
          <li key={experience.id} className='pl-8 py-4 border-l-4 relative'>
            <h3 className='text-lg font-bold'>{experience.position}</h3>
            <p className='text-sm leading-snug flex gap-1'>
              {[experience.location, experience.type]
                .filter((it) => !!it)
                .join(' · ')}
            </p>
            <p className='text-sm leading-snug flex gap-1'>
              {experience.start_at ? dateToShow(experience.start_at) : null} -{' '}
              {experience.end_at ? dateToShow(experience.end_at) : 'Present'}
            </p>
            {experience.description && (
              <MarkdownPreviewer content={experience.description} />
            )}
            <div className='absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-background border-4'></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
