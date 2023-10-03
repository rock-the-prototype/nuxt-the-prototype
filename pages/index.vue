<script setup lang="ts">

</script>

<template>
  <MyComponent />
</template>

<script>
import MyComponent from '@/components/MyComponent.vue';

const routes = [
      { path: '/login', name: 'login', component: () => import('@/pages/login.vue') },
];


export default {
  components: {
    MyComponent
  }
};
</script>

<style scoped>

</style>