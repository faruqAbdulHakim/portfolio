import { Portfolio } from '@/types';
import PortfolioItem from './portfolio-item';

type Props = {
  portfoliosPromise: Promise<Portfolio[]>;
};

export default async function PortfolioList({ portfoliosPromise }: Props) {
  const portfolios = await portfoliosPromise;

  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6'>
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.title} portfolio={portfolio} />
      ))}
    </ul>
  );
}
