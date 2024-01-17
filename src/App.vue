<template>
  <div class="bg-slate-100 min-h-screen">
    <div class="fixed bg-slate-100 w-full h-fit z-50 px-8">
      <NavbarComponent />
    </div>
    <div class="pt-[90px]">
      <RouterView />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@components/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },
};
</script>
