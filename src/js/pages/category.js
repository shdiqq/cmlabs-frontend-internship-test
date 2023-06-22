import Meal from '../network/meal';

const Category = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const preloaderWrapper = document.getElementById('preloader-wrapper');
    console.log(preloaderWrapper);
    preloaderWrapper.style.visibility = 'visible';
    try {
      const response = await Meal.getListCategories();
      const responseRecords = response.data;
      this._listCategory = responseRecords.categories;
      this._populateRecordToCardFood(this._listCategory);
    } catch (error) {
      console.error(error);
    } finally {
      preloaderWrapper.style.visibility = 'hidden';
    }
  },

  _populateRecordToCardFood(listCategory = null) {
    if (!(typeof listCategory === 'object')) {
      throw new Error(`Parameter listCategory should be an object. The value is ${listCategory}`);
    }

    if (!Array.isArray(listCategory)) {
      throw new Error(`Parameter listCategory should be an array. The value is ${listCategory}`);
    }

    const recordBodyCard = document.querySelector('.card-category-record');

    recordBodyCard.innerHTML = '';
    if (listCategory.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }

    listCategory.forEach((item, idx) => {
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listCategory[idx]);
    });
  },

  _templateBodyCard(index, dataRecord) {
    return `
      <card-food
        name="${dataRecord.strCategory}"
        photoUrl="${dataRecord.strCategoryThumb}"
      ></card-food>
    `;
  },

  _templateEmptyBodyCard() {
    return `
      <div class="text-center">Tidak ada list food</div>
    `;
  },
};

export default Category;
