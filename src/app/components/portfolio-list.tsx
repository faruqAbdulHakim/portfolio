// Components
import { Portfolio } from '@/types';
import PortfolioItem from './portfolio-item';

type Props = {
  portfolios: Portfolio[];
};

export default async function PortfolioList({ portfolios }: Props) {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6'>
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.title} portfolio={portfolio} />
      ))}
    </ul>
  );
}
