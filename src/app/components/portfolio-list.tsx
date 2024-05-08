// Data Source
import { getPortfolioList } from '@/data';

// Components
import PortfolioItem from './portfolio-item';

type Props = Readonly<{
  limit?: number
}>

export default async function PortfolioList({ limit }: Props) {
  const portfolios = getPortfolioList();

  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6'>
      {portfolios.slice(0, limit).map((portfolio) => (
        <PortfolioItem key={portfolio.title} portfolio={portfolio} />
      ))}
    </ul>
  );
}
