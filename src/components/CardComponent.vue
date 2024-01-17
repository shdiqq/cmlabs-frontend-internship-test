<template>
  <div class="relative group overflow-hidden rounded-2xl cursor-pointer">
    <div
      v-show="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-gray-300"
    >
      <LoadingComponent />
    </div>

    <h3
      v-show="!isLoading"
      class="absolute p-4 z-10 w-full h-full flex justify-center items-center font-bold text-2xl text-center text-white bg-gray-950 bg-opacity-30"
    >
      {{ dataName }}
    </h3>
    <img
      :src="dataImage"
      :alt="dataName"
      class="w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:scale-125"
      @load="imageLoaded"
    />
  </div>
</template>

<script>
import LoadingComponent from "@components/LoadingComponent.vue";

export default {
  components: {
    LoadingComponent,
  },
  props: {
    dataName: {
      type: String,
      required: true,
    },
    dataImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    imageLoaded(event) {
      this.isLoading = false;
      event.target.style.opacity = 1;
    },
  },
};
</script>
