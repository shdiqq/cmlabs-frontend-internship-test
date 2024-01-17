<template>
  <div
    class="relative py-6 grid lg:grid-cols-2 lg:gap-12 gap-4 items-center justify-items-stretch"
  >
    <div class="grid grid-flow-row lg:gap-6 gap-2">
      <h3 class="font-extrabold md:text-3xl text-lg md:text-left text-center">
        {{ dataName }}
      </h3>
      <span class="font-medium md:text-lg text-xs text-justify">{{
        dataDescription
      }}</span>
    </div>
    <img :src="dataImage" :alt="dataImage" class="object-cover w-full" />
  </div>
</template>

<script>
export default {
  props: {
    dataImage: {
      type: String,
      required: true,
    },
    dataName: {
      type: String,
      required: true,
    },
    dataDescription: {
      type: String,
      required: true,
    },
  },
};
</script>
