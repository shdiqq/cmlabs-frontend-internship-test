import Category from '../pages/category';
import Detail_Category from '../pages/detail/category';
import Detail_Meal from '../pages/detail/meal';

const routes = {
  '/': Category,
  '/index.html': Category,

  '/detail/category.html': Detail_Category,
  '/detail/meal.html': Detail_Meal,
};

export default routes;
