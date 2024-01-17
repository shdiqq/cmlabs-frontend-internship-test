<template>
  <div v-if="data" class="max-w-[1280px] m-auto px-8">
    <div class="py-6">
      <div class="pb-6">
        <div class="flex flex-row items-center sm:gap-4 gap-2">
          <RouterLink to="/cmlabs-frontend-internship-test" class="flex flex-row items-center gap-2">
            <font-awesome-icon icon="home" class="sm:w-5 w-4 sm:h-5 h-4" />
            <div>Home</div>
          </RouterLink>
          <font-awesome-icon
            icon="chevron-right"
            class="sm:w-5 w-4 sm:h-5 h-4"
          />
          <div class="text-gray-500">{{ getParams }}</div>
        </div>
      </div>
      <h1 class="text-center md:text-4xl text-2xl font-normal">
        {{ getParams }} Category
      </h1>
      <div
        class="p-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
      >
        <RouterLink
          v-for="(item, index) in data"
          :to="'/cmlabs-frontend-internship-test/Categories/' + getParams + '/Meals/' + item.idMeal"
          :key="index"
        >
          <CardComponent :dataName="item.strMeal" :dataImage="item.strMealThumb" />
        </RouterLink>
      </div>
    </div>
  </div>
  <div v-else-if="error">
    <p>Error loading data: {{ error }}</p>
  </div>
  <div
    v-else
    class="bg-gray-400 fixed h-screen w-screen flex items-center justify-center"
  >
    <LoadingComponent/>
  </div>
</template>

<script>
import LoadingComponent from "@components/LoadingComponent.vue";
import CardComponent from "@components/CardComponent.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    LoadingComponent,
    CardComponent,
    RouterLink,
  },
  data() {
    return {
      data: null,
      error: null,
    };
  },
  computed: {
    getParams() {
      return this.$route.params.name;
    },
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.getParams}`,
          {
            method: "GET",
          }
        );
        const responseJSON = await response.json();
        this.data = responseJSON.meals;
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>
