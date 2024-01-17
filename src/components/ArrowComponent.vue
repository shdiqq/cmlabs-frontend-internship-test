<template>
  <font-awesome-icon :icon="['fas', `arrow-${name}`]" class="w-full h-full" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: function (value) {
        return ["up", "down", "left", "right"].includes(value);
      },
    },
  },
};
</script>
