<template>
  <div v-if="data" class="max-w-[1280px] m-auto px-8 flex flex-col gap-6">
    <div class="py-6">
      <h1 class="text-center md:text-4xl text-2xl font-normal">
        Recommendations for You
      </h1>
      <div class="overflow-hidden">
        <div
          :class="[
            'w-full flex justify-center transition-transform duration-500 ease-in-out',
            slideClass,
          ]"
        >
          <ImageSliderComponent
            :dataImage="data.categories[randomNum[num]].strCategoryThumb"
            :dataName="data.categories[randomNum[num]].strCategory"
            :dataDescription="
              data.categories[randomNum[num]].strCategoryDescription
            "
          />
        </div>
      </div>
      <div class="flex md:justify-around justify-between">
        <button
          class="md:w-16 w-10 md:h-16 h-10 md:p-4 p-2 rounded-full flex justify-center items-center bg-white"
          @click="leftButtonBehaviour"
        >
          <ArrowComponent :name="'left'" />
        </button>
        <button
          class="md:w-16 w-10 md:h-16 h-10 md:p-4 p-2 rounded-full flex justify-center items-center bg-white"
          @click="rightButtonBehaviour"
        >
          <ArrowComponent :name="'right'" />
        </button>
      </div>
    </div>
    <h1 class="text-center md:text-4xl text-2xl font-normal">
      See All The Delicious Foods Categories
    </h1>
    <div class="p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <RouterLink
        v-for="(item, index) in data.categories"
        :to="'/cmlabs-frontend-internship-test/Categories/' + item.strCategory"
        :key="index"
      >
        <CardComponent :dataName="item.strCategory" :dataImage="item.strCategoryThumb" />
      </RouterLink>
    </div>
  </div>
  <div v-else-if="error">
    <p>Error loading data: {{ error }}</p>
  </div>
  <div
    v-else
    class="bg-gray-400 h-screen w-full flex items-center justify-center"
  >
    <LoadingComponent/>
  </div>
</template>

<script>
import LoadingComponent from "@components/LoadingComponent.vue";
import CardComponent from "@components/CardComponent.vue";
import ImageSliderComponent from "@components/ImageSliderComponent.vue";
import ArrowComponent from "@components/ArrowComponent.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    LoadingComponent,
    CardComponent,
    ImageSliderComponent,
    ArrowComponent,
    RouterLink,
  },
  data() {
    return {
      data: null,
      randomNum: [],
      num: 0,
      error: null,
      slideClass: "",
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
          {
            method: "GET",
          }
        );
        this.data = await response.json();
        this.getRandomNumbers();
      } catch (error) {
        this.error = error;
      }
    },
    getRandomNumbers() {
      let numbers = [];
      while (numbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 14); // Generates a random number between 0 and 13
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      this.randomNum = numbers;
    },
    leftButtonBehaviour() {
      this.slideClass = "-translate-x-full";
      setTimeout(() => {
        this.slideClass = "";
        if (this.num === 0) {
          this.num = 4;
        } else {
          this.num = this.num - 1;
        }
      }, 500);
    },
    rightButtonBehaviour() {
      this.slideClass = "translate-x-full";
      setTimeout(() => {
        this.slideClass = "";
        if (this.num === 4) {
          this.num = 0;
        } else {
          this.num = this.num + 1;
        }
      }, 500);
    },
  },
};
</script>

<style scoped>
.slider-container {
  transition: transform 0.5s ease-in-out;
}

.slide-left {
  transform: translateX(-100%);
}

.slide-right {
  transform: translateX(100%);
}
</style>
