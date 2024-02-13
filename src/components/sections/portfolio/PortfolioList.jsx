import getPortfolioList from '@/data/getPortfolioList';
import PortfolioItem from './PortfolioItem';

const PortfolioList = () => {
  const portfolioList = getPortfolioList();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-6">
      {portfolioList.map((porto) => (
        <PortfolioItem key={porto.title} porto={porto} />
      ))}
    </div>
  );
};

export default PortfolioList;
