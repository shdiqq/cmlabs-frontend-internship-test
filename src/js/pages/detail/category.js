import Meal from '../../network/meal';

const Detail_Category = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    // const preloaderWrapper = document.getElementById('preloaderWrapper');
    // preloaderWrapper.style.visibility = 'visible';
    const params = window.location.search.split('?')[1].split('=')[1];
    try {
      const response = await Meal.getFilterCategory(params);
      const responseRecords = response.data;
      this._listFilterCategory = responseRecords.meals;
      this._populateRecordToCardFood(this._listFilterCategory, params);
    } catch (error) {
      console.error(error);
    } finally {
      // preloaderWrapper.style.visibility = 'hidden';
    }
  },

  _populateRecordToCardFood(listFilterCategory = null, params) {
    if (!(typeof listFilterCategory === 'object')) {
      throw new Error(
        `Parameter listFilterCategory should be an object. The value is ${listFilterCategory}`,
      );
    }

    if (!Array.isArray(listFilterCategory)) {
      throw new Error(
        `Parameter listFilterCategory should be an array. The value is ${listFilterCategory}`,
      );
    }

    const recordBodyHeading = document.querySelector('main .heading-container .heading');
    recordBodyHeading.innerHTML = '';

    recordBodyHeading.innerHTML += this._templateHeader(params);

    const recordBodyCard = document.querySelector(
      'main .card-filter-category-container .card-filter-category-record',
    );
    recordBodyCard.innerHTML = '';

    if (listFilterCategory.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }

    listFilterCategory.forEach((item, idx) => {
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listFilterCategory[idx], params);
    });
  },

  _templateHeader(params) {
    return `
      <div class="breadcumb">
        <a href="/"><i class="fa-solid fa-house"></i></a>
        <i class="fa-solid fa-angle-right"></i>
        <a href="/">Home</a>
        <i class="fa-solid fa-angle-right"></i>
        <a href="/">Foods</a>
        <i class="fa-solid fa-angle-right"></i>
        <span>${params}</span>
      </div>
      <h1>${params} Meals</h1>
      <hr></hr>
    `;
  },

  _templateBodyCard(index, dataRecord, params) {
    return `
      <card-food
        id="${dataRecord.idMeal}"
        name="${dataRecord.strMeal}"
        photoUrl="${dataRecord.strMealThumb}"
      ></card-food>
    `;
  },

  _templateEmptyBodyCard() {
    return `
      <div class="text-center">Tidak ada list food</div>
    `;
  },
};

export default Detail_Category;
