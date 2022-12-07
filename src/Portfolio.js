import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Container from './components/UI/Container/Container';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Connects from './pages/Connects/Connects';

const Portfolio = () => {
  const location = useLocation();

  return (
    <Container>
      <Header />
      <TransitionGroup appear={true} enter={true} exit={false}>
        <CSSTransition key={location.key} classNames="fade" timeout={800}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/connects" element={<Connects />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default Portfolio;
