<template>
  <v-list>
    <VListItem @click="$emit('navigate', 'login')">
      <template #default>
        <v-icon>mdi-account</v-icon>
        Login
      </template>
    </VListItem>
  </v-list>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      Dies ist der Inhalt meiner Komponente Login.
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
};
</script>