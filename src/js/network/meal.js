import ApiEndpoint from '../config/api-endpoint';
import instance from '../config/api-instance';

const Meal = {
  async getListCategories() {
    return await instance('application/json')({
      method: 'get',
      url: ApiEndpoint.LIST_CATEGORY,
    })
      .then((res) => {
        //console.log(res);
        return res;
      })
      .catch((err) => {
        //console.log(err);
        return err;
      });
  },

  async getDetailMeal(id) {
    return await instance('application/json')({
      method: 'get',
      url: ApiEndpoint.DETAIL_MEAL(id),
    })
      .then((res) => {
        //console.log(res);
        return res;
      })
      .catch((err) => {
        //console.log(err);
        return err;
      });
  },

  async getFilterCategory(category_name) {
    return await instance('application/json')({
      method: 'get',
      url: ApiEndpoint.FILTER_CATEGORY(category_name),
    })
      .then((res) => {
        //console.log(res);
        return res;
      })
      .catch((err) => {
        //console.log(err);
        return err;
      });
  },
};

export default Meal;
