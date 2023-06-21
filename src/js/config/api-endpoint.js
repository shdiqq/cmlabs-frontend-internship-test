const ApiEndpoint = {
  LIST_CATEGORY: `/categories.php`,
  FILTER_CATEGORY: (category_name) => `/filter.php?c=${category_name}`,
  DETAIL_MEAL: (meal_id) => `/lookup.php?i=${meal_id}`,
};

export default ApiEndpoint;
