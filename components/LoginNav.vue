<template>
  <v-list-item @click="$emit('navigate', 'login')">
    <v-icon>mdi-account</v-icon>
    Login
  </v-list-item>
</template>

<script>
export default {
  name: 'LoginNav',
};
</script>