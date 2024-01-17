<template>
  <div v-if="data" class="max-w-[1280px] m-auto px-8">
    <div class="flex flex-col gap-6 py-6">
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
          <RouterLink :to="'/cmlabs-frontend-internship-test/Categories/' + getParams.name">{{
            getParams.name
          }}</RouterLink>
          <font-awesome-icon
            icon="chevron-right"
            class="sm:w-5 w-4 sm:h-5 h-4"
          />
          <div class="text-gray-500">{{ data.strMeal }}</div>
        </div>
      </div>
      <h1 class="lg:hidden block md:text-6xl text-3xl font-semibold">
        {{ data.strMeal }}
      </h1>
      <div class="grid lg:grid-cols-2 grid-flow-row gap-12 h-fit">
        <div class="h-fit flex flex-col gap-6">
          <img
            :src="data.strMealThumb"
            alt="Meal Image"
            class="shadow-md object-cover"
          />
          <div class="flex flex-col gap-2">
            <h2 class="text-3xl font-semibold">Ingredients</h2>
            <div class="grid gap-3">
              <div
                v-for="ingredient in getIngredients(data)"
                :key="ingredient.name"
                class="flex justify-between gap-4"
              >
                <span class="text-lg">{{ ingredient.name }}</span>
                <span class="text-lg">{{ ingredient.measure }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="h-fit flex flex-col gap-6">
          <h1 class="lg:block hidden text-6xl font-semibold">
            {{ data.strMeal }}
          </h1>
          <div class="flex flex-col gap-2">
            <h2 class="text-3xl font-semibold">Instruction</h2>
            <div class="grid gap-3">
              <div
                v-for="(step, index) in splitInstructions(data.strInstructions)"
                :key="index"
                class="flex items-start gap-4"
              >
                <span
                  class="w-9 h-9 rounded-full flex justify-center items-center bg-orange-100 font-semibold text-lg"
                  >{{ index + 1 }}</span
                >
                <span class="flex-1 text-lg text-justify">{{ step }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="data.strYoutube" class="lg:p-8">
      <iframe
        :src="youtubeEmbedUrl(data.strYoutube)"
        class="w-full aspect-video"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>

  <div v-else-if="error" class="p-6">
    <p class="text-red-500">Error loading data: {{ error.message }}</p>
  </div>

  <div
    v-else
    class="bg-gray-400 h-screen w-screen flex items-center justify-center"
  >
    <LoadingComponent/>
  </div>
</template>

<script>
import LoadingComponent from "@components/LoadingComponent.vue";

export default {
  components: { 
    LoadingComponent,
  },
  data() {
    return {
      data: null,
      error: null,
    };
  },
  computed: {
    getParams() {
      return this.$route.params;
    },
  },
  async mounted() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.getParams.id}`
      );
      if (!response.ok) throw new Error("Failed to fetch meal details");
      const responseJSON = await response.json();
      this.data = responseJSON.meals[0];
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    getIngredients(mealData) {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];
        if (ingredient && measure) {
          ingredients.push({ name: ingredient, measure: measure });
        }
      }
      return ingredients;
    },
    splitInstructions(instructions) {
      return instructions
        .split(/\r?\n/)
        .filter((line) => line.trim() !== "" && !line.includes("STEP"))
        .map((line) => line.replace(/^\d+\.\t/, ""));
    },
    youtubeEmbedUrl(youtubeLink) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
      const match = youtubeLink.match(regExp);
      return match && match[2].length == 11
        ? `https://www.youtube.com/embed/${match[2]}`
        : null;
    },
  },
};
</script>
