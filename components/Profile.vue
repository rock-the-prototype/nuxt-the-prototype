<template>
  <v-list-item @click="$emit('navigate', 'profile')">
    <v-list-item-icon>
      <v-icon>mdi-account</v-icon>
    </v-list-item-icon>
    <v-list-item-content>Profil</v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'Profile',
};
</script>