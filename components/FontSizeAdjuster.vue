<template>
  <div class="adjuster-container">
    <p :style="{ fontSize: `${fontSize}px` }">Dies ist ein Beispieltext, dessen Schriftgröße Du ändern kannst!</p>
    <div class="button-group">
      <v-btn icon @click="decreaseFontSize">
        <v-icon>mdi-format-font-size-decrease</v-icon>
      </v-btn>
      <v-btn icon @click="increaseFontSize">
        <v-icon>mdi-format-font-size-increase</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const fontSize = ref(16); // Standard-Schriftgröße

    const decreaseFontSize = () => {
      if (fontSize.value > 12) {
        fontSize.value--;
      }
    };

    const increaseFontSize = () => {
      if (fontSize.value < 32) {
        fontSize.value++;
      }
    };

    return { fontSize, decreaseFontSize, increaseFontSize };
  },
};
</script>

<style scoped>
.adjuster-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.button-group {
  display: flex;
  gap: 10px;
}
</style>