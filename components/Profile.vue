<template>
  <v-list>
    <v-list-item @click="$emit('navigate', 'profile')">
      <template #default>
        <v-icon>mdi-account</v-icon>
        Profil
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'Profile',
};
</script>