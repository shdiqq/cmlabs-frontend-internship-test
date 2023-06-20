// Import our custom CSS
import '../css/main.css';

// Import components
import './components/index';

// Import javascript file as needed
import Category from './pages/category';
import Detail_Category from './pages/detail/category';
import Detail_Meal from './pages/detail/meal';

import './utils/firebase';

const routes = {
  '/': Category,
  '/index.html': Category,
  
  '/detail/category.html': Detail_Category,
  '/detail/meal.html': Detail_Meal,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {

};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});