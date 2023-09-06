import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import App from './App';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
);
