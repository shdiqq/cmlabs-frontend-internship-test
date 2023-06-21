import Meal from '../../network/meal';

const Detail_Meal = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    // const preloaderWrapper = document.getElementById('preloaderWrapper');
    // preloaderWrapper.style.visibility = 'visible';
    const params = window.location.search.split('?')[1].split('=')[1];
    try {
      const response = await Meal.getDetailMeal(params);
      const responseRecords = response.data;
      this._listDetailMeal = responseRecords.meals;
      console.log(this._listDetailMeal);
      this._populateRecordToCardFood(this._listDetailMeal);
    } catch (error) {
      console.error(error);
    } finally {
      // preloaderWrapper.style.visibility = 'hidden';
    }
  },

  _populateRecordToCardFood(listDetailMeal = null) {
    if (!(typeof listDetailMeal === 'object')) {
      throw new Error(
        `Parameter listDetailMeal should be an object. The value is ${listDetailMeal}`,
      );
    }

    if (!Array.isArray(listDetailMeal)) {
      throw new Error(
        `Parameter listDetailMeal should be an array. The value is ${listDetailMeal}`,
      );
    }

    const recordBodyHeading = document.querySelector('main .heading-container .heading');
    const recordBodyCard = document.querySelector('.detail-meal-container');

    recordBodyCard.innerHTML = '';
    recordBodyHeading.innerHTML = '';
    if (listDetailMeal.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }

    listDetailMeal.forEach((item, idx) => {
      recordBodyHeading.innerHTML += this._templateHeader(idx, listDetailMeal[idx]);
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listDetailMeal[idx]);

      const videoButton = document.querySelector(
        'main .detail-meal-container .detail-meal .option button.video',
      );
      const transcriptButton = document.querySelector(
        'main .detail-meal-container .detail-meal .option button.transcript',
      );
      videoButton.addEventListener('click', function () {
        const video = document.querySelector(
          'main .detail-meal-container .detail-meal .video-wrapper',
        );
        video.classList.remove('hide');
        videoButton.classList.remove('change');
        transcriptButton.classList.remove('change');
      });
      transcriptButton.addEventListener('click', function () {
        const video = document.querySelector(
          'main .detail-meal-container .detail-meal .video-wrapper',
        );
        video.classList.add('hide');
        videoButton.classList.add('change');
        transcriptButton.classList.add('change');
      });
    });
  },

  _templateListIngredients(dataRecord) {
    let i = 1;
    let li = '';
    while (
      i < 21 &&
      eval('dataRecord.strIngredient' + `${i}`) &&
      eval('dataRecord.strMeasure' + `${i}`)
    ) {
      li += `<li>${eval('dataRecord.strMeasure' + `${i}`)} ${eval(
        'dataRecord.strIngredient' + `${i}`,
      )}</li>`;
      i = i + 1;
    }
    return li;
  },

  _templateListInstructions(dataInstruction) {
    const instructions = dataInstruction.split('.');
    let li = '';
    console.log(instructions.length);
    instructions.forEach((instruction, index) => {
      if (index + 1 !== instructions.length) {
        li += ` <li>
              <p>Step ${index + 1}</p>
              <p>${instruction}</p>
              </li>
            `;
      }
    });
    return li;
  },

  _templateHeader(index, dataRecord) {
    return `
      <div class="breadcumb">
        <a href="/"><i class="fa-solid fa-house"></i></a>
        <i class="fa-solid fa-angle-right"></i>
        <a href="/">Home</a>
        <i class="fa-solid fa-angle-right"></i>
        <a href="/">Foods</a>
        <i class="fa-solid fa-angle-right"></i>
        <a href="/detail/category.html?category_name=${dataRecord.strCategory}">${dataRecord.strCategory}</a>
        <i class="fa-solid fa-angle-right"></i>
        <span>${dataRecord.strMeal}</span>
      </div>
        <h1 class="name-meal">${dataRecord.strMeal}</h1>
        <p>${dataRecord.strArea} Cultinary</p>
      <hr></hr>
    `;
  },

  _templateBodyCard(index, dataRecord) {
    return `
        <div class="detail-meal">
          <div class="option">
            <button class="video" aria-label="video-click">Video</button>
            <button class="transcript" aria-label="transcript-click">Transcript</button>
          </div>
          <div class="video-wrapper">
            <div class="video">
              <iframe src="${dataRecord.strYoutube.replace('watch?v=', 'embed/')}"></iframe>
            </div>
          </div>
          <div class="ingredients-container">
            <div class="ingredients">
              <h1>Ingredients</h1>
              <ul>${this._templateListIngredients(dataRecord)}</ul>
            </div>
          </div>
          <div class="instructions-container">
            <div class="instructions">
              <h1>Instructions</h1>
              <ol>${this._templateListInstructions(dataRecord.strInstructions)}</ol>
            </div>
          </div>
          </div>
          </div>
        </div>
    `;
  },

  _templateEmptyBodyCard() {
    return `
      <div class="text-center">Tidak ada list food</div>
    `;
  },
};

export default Detail_Meal;
