// Import our custom CSS
import '../css/main.css';
import '../css/responsive.css';

// Import components
import './components/index';

// Import rotues
import routes from './routes/routes';
import UrlParser from './routes/url-parser';

// Import javascript file as needed
import './utils/firebase';

const detectRoute = () => {
  const url = UrlParser.parseActiveUrlWithCombiner();
  return routes[url];
};

window.addEventListener('load', () => {
  const route = detectRoute();
  route.init();
});
