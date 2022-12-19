import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './Portfolio';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>
);
