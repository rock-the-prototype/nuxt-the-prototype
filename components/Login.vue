<template>
  <v-list>
    <VListItem @click="$emit('navigate', 'login')">
      <template #default>
        <v-icon>mdi-account</v-icon>
        Login
      </template>
    </VListItem>
  </v-list>
</template>

<script>
export default {
  name: 'Login',
};
</script>