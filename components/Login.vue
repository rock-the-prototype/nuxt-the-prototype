<template>
  <v-list-item @click="$emit('navigate', 'login')">
    <v-list-item-icon>
      <v-icon>mdi-account</v-icon>
    </v-list-item-icon>
    <v-list-item-content>Login</v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'Login',
};
</script>