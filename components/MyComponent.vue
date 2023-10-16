<!-- components/MyComponent.vue -->
<template>
  <v-card>
    <v-card-title>Meine eigene Komponente</v-card-title>
    <v-card-text>
      Dies ist der Inhalt meiner eigenen Komponente:
      <FontSizeAdjuster />
    </v-card-text>
  </v-card>
</template>

<script>
import FontSizeAdjuster from "~/components/FontSizeAdjuster.vue";

export default {
  name: 'MyComponent',
  components: {FontSizeAdjuster},
};
</script>