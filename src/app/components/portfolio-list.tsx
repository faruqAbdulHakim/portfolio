// Data Source
import { getPortfolioList } from '@/data';

// Components
import PortfolioItem from './portfolio-item';

export default async function PortfolioList() {
  const portfolios = getPortfolioList();

  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6'>
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.title} portfolio={portfolio} />
      ))}
    </ul>
  );
}
